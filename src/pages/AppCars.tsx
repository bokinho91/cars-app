import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SingleCar from "../components/SingleCar";
import carService from "../services/CarService";
import {
  selectCars,
  selectFilteredCars,
  selectNumberOfSelectedCars,
} from "../store/cars/selector";
import {
  deselectAll,
  getCarsList,
  selectAll,
  selectDeselectCar,
  setCars,
} from "../store/cars/slice";

const AppCars: React.FC = () => {
  const dispatch = useDispatch();
  const cars: Car[] = useSelector(selectCars);
  const filteredCars: Car[] = useSelector(selectFilteredCars);
  console.log("FILTERED CARS AFTER ADDING isSelected", filteredCars);

  const numberOfSelectedCars = useSelector(selectNumberOfSelectedCars);
  // const [cars, setCars] = useState<Car[]>([]);
  const navigate = useNavigate();

  const handleDelete = async (carId: number) => {
    const response = prompt(
      "Are you sure you want to delete this car ?\n Enter 'Yes' if you are"
    );

    if (response !== "Yes") {
      return;
    }

    const data = await carService.delete(carId);

    if (data && data.count > 0) {
      setCars(cars.filter(({ id }) => id !== carId));
    }
  };

  const handleEdit = (id: number) => {
    navigate(`edit/${id}`);
  };

  const handleSelect = (id: number) => {
    dispatch(selectDeselectCar(cars.find((car) => car.id === id)));
  };

  useEffect(() => {
    dispatch(getCarsList());
  }, []);

  return (
    <div>
      <h2>Cars</h2>
      CARS SELECTED: {numberOfSelectedCars}
      <button
        onClick={() => {
          dispatch(selectAll());
        }}
      >
        Select ALL
      </button>
      <button
        onClick={() => {
          dispatch(deselectAll());
        }}
      >
        DeSelect ALL
      </button>
      <ul>
        {filteredCars.length ? (
          filteredCars.map((car) => (
            <SingleCar
              key={car.id}
              isSelected={car.isSelected}
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              maxSpeed={car.maxSpeed}
              isAutomatic={car.isAutomatic}
              engine={car.engine}
              numberOfDoors={car.numberOfDoors}
              deleteCallback={handleDelete}
              editCallback={handleEdit}
              selectCar={handleSelect}
            />
          ))
        ) : (
          <p>No results for your search</p>
        )}
      </ul>
    </div>
  );
};

export default AppCars;
