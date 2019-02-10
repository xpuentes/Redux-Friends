import axios from 'axios';

export const FETCH_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

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
      console.log(response);
      dispatch({
        type: ADD_FRIENDS,
        payload: newFriend
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const deleteFriend = (id) => dispatch => {
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_FRIEND,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const updateFriend = (updatedFriend, id) => dispatch => {
  axios
    .put(`http://localhost:5000/api/friends/${id}`, updatedFriend)
    .then(response => {
      dispatch({
        type: UPDATE_FRIEND,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}
