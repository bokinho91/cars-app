import { call, put, takeLatest } from "redux-saga/effects";
import carService from "../../services/CarService";
import { getCarsList, setCars } from "./slice";

//NACIN POZIVANJA SEVISA BR. 1
//Sintaksa [carService, carService.getAll] obezbedjuje da 'this' unutar getAll referencira na instancu carService-a
function* getAllCars() {
  try {
    const data = yield call([carService, carService.getAll]);
    yield put(setCars(data));
  } catch (error) {}
}

//NACIN POZIVANJA BR. 2
//OVAKVO POZIVANJE METODE IZ SERVISA KORISTITE AKO U SERVISU ODRADITE BIND METODE U KONSTRUKTORU
// function* getAllCars() {
//   try {
//     const data = yield call(carService.getAll);
//     yield put(setCars(data));
//   } catch (error) {}
// }

export function* watchForSagas() {
  yield takeLatest(getCarsList.type, getAllCars);
}
