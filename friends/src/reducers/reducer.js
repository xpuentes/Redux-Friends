import { FETCH_FRIENDS, ADD_FRIENDS, DELETE_FRIEND, UPDATE_FRIEND } from '../actions/actions';

const intitialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

function reducer(state = intitialState, action) {
    switch (action.type) {
      case FETCH_FRIENDS:
        return { ...state, friends: action.payload };
      case ADD_FRIENDS:
        return { ...state, friends: [...state.friends, action.payload] }
      case DELETE_FRIEND:
        return { ...state, friends: action.payload };
      case UPDATE_FRIEND:
        return { ...state, friends: action.payload }
      default:
        return state;
    }
}

export default reducer;
