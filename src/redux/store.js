import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactReduser from './contact/contact-reducer';

const rootReducer = combineReducers({
  contacts: contactReduser,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
