import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import AuthenticationReducer from "./store/Authentication/reducer";
import CarDetailsReducer from "./store/carDetails/reducer";
import CarsReducer from "./store/cars/reducer";
import { UserSignUpReducer } from "./store/User/UserSignUp/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  cars: CarsReducer,
  carDetails: CarDetailsReducer,
  userSignUpDetails: UserSignUpReducer,
  authentiaction: AuthenticationReducer,
});

// const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
export type RootState = ReturnType<typeof reducers>;
