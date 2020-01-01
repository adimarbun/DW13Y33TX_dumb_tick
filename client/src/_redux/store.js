import { createStore, combineReducers, applyMiddleware } from "redux";

import { categories, category } from "../_reducers/categories";
import { events } from "../_reducers/events";
import { users } from "../_reducers/users";
import { event } from "../_reducers/event";
import { favorites } from "../_reducers/favorites";
import { categoryEvent } from "../_reducers/categoryDetail";
import { promise, logger } from "./middleware";

const rootReducers = combineReducers({
  categories,
  events,
  users,
  event,
  categoryEvent,
  category,
  favorites
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
