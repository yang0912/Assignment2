import{ ADD_MESSAGE ,CLEAR_MESSAGE} from '../actions/types';

const initialState ={
    items:[],
    item:{}
};

// `export default function(state = initialState, action) {
//     switch (action.type) {
//       case FETCH_POSTS:
//         return {
//           ...state,
//           items: action.payload
//         };
//       case NEW_POST:
//         return {
//           ...state,
//           item: action.payload
//         };
//       default:
//         return state;
//     }
//   }

  export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_MESSAGE:
        return {
          ...state,
          items:[
            ...state.items,
            Object.assign({}, action.item)
          ],
        }
        case CLEAR_MESSAGE:
        return {
          ...state,
          items: [],
        };
      default:
        console.log(state)
        return state;
    }
  }