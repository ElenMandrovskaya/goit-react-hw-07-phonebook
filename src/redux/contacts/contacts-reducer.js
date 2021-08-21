import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as contactsActions from '../contacts/contacts-actions.js';

const initFilter = '';

const checkContact = (contacts, name) => {
    const existingName = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingName) {
        toast.info('Contact with such name already exists');
        return 
    }
};

const fetchItems = (state, action) => {
    return action.payload
};

const addItem = (state, action) => {
  const existingСontact = checkContact(state, action.payload.name);
    if (existingСontact) {
        return state;
    }
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

const filterReducer = createReducer(initFilter, {
  [contactsActions.filterContacts]: filterItem,
});

const rootReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
    }
);
export default rootReducer