import reducers from "./reducers";
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';

const composeEnhancers =
  typeof window === 'object' &&
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

export const makeStore = () => createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export const wrapper = createWrapper(makeStore, {debug: false});