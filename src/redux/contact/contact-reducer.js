// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineReducers } from 'redux';
import types from './contact-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return state.find(({ name }) => name === payload.name)
        ? alert(`${state.name} is already in contacts`)
        : [payload, ...state];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHENGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
