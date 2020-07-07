export const addCollection = (collection) => ({
  type: 'add',
  payload: collection,
});

export const removeCollection = (collection) => ({
  type: 'remove',
  payload: collection,
});

export const setCollections = (collection) => ({
  type: 'set',
  payload: collection,
});

export const setPathName = (pathName) => ({
  type: 'setPathName',
  payload: pathName,
});
