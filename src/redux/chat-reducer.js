const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

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
  ],
  newMessageText: 'test'

};

const chatReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        newMessageText: action.newText
      };
      case ADD_MESSAGE:
      let newMessage = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, { id: 6, message: newMessage }]
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE, newText: text
})

export default chatReducer;