import axios from 'axios';

export const FETCH_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => dispatch => {
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({
        type: FETCH_FRIENDS,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const addFriend = (newFriend) => dispatch => {
  axios
    .post('http://localhost:5000/api/friends', newFriend)
    .then(response => {
      dispatch({
        type: ADD_FRIENDS,
        payload: newFriend
      });
    })
    .catch(err => {
      console.log(err);
    });
}
