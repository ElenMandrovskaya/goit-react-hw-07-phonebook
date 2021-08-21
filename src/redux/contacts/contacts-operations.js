import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import * as contactsActions from '../contacts/contacts-actions.js';

// axios.defaults.baseURL = 'http://localhost:7777';
axios.defaults.baseURL = 'https://6120f07524d11c001762ee9f.mockapi.io';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());
  try {
      const { data } = await axios.get('/contacts');
      dispatch(contactsActions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error));
  }
};

export const addContact = ({ name, number }) => dispatch => {
    const contact = {
    id: uuidv4(),
    name,
    number,
  };

  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

export const removeContact = id => dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsActions.deleteContactError(error)));
};