import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleCar from "../components/SingleCar";
import carService from "../services/CarService";

const AppCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
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

  useEffect(() => {
    const fetchCars = async () => {
      const data = await carService.getAll();
      setCars(data);
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h2>Cars</h2>
      <ul>
        {cars.map((car) => (
          <SingleCar
            key={car.id}
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
          />
        ))}
      </ul>
    </div>
  );
};

export default AppCars;
