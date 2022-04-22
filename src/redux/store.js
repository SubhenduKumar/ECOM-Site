import { createStore } from "redux";
import rootReducers from "./combineStore";
const store = createStore(rootReducers);

export default store;