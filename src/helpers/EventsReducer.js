
export const createNote = (content) => {
    return {
      type: '@note/add',
      payload: {
        id: content,
        important: false,
        content,
      },
    };
  };
  
  export const toggleImportant = (id) => {
    return {
      type: '@note/important',
      payload: {
        id,
      },
    };
  };