import { combineReducers } from 'redux';
import * as actionTypes from './counter-types';

const valueReduser = (state = 100, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReduser = (state = 10, action) => state;

const counterReducer = combineReducers({
  value: valueReduser,
  step: stepReduser,
});

export default counterReducer;
