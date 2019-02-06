import { GET_FRIENDS, ADD_FRIENDS } from '../actions/actions';

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
      case GET_FRIENDS:
        return ;
      default:
        return state;
    }
}

export default reducer;
