import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";


function configureStore(state = { rotating: true }) {
    return createStore(rotateReducer,state,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default configureStore;