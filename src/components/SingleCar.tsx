import React from "react";

interface SingleCarProps {
  id: number;
  isSelected?: boolean;
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  isAutomatic: boolean;
  engine: string;
  numberOfDoors: number;
  deleteCallback: (id: number) => void;
  editCallback: (id: number) => void;
  selectCar: (id: number) => void;
}

const SingleCar: React.FC<SingleCarProps> = ({
  id,
  isSelected,
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors,
  deleteCallback,
  editCallback,
  selectCar,
}) => {
  return (
    <li
      style={{
        border: "1px solid black",
        marginBottom: "5px",
        padding: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span>Brand: {brand}</span>
      <span>Model: {model}</span>
      <span>Year: {year}</span>
      <span>Max Speed: {maxSpeed}</span>
      <span>{isAutomatic ? "Is" : "Not"} Automatic </span>
      <span>Engine: {engine}</span>
      <span>Number of doors: {numberOfDoors}</span>
      <button onClick={() => deleteCallback(id)}>Delete</button>
      <button onClick={() => editCallback(id)}>Edit</button>
      <button onClick={() => selectCar(id)}>
        {isSelected ? "Deselect" : "Select"}
      </button>
    </li>
  );
};

export default SingleCar;
