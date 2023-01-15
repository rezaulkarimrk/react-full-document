import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import todosReducer from './Reducer/todosReducer';

const Store = createStore(todosReducer, applyMiddleware(thunk));

export default Store;