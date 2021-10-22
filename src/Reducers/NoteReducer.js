const NoteReducer = (state = [], action) => {
  switch (action.type) {
    case '@note/add':
      return [...state, action.payload];
    case '@note/imptr':
      return () => {
        const { id } = action.payload;
        return state.map((i) => {
          // i.id === id ? { ...i, imptr: !imptr } : i;
          if (i.id === id) return { ...i, id: 'ho' };
          return note;
        });
      };

    default:
      return state;
  }
};

export default NoteReducer;
