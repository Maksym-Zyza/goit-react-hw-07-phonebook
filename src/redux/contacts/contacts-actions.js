import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('Contact/add');

export const deleteContact = createAction('Contact/delete');

export const filterContacts = createAction('Contact/filter');

// =========== До Redux Tookit =========
// import types from './contacts-types';

// export const addContact = obj => ({
//   type: types.ADD,
//   payload: { ...obj },
// });

// export const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

// export const filterContacts = value => ({
//   type: types.FILTER,
//   payload: value,
// });
