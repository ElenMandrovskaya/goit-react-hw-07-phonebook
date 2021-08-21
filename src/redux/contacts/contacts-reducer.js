import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as contactsActions from '../contacts/contacts-actions.js';

const fetchItems = (state, action) => {
    return action.payload
};

const addItem = (state, action) => {
    return [action.payload, ...state];
};

const removeItem = (state, action) => {
    const contacts = state.filter(item => item.id !== action.payload);
    return contacts
};

const filterItem = (state, action) => {
    return action.payload;
};
const itemReducer = createReducer([], {
    [contactsActions.fetchContactSuccess]: fetchItems,
    [contactsActions.addContactSuccess]: addItem,
    [contactsActions.deleteContactSuccess]: removeItem,
});

const filterReducer = createReducer('', {
  [contactsActions.filterContacts]: filterItem,
});

const rootReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
    }
);
export default rootReducer