import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getCarsList: () => {},
};

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    search: "",
    selectedCars: [],
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    selectDeselectCar: (state, action) => {
      const alreadySelected = state.selectedCars.filter(
        (car) => car.id === action.payload.id
      ).length;

      if (!alreadySelected) {
        state.selectedCars = [...state.selectedCars, action.payload];
      } else {
        state.selectedCars = state.selectedCars.filter(
          (car) => car.id !== action.payload.id
        );
      }
    },
    selectAll: (state) => {
      state.selectedCars = state.cars;
    },
    deselectAll: (state) => {
      state.selectedCars = [];
    },
    ...middlewareActions,
  },
});

export const {
  setCars,
  setSearch,
  selectDeselectCar,
  selectAll,
  deselectAll,
  getCarsList,
} = carSlice.actions;

export default carSlice.reducer;
