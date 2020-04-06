import React from 'react';

import ReactDOM from 'react-dom';
import RootComponent from './root';

import { createStore } from "redux";
import { Provider } from "react-redux";

import allTaxiReducers from './reducers/combine-reducers';

const taxiStore = createStore(allTaxiReducers)

console.log(taxiStore);

ReactDOM.render(    <Provider store={taxiStore}>
                        <RootComponent></RootComponent>
                    </Provider>
                    , document.getElementById('root'))