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
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        default: return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE, newText:text
}) 

export default chatReducer;