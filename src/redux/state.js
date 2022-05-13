let store = {
  _state : {
    chatHere: {
      dialogsData: [
        { id: 1, name: 'Nurs', img:'https://www.w3schools.com/howto/img_avatar.png' },
        { id: 2, name: 'Dimas', img:'https://www.w3schools.com/howto/img_avatar.png'},
        { id: 3, name: 'Bokyt', img:'https://www.w3schools.com/howto/img_avatar.png'}
      ],
      messagesData: [
        { id: 1, message: 'salam' },
        { id: 2, message: 'slm' },
        { id: 3, message: 'hi' }
      ]
    },
    reviews: {
      commentsData: [
      { id: 1, comment: 'hi how are you' },
      { id: 2, comment: 'alalalalalal' },
      { id: 3, comment: 'comment comment comment' }],
      newPostText: '123'
    }
  },
  getState(){
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addComment() {
    let newComment = {
      id: 5,
      comment: this._state.reviews.newPostText 
    };
      this._state.reviews.commentsData.push(newComment);
      this._state.reviews.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateComment(newText) {
    this._state.reviews.newPostText=newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}



export default store;
window.store = store;
//store oop