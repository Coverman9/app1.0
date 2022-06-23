import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./auth-reducer";
import chatReducer from "./chat-reducer";
import profileReducer from "./profile-reducer";
import reviewsReducer from "./reviews-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    chatHere : chatReducer,
    reviews : reviewsReducer,
    usersPage : usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store;

export default store;
