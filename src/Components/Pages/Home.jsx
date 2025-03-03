// src/pages/Home.jsx
import React from 'react';
import CarList from '../Carlist/CarList';
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";

const Home = () => {
  const cars = [
    {
      id: 1,
      model: 'Mercedez Benz',
      image: car1,
      mileage: '12000',
      fuelType: 'Benzin',
      color: 'E bardhë',
    },
    {
      id: 2,
      model: 'BMW M5 Competition',
      image: car2,
      mileage: '15000',
      fuelType: 'Naftë',
      color: 'E zezë',
    },
    {
      id: 3,
      model: 'Nissan GTR',
      image: car3,
      mileage: '15000',
      fuelType: 'Naftë',
      color: 'E zezë',
    },
    {
      id: 4,
      model: 'Audi A7 Rrugaci',
      image: car4,
      mileage: '280,000',
      fuelType: 'Benzin-Gaz',
      color: 'Gri',
    },
    // Shtoni më shumë makina sipas nevojës
  ];

  return (
    <div className="home">
      <h1>Lista e Makinave</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default Home;