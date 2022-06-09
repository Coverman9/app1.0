const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {

  dialogsData: [
    { id: 1, name: 'Nurs', img: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: 2, name: 'Dimas', img: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: 3, name: 'Bokyt', img: 'https://www.w3schools.com/howto/img_avatar.png' }
  ],
  messagesData: [
    { id: 1, message: 'salam' },
    { id: 2, message: 'slm' },
    { id: 3, message: 'hi' }
  ]
  

};

const chatReducer = (state = initialState, action) => {

  switch (action.type) {
      case ADD_MESSAGE:
      let newMessage = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: newMessage }]
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })


export default chatReducer;