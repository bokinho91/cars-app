import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import carsReducer from "./cars/slice";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: { cars: carsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
