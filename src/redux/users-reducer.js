const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
  users: [
    { id: 1, photoUrl: 'https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg', 
    followed: true, fullName: 'Aibek', status: 'ya aibek', location: { city: 'Osh', country: 'kg' } },
    { id: 2, photoUrl: 'https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg', 
    followed: true, fullName: 'Maksat', status: 'ya krutoi bala', location: { city: 'Batken', country: 'kg' } },
    { id: 3, photoUrl: 'https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg', 
    followed: false, fullName: 'Bakyt', status: 'ya loh', location: { city: 'Naryn', country: 'kg' } }
  ],
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
      case FOLLOW:
        return  {
          ...state, 
          users:state.users.map(u => {
            if (u.id === action.userId){
              return{...u, followed:true}
            }
            return u
          })  
        }
      case UNFOLLOW:
        return  {
          ...state, 
          users:state.users.map(u => {
            if (u.id === action.userId){
              return{...u, followed:false}
            }
            return u
          })  
        }
      case SET_USERS: {
        return {...state, users: [...state.users, ...action.users]}
      } 
    default: 
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users})



export default usersReducer;