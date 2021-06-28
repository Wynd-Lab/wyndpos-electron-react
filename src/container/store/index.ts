import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { loggerMiddleware } from '../../helpers/logger_middleware'

import { IRootState } from '../interface'

import appReducer from './reducer'

// eslint-disable-next-line @typescript-eslint/no-unused-vars

let middleware = applyMiddleware(thunk, loggerMiddleware)
if (process.env.NODE_ENV !== 'production') {
	middleware = composeWithDevTools(middleware)
}

export const store = createStore(appReducer, middleware) as Store<IRootState>
