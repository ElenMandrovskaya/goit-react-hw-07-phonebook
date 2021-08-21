import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const filterContacts = createAction("contacts/filter");
