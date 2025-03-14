// src/pages/CarDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Përdor useParams dhe Link për navigim
import DatePicker from 'react-datepicker'; // Përdor DatePicker për kalendarin
import 'react-datepicker/dist/react-datepicker.css'; // Stilizimi i DatePicker
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";

const CarDetails = () => {
  const { id } = useParams(); // Merr ID-në e makinës nga URL
  const [startDate, setStartDate] = useState(new Date()); // Data e fillimit
  const [endDate, setEndDate] = useState(new Date()); // Data e mbarimit

  // Lista e makinave (mund të zëvendësohet me një API call në të ardhmen)
  const cars = [
    {
      id: 1,
      model: 'Mercedes Benz',
      image: car1,
      mileage: '12000 km',
      fuelType: 'Benzin',
      color: 'E bardhë',
      description: 'Mercedes Benz është një makinë luksoze me performancë të lartë.',
      features: ['Klima automatik', 'Sistem audio premium', 'Kamera prapa'],
    },
    {
      id: 2,
      model: 'BMW M5 Competition',
      image: car2,
      mileage: '15000 km',
      fuelType: 'Naftë',
      color: 'E zezë',
      description: 'BMW M5 Competition është një makinë sportive me teknologji të avancuar.',
      features: ['Sistem çaktivizimi i stabilizimit', 'Transmission automatik', 'Sedilje sportive'],
    },
    {
      id: 3,
      model: 'Nissan GTR',
      image: car3,
      mileage: '15000 km',
      fuelType: 'Naftë',
      color: 'E zezë',
      description: 'Nissan GTR është një makinë sportive me performancë të jashtëzakonshme.',
      features: ['Motor V6', 'Sistem all-wheel drive', 'Sistem shpëtimi aktiv'],
    },
    {
      id: 4,
      model: 'Audi A7 Rrugaci',
      image: car4,
      mileage: '280,000 km',
      fuelType: 'Benzin–Gaz',
      color: 'Gri',
      description: 'Audi A7 është një makinë elegante dhe komode për përdorim të përditshëm.',
      features: ['Sistem infotainment me ekran të madh', 'Kamera 360°', 'Sistem parkimi automatik'],
    },
  ];

  // Gjej makinën bazuar në ID
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Makina nuk u gjet.</div>; // Nëse makina nuk ekziston
  }

  return (
    <div className="car-details-page">
      {/* Header */}
      <header className="car-header"></header>

      {/* Seksioni i Imazhit */}
      <section className="car-image-section">
        <img src={car.image} alt={car.model} />
      </section>

      {/* Seksioni i Detajeve */}
      <section className="car-details-section">
        <h2>Detajet e Makinës</h2>
          <div className="detail-item">
            <strong>Kilometrat:</strong> {car.mileage}
            <strong>Lëndë djegëse:</strong> {car.fuelType}
            <strong>Ngjyra:</strong> {car.color}
            <strong>Përshkrim:</strong> {car.description}
        </div>

        <h2>Karakteristikat</h2>  
        <ul className="features-list">
          {car.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Seksioni i Rezervimit */}
      <section className="reservation-section">
        <h2>Rezervo Tani</h2>
        <div className="date-picker">
          <label>Data e Fillimit:</label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div className="date-picker">
          <label>Data e Mbarimit:</label>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
        <div>
          <button className="rent-button">Rezervo</button>
        </div>
        <Link to="/" className="back-button">Kthehu në Faqen Kryesore</Link>
      </section>

      {/* Footer */}
      <footer className="car-footer">
        <p>© 2025 Rent-a-Car. Të gjitha të drejtat e rezervuara.</p>
      </footer>
    </div>
    
  );
};

export default CarDetails;