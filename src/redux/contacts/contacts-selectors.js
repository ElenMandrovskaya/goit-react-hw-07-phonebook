import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.filter;
export const getContacts = (state) => state.items;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);