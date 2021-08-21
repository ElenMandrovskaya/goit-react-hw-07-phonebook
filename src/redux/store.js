import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./contacts/contacts-reducer";

const store = configureStore({
    reducer: {
        contacts: rootReducer
    },
    devtools: process.env.NODE_ENV !== 'production'
})
export default store;