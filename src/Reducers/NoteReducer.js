const initialState = [
  {
    id: 1,
    title: 'bienvnidad a notes dlt redux',
    description: 'add you notes',
    importat: true,
  },
];

export const NoteReducer = (state = initialState, action) => {
  if (action.type === '@note/add') {
    return [...state, action.payload];
  }
  if (action.type === '@note/important') {
    const { id } = action.payload;
    return state.map((note) => {
      if (note.id === id) {
        return { ...note, important: !note.important };
      }
    });
  }
  return state;
};

