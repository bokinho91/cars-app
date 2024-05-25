import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/cars/slice";

const SearchCars: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search car by brand or model"
        onChange={handleChange}
      />
    </>
  );
};

export default SearchCars;
