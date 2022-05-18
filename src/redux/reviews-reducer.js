const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_COMMENT = 'UPDATE-COMMENT';


let initialState = {
    
        commentsData: [
          { id: 1, comment: 'hi how are you' },
          { id: 2, comment: 'alalalalalal' },
          { id: 3, comment: 'comment comment comment' }],
        newPostText: '123'
      };

const reviewsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                id: 5,
                comment: state.newPostText
            };
            state.commentsData.push(newComment);
            state.newPostText = '';
            return state;
        case UPDATE_COMMENT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT})
export const  updateCommentActionCreator = (text) => ({
  type: UPDATE_COMMENT, newText:text
})



export default reviewsReducer;