import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';


const rootReducer = combineReducers({
    ord: orderReducer, 
    bbr: burgerBuilderReducer
});


// // Middleware - Used for async code
// const logger = store => {
//     return next => {
//         return action => {
//             console.log('[middleware] Dispatching', action);
//             const result = next(action);
//             console.log('[middleware] next state', store.getState())
//             return result;
//         }
//     }
// }

// From react-thunk readme
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
