import { combineReducers, legacy_createStore } from "redux";
import chatReducer from "./chat-reducer";
import profileReducer from "./profile-reducer";
import reviewsReducer from "./reviews-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    chatHere : chatReducer,
    reviews : reviewsReducer,
    usersPage : usersReducer,
    profilePage: profileReducer
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;
