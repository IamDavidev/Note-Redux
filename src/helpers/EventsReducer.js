
export const createNote = (description) => {
    return {
      type: '@note/add',
      payload: {
        id: description,
        important: false,
        description,
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