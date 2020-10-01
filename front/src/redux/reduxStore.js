import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import basketReducer from './reducer/basketReducer';

let reducers = combineReducers({
  basket: basketReducer,
  form: formReducer
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
