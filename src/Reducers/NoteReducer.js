const NoteReducer = (state = [], action) => {
  switch (action.type) {
    case '@note/add':
      return [...state, action.payload];
    case '@note/important':
      return () => {
        const { id } = action.payload;
        return state.map((i) => {
          i.id === id ? { ...state, important: !important } : i;
        });
      };

    default:
      return state;
  }
};

export default NoteReducer;
