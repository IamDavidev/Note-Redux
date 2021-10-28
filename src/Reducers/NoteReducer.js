const initialState = [
  {
    id: 1,
    description: 'add you notes',
    important: true,
  },
];

export const NoteReducer = (state = initialState, action) => {
  if (action.type === '@note/add') {
    return [...state, action.payload];
  }
  if (action.type === '@note/important') {
    const { id } = action.payload;
    return state.map((i) => {
      if (i.id === id) {
        return {... i, important: !i.important };
      }
    });
  }
  return state;
};
