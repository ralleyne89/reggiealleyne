/**
 * Tiny external store for the contextual site cursor.
 *
 * Components opt in by adding `data-cursor-label="View case study"` to any
 * element — SiteCursor watches pointerover/pointerout via event delegation,
 * so there is zero per-component wiring.
 */

type Listener = () => void;

let currentLabel: string | null = null;
const listeners = new Set<Listener>();

export const setCursorLabel = (label: string | null) => {
  if (currentLabel === label) {
    return;
  }
  currentLabel = label;
  listeners.forEach((listener) => listener());
};

export const subscribeCursorLabel = (listener: Listener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const getCursorLabel = () => currentLabel;
