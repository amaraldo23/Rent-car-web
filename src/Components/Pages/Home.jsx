// src/pages/Home.jsx
import React from 'react';
import CarList from '../Carlist/CarList';

const Home = () => {
  const cars = [
    {
      id: 1,
      model: 'Toyota Corolla',
      image: '/assets/car1.jpg',
      mileage: '12000',
      fuelType: 'Benzin',
      color: 'E bardhë',
    },
    {
      id: 2,
      model: 'Honda Civic',
      image: '/assets/car2.jpg',
      mileage: '15000',
      fuelType: 'Naftë',
      color: 'E zezë',
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