export const defaultState = {
  pathName: '',
  chosenCollections: [],
};

export default (state = defaultState, action) => {
  const { title } = action.payload; // get title from payload
  switch (action.type) {
    case 'add':
      return {
        ...state,
        chosenCollections: [...state.chosenCollections, action.payload],
      };
    case 'remove':
      return {
        ...state,
        chosenCollections: state.chosenCollections.filter((collection) => collection.title !== title),
      };
    case 'set':
      return {
        ...state,
        chosenCollections: action.payload,
      };
    case 'setPathName':
      return {
        ...state,
        pathName: action.payload,
      };
    default:
      return state;
  }
};
