import chatReducer from "./chat-reducer";
import reviewsReducer from "./reviews-reducer";

let store = {
  _state: {
    chatHere: {
      dialogsData: [
        { id: 1, name: 'Nurs', img: 'https://www.w3schools.com/howto/img_avatar.png' },
        { id: 2, name: 'Dimas', img: 'https://www.w3schools.com/howto/img_avatar.png' },
        { id: 3, name: 'Bokyt', img: 'https://www.w3schools.com/howto/img_avatar.png' }
      ],
      messagesData: [
        { id: 1, message: 'salam' },
        { id: 2, message: 'slm' },
        { id: 3, message: 'hi' }
      ],
      newMessageText: 'sex'

    },
    reviews: {
      commentsData: [
        { id: 1, comment: 'hi how are you' },
        { id: 2, comment: 'alalalalalal' },
        { id: 3, comment: 'comment comment comment' }],
      newPostText: 'sex'
    }
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.chatHere = chatReducer(this._state.chatHere, action);
    this._state.reviews = reviewsReducer(this._state.reviews, action);

    this._callSubscriber(this._state);

  }
}


export default store;
window.store = store;
//store oop