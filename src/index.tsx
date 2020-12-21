import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import {rootReducer} from "./store/Reducer";
import {composeWithDevTools} from 'redux-devtools-extension';


export const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
