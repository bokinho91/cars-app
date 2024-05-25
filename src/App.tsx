import React from "react";

import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";

import styles from "./App.module.css";
import { Provider } from "react-redux";
import store from "./store";
import SearchCars from "./components/SearchCar";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.container}>
          <div>
            <nav>
              <Link to="/cars">Cars</Link>
              <Link to="/cars/add">Add</Link>
            </nav>

            <SearchCars />
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="/cars" />} />
            <Route path="/cars" element={<AppCars />} />
            <Route path="/cars/add" element={<AddCar />} />
            <Route path="/cars/edit/:id" element={<AddCar />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
