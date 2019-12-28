import { createStore, combineReducers, applyMiddleware } from "redux";

import { categories } from "../_reducers/categories";
import { events } from "../_reducers/events";
import { promise, logger } from "./middleware";

const rootReducers = combineReducers({
  categories,
  events
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
