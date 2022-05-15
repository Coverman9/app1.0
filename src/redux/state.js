const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_COMMENT = 'UPDATE-COMMENT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

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
      newMessageText: 'test'
      
    },
    reviews: {
      commentsData: [
        { id: 1, comment: 'hi how are you' },
        { id: 2, comment: 'alalalalalal' },
        { id: 3, comment: 'comment comment comment' }],
      newPostText: '123'
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
    //reviews
    if (action.type === ADD_COMMENT) {
      let newComment = {
        id: 5,
        comment: this._state.reviews.newPostText
      };
      this._state.reviews.commentsData.push(newComment);
      this._state.reviews.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_COMMENT) {
      this._state.reviews.newPostText = action.newText;
      this._callSubscriber(this._state);
    }

    
    //chat here
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 4,
        message: this._state.chatHere.newMessageText
      };
      this._state.chatHere.messagesData.push(newMessage);
      this._state.chatHere.newMessageText = '';
      this._callSubscriber(this._state);
    } 
    else if (action.type === UPDATE_MESSAGE) {
      this._state.chatHere.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT})
export const  updateCommentActionCreator = (text) => ({
  type: UPDATE_COMMENT, newText:text
})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE, newText:text
}) 

export default store;
window.store = store;
//store oop