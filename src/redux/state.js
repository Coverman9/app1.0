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
    { id: 3, comment: 'comment comment comment' }]
  }
}

export let addComments = (postComment) => {
  let newComments = {
    id: 1,
    comment: (postComment)
  };

  state.reviews.commentsData.push(newComments);
}

export default state;