// Counter keys for the read counts (abacus.jasoncameron.dev only allows [A-Za-z0-9_.-]).
export const readsKey = (collection: string, id: string) =>
  `${collection}-${id}`.replace(/[^A-Za-z0-9_.-]/g, '-');
