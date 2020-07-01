export const defaultState = [
  {
    title: 'CSS',
    category: 'Front End',
    description: 'Description of this collection',
  },
  {
    title: 'HTML',
    category: 'Front End',
    description: 'Description of this collection',
  },
  {
    title: 'SASS',
    category: 'Front End',
    description: 'Description of this collection',
  },
];

export default (state = defaultState, action) => {
  const { title } = action.payload; // get title from payload
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((collection) => collection.title !== title);
    case 'set':
      return action.payload;
    default:
      return state;
  }
};
