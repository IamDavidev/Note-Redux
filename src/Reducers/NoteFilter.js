const initialState = 'all'

export default function NoteFilter(state = initialState, action){
  switch (action.type) {
    case 'all':
      return console.log('all');
    case 'importants':
      return console.log('importants');
    case 'NotImportatn':
      return console.log('NotImportatn');
    default:
      return state;
  }
};


