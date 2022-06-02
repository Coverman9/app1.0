import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./auth-reducer";
import chatReducer from "./chat-reducer";
import profileReducer from "./profile-reducer";
import reviewsReducer from "./reviews-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    chatHere : chatReducer,
    reviews : reviewsReducer,
    usersPage : usersReducer,
    profilePage: profileReducer,
    auth: authReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
