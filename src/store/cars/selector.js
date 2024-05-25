export const selectCars = (state) => state.cars.cars;

export const selectFilteredCars = ({ cars }) => {
  const carsList = cars.cars;
  const searchedBrand = cars.search;

  const filtered = carsList.filter((car) => car.brand.includes(searchedBrand));

  return filtered.map((car) => {
    return {
      ...car,
      isSelected: cars.selectedCars.filter(
        (selectedCar) => selectedCar.id === car.id
      ).length
        ? true
        : false,
    };
  });
};

export const selectNumberOfSelectedCars = ({ cars }) =>
  cars.selectedCars.length;
