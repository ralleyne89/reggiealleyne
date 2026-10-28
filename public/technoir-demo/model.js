export const MAX_QUANTITY = 9;
export const emptySnapshot = () => ({ saved: [], bag: [], orders: [] });
export const lineID = (line) => `${line.productID}:${line.size}:${line.color}`;
export const money = (value) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export function filterProducts(products, { query = "", category = "All", designer = "All designers", sort = "Curated" } = {}) {
  const needle = query.trim().toLocaleLowerCase();
  const result = products.filter((p) => (category === "All" || p.category === category) &&
    (designer === "All designers" || p.designer === designer) &&
    (!needle || `${p.name} ${p.designer} ${p.category}`.toLocaleLowerCase().includes(needle)));
  if (sort === "Price: low to high") result.sort((a, b) => a.price - b.price);
  if (sort === "Price: high to low") result.sort((a, b) => b.price - a.price);
  if (sort === "New arrivals") result.sort((a, b) => Number(b.isNew) - Number(a.isNew) || a.id.localeCompare(b.id));
  return result;
}

export function addToBag(bag, product, size, color) {
  if (!product.sizes.includes(size) || !product.colors.includes(color)) throw new Error("Please choose an available size and finish.");
  const line = { productID: product.id, size, color, quantity: 1 };
  const found = bag.some((item) => lineID(item) === lineID(line));
  return found ? bag.map((item) => lineID(item) === lineID(line) ? { ...item, quantity: Math.min(MAX_QUANTITY, item.quantity + 1) } : item) : [...bag, line];
}

export function setQuantity(bag, id, quantity) {
  if (!Number.isFinite(quantity)) return bag;
  return bag.map((line) => lineID(line) === id ? { ...line, quantity: Math.max(0, Math.min(MAX_QUANTITY, Math.trunc(quantity))) } : line).filter((line) => line.quantity > 0);
}

export function bagTotal(bag, products) {
  return bag.reduce((total, line) => total + (products.find((p) => p.id === line.productID)?.price ?? 0) * line.quantity, 0);
}

export function restoreSnapshot(raw, products) {
  if (!raw || typeof raw !== "object") return emptySnapshot();
  const validLines = (lines) => Array.isArray(lines) ? lines.filter((line) => {
    const p = products.find((item) => item.id === line?.productID);
    return p && p.sizes.includes(line.size) && p.colors.includes(line.color) && Number.isInteger(line.quantity) && line.quantity > 0 && line.quantity <= MAX_QUANTITY;
  }).map(({ productID, size, color, quantity }) => ({ productID, size, color, quantity })) : [];
  return {
    saved: Array.isArray(raw.saved) ? [...new Set(raw.saved.filter((id) => products.some((p) => p.id === id)))] : [],
    bag: validLines(raw.bag),
    orders: Array.isArray(raw.orders) ? raw.orders.filter((o) => typeof o?.id === "string" && typeof o?.date === "string" && Number.isFinite(Date.parse(o.date)) && Array.isArray(o.items)).slice(0, 25).map((o) => ({
      id: o.id, date: o.date, delivery: typeof o.delivery === "string" ? o.delivery : "Standard · 3–5 days", items: validLines(o.items)
    })).filter((o) => o.items.length > 0) : []
  };
}

export function placeOrder(snapshot, delivery, id = `TN-${crypto.randomUUID().slice(0, 8).toUpperCase()}`, date = new Date().toISOString()) {
  if (snapshot.bag.length === 0) throw new Error("Your bag is empty.");
  const order = { id, date, delivery, items: snapshot.bag.map((line) => ({ ...line })) };
  return { order, snapshot: { saved: [...snapshot.saved], bag: [], orders: [order, ...snapshot.orders].slice(0, 25) } };
}
