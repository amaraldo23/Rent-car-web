// src/components/CarItem.jsx
import React from 'react';

const CarItem = ({ car }) => {
  return (
    <div className="car-item">
      <img src={car.model} alt={car.model} />
      <h3>{car.model}</h3>
      <p>Kilometrat: {car.mileage} km</p>
      <p>Lëndë djegëse: {car.fuelType}</p>
      <p>Ngjyra: {car.color}</p>
    </div>
  );
};

export default CarItem;