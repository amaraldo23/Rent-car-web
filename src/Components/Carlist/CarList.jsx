// src/components/CarList.jsx
import React from 'react';
import CarItem from './CarItem';
import { Link } from 'react-router-dom'; // Përdor Link për navigim

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;