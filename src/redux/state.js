let rerenderEntireTree = () => {
  console.log('state changed');
}

let state = {
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
}

console.log(state);
window.state = state;
export const addComment = () => {
  let newComment = {
    id: 5,
    comment: state.reviews.newPostText 
  };
    state.reviews.commentsData.push(newComment);
    state.reviews.newPostText = '';
  rerenderEntireTree();
}
export const updateComment = (newText) => {
    state.reviews.newPostText=newText;
  rerenderEntireTree();
}
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;