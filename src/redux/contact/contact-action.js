import types from './contact-types';
import { v4 as uuidv4 } from 'uuid';

const addContacts = contactFormState => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: contactFormState.name,
    number: contactFormState.number,
  },
});
const deleteContacts = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const chengeFilter = value => ({
  type: types.CHENGE_FILTER,
  payload: value,
});

export default { addContacts, deleteContacts, chengeFilter };
