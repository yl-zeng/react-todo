import * as redux from 'redux';
import thunk from "redux-thunk";
import {searchTextReducer,showCompletedReducer,todosReducer} from "reducers";
import { routerMiddleware, push,syncHistoryWithStore, routerReducer } from 'react-router-redux';
import browserHistory from "app/history/history.jsx";

var initialState = {};

var reducer = redux.combineReducers({
  searchText:searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer
});

const middleware = routerMiddleware(browserHistory);

var store = redux.createStore(reducer,initialState,redux.compose(
  redux.applyMiddleware(thunk,middleware),
  window.devToolsExtension? window.devToolsExtension(): f=>f
));

export default store;
