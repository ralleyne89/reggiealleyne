import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { emptySnapshot, filterProducts, addToBag, setQuantity, lineID, bagTotal, restoreSnapshot, placeOrder } from '../../public/technoir-demo/model.js';

const { products } = JSON.parse(await readFile(new URL('../../public/technoir-demo/catalog.json', import.meta.url)));
const watch = products.find((p) => p.id === 'nocturne');
const addWatch = (bag, size = watch.sizes[0]) => addToBag(bag, watch, size, 'Onyx');

test('the web catalog preserves the native product range and supports combined filters', () => {
  assert.equal(products.length, 6);
  assert.deepEqual(filterProducts(products, { query: 'nocturne', category: 'Watches', designer: 'NOIR ATELIER' }).map((p) => p.id), ['nocturne']);
  assert.equal(filterProducts(products, { query: 'nocturne', category: 'Couture' }).length, 0);
  assert.equal(filterProducts(products, { query: 'nothing matches' }).length, 0);
  assert.equal(filterProducts(products, { sort: 'Price: low to high' })[0].id, 'orbit');
});

test('identical variants merge, different sizes stay separate, unavailable variants fail', () => {
  let bag = addWatch([]); bag = addWatch(bag); bag = addWatch(bag, watch.sizes[1]);
  assert.equal(bag.length, 2); assert.equal(bag[0].quantity, 2); assert.equal(bag[1].quantity, 1);
  assert.throws(() => addWatch(bag, 'Invalid'));
  assert.throws(() => addToBag(bag, watch, watch.sizes[0], 'Unavailable'));
  for (let i = 0; i < 20; i++) bag = addWatch(bag);
  assert.equal(bag[0].quantity, 9);
  assert.equal(setQuantity(bag, lineID(bag[0]), 0).length, 1);
  assert.equal(setQuantity(bag, lineID(bag[0]), 100)[0].quantity, 9);
});

test('checkout preserves selections and total, clears the bag, and survives reload', () => {
  const before = { ...emptySnapshot(), saved: ['orbit'], bag: addWatch(addWatch([])) };
  const total = bagTotal(before.bag, products);
  const result = placeOrder(before, 'Express · 1–2 days', 'TN-TEST', '2026-10-28T12:00:00Z');
  assert.equal(total, 1280); assert.equal(result.snapshot.bag.length, 0);
  assert.equal(bagTotal(result.order.items, products), total);
  before.bag[0].quantity = 8;
  assert.equal(result.order.items[0].quantity, 2);
  assert.deepEqual(restoreSnapshot(JSON.parse(JSON.stringify(result.snapshot)), products), result.snapshot);
  assert.throws(() => placeOrder(emptySnapshot(), 'Standard'));
});

test('corrupt stored data cannot create unknown products, invalid options, or impossible orders', () => {
  const valid = addWatch([])[0];
  const restored = restoreSnapshot({ saved: ['orbit', 'orbit', 'missing'], bag: [valid, null, { ...valid, quantity: -1 }, { ...valid, size: 'bad' }], orders: [{id:'bad', date:'invalid', items:[valid]}] }, products);
  assert.deepEqual(restored.saved, ['orbit']); assert.deepEqual(restored.bag, [valid]); assert.deepEqual(restored.orders, []);
  assert.deepEqual(restoreSnapshot(null, products), emptySnapshot());
});
