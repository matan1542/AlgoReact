
import { Dispatch } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk';
import { fileReducer } from './reducers/file.reducer'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    fileModule: fileReducer
})


export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))) //Passing the reducer

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch  = Dispatch<(dispatch: any) => Promise<object[]>>

