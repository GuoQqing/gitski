import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import renducer from './reducers'
import App from './containers/app.js'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSage from './sagas.js'
const sagaMiddleware =createSagaMiddleware()

const store=createStore(renducer,applyMiddleware(logger,sagaMiddleware))

sagaMiddleware.run(rootSage)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById("app")
)