import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page.js';
import * as serviceWorker from './serviceWorker';
// createStore 创建store，applyMiddleware加载所有中间件
import { createStore, applyMiddleware } from 'redux';
// 高阶组件
import { Provider } from 'react-redux';
// thunk 使action可以异步请求
import thunk from 'redux-thunk';
// ????
import Reducer from './redux/reducer/index.js'
const middleware = [thunk];
const store=createStore(Reducer,applyMiddleware(...middleware));
ReactDOM.render(
	<Provider store={store}>
		<Page />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
