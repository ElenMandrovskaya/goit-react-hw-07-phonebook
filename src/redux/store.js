// import { createStore } from "redux"; /* ====== REDUX ======*/
// import { devToolsEnhancer } from "redux-devtools-extension"; /* ====== REDUX ======*/
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./contacts/contacts-reducer";

//=========== REDUX ===============
// const store = createStore(rootReducer, devToolsEnhancer());

//========== REDUX TOOLKIT =========
const store = configureStore({
    reducer: rootReducer,
    devtools: process.env.NODE_ENV !== 'production'
})
// console.log(store)
export default store;