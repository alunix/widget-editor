import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  reducers,
  middleware as WEmiddleware,
  sagas
} from "@packages/widget-editor";

import thunk from "redux-thunk";

// import sagas from "sagas";

// New modules
import { handleModule } from "vizzuality-redux-tools";

// Modules
import * as editorOptions from "modules/editor-options";

const initStore = (initialState = {}) => {
  const appReducers = combineReducers({
    editorOptions: handleModule(editorOptions),
    ...reducers
  });

  const middlewares = applyMiddleware(thunk, WEmiddleware);
  const enhancers = composeWithDevTools(middlewares);

  // create store
  const store = createStore(appReducers, initialState, enhancers);

  WEmiddleware.run(sagas);

  return { store };
};

export default initStore;
