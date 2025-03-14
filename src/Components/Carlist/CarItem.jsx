// src/components/CarItem.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Përdor Link për navigim

const CarItem = ({ car }) => {
  return (
    <div className="car-item">
      <h3>{car.model}</h3>
      <img src={car.image} alt={car.model} />
      <p>Kilometrat: {car.mileage} km</p>
      <p>Lëndë djegëse: {car.fuelType}</p>
      <p>Ngjyra: {car.color}</p>
      <Link to={`/car/${car.id}`} className="details-button"> {/* Linku për faqen e detajuara 
      */}
        Shiko më shumë
      </Link>
    </div>
  );
};

export default CarItem;