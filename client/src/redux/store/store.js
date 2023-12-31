import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducer/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddleware)));

// export default store;

// import {createStore, applyMiddleware} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import reducer from "../reducer/reducer";

// export const store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk)))
