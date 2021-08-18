import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import defaultContacts from '../../data/defaultContacts.json'
// import contactsTypes from "./contacts-types"; /* ====== REDUX ======*/
import { addContact, removeContact, filterContacts } from "./contacts-actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initContacts = JSON.parse(localStorage.getItem("contacts")) ?? defaultContacts;
const initFilter = '';

const checkContact = (contacts, name) => {
    const existingName = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingName) {
        toast.info('Contact with such name already exists');
        return existingName;
    }
};

//========== REDUX TOOLKIT ===========
const addItem = (state, action) => {
  const existingСontact = checkContact(state, action.payload.name);
    if (existingСontact) {
        return state;
    }
    localStorage.setItem("contacts", JSON.stringify([action.payload, ...state]));
    return [action.payload, ...state];
};

const removeItem = (state, action) => {
    const contacts = state.filter(item => item.id !== action.payload);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    return contacts
};

const filterItem = (state, action) => {
    return action.payload;
};

const itemReducer = createReducer(initContacts, {
  [addContact]: addItem,
  [removeContact]: removeItem,
});

const filterReducer = createReducer(initFilter, {
  [filterContacts]: filterItem,
});


//=========== REDUX ===================


// const itemReducer = (state = initContacts, action) => {
//     switch (action.type) {
//         case contactsTypes.ADD:
//             const existingСontact = checkContact(state, action.payload.name);
//             if (existingСontact) {
//                 return state;
//             }
//             localStorage.setItem("contacts", JSON.stringify([action.payload, ...state]));
//             return [action.payload, ...state];
//         case contactsTypes.REMOVE:
//             const contacts = state.filter(item => item.id !== action.payload);
//             localStorage.setItem("contacts", JSON.stringify(contacts));
//             return contacts
//         default:
//             return state;
//     }
// };

// const filterReducer = (state = initFilter, action) => {
//     switch (action.type) {
//         case contactsTypes.FILTER:
//             return action.payload;
//         default:
//             return state;
//     }
// };

const rootReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
    }
);
export default rootReducer