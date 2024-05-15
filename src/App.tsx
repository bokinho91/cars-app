import React from "react";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";

import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <nav>
          <Link to="/cars">Cars</Link>
          <Link to="/cars/add">Add</Link>
        </nav>
        <Routes>
          <Route path="/cars" element={<AppCars />} />
          <Route path="/cars/add" element={<AddCar />} />
          <Route path="/cars/edit/:id" element={<AddCar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
