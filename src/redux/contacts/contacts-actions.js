import { v4 as uuidv4 } from 'uuid';
import { createAction } from "@reduxjs/toolkit";
// import contactsTypes from './contacts-types'  /* ====== REDUX ======*/

//========== REDUX TOOLKIT ===========

export const addContact = createAction("contacts/add", ({name, number}) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    }
}));
export const removeContact = createAction("contacts/remove");
export const filterContacts = createAction("contacts/filter");


// =========== REDUX =================

// export const addContact = ({name, number}) => ({
//     type: contactsTypes.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// });

// export const removeContact = (id) => ({
//     type: contactsTypes.REMOVE, 
//     payload: id,
// });

// export const filterContacts = (value) => ({
//     type: contactsTypes.FILTER, 
//     payload: value,
// });