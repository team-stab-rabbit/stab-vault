export const addCollection = (collection) => ({
  type: 'add',
  payload: collection,
});

export const removeCollection = (collection) => ({
  type: 'remove',
  payload: collection,
});

export const setCollection = (collection) => ({
  type: 'set',
  payload: collection,
});
