import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavLogout from './NavLogout';
import Header from '../Components/Header';
import Home from '../Components/Home';
import { CarContextDetails } from './../Context/CarContext';
import './../../src/Components/Style/cards.css';

function OrderPage() {
  const TokenUser = JSON.parse(localStorage.getItem("token-user"));
  const { CarData, setCarData } = useContext(CarContextDetails);
  let [data, setdata] = useState([]);
  
  useEffect(() => {
    fetch("https://car-rental-app-server.onrender.com/cars/", {
      headers: {
        "authorization": JSON.parse(localStorage.getItem("token-user "))
      }
    }).then(res => res.json())
      .then(res => setdata(res));
  }, []);

  const [selectBtn, setSelectBtn] = useState(false);
  const [selectSeating, setSelectSeating] = useState(false);
  const [milageSelect, setMilageSelect] = useState(false);
  const [filterData, setFilterData] = useState([]);

  // Reverse the order of the data array
  const reversedData = data.slice().reverse();

  return (
    <>
      {TokenUser ? (
        <div>
          <NavLogout />
          <Header />

          {filterData.length > 0 ? (
            <div id="carCard">
              {filterData.map((d, i) => {
                return (
                  <div key={i} id="card-of-the-order-page-i-make-this">
                    <div className="img-of-te-car-details-order">
                      <img src={`https://car-rental-app-server.onrender.com/cars/${d.image}`} id="img-of-the-car-order" />
                    </div>
                    <div id="seater">
                      <h5 id="person">{d.name}</h5>
                    </div>
                    <div id="name-container">
                      <h5 id="name">6 persons</h5>
                      <h5 id="milage">{d.perKm}RS/KM</h5>
                    </div>
                    <div id="booking">
                      <Link to="/payment"><span onClick={() => setCarData(d)} id="book-now-of-the-car">Book Now</span></Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div id="carCard">
              {reversedData.map((d, i) => {
                return (
                  <div key={i} id="card-of-the-order-page-i-make-this">
                    <div className="img-of-te-car-details-order">
                      <img src={`https://car-rental-app-server.onrender.com/cars/${d.image}`} id="img-of-the-car-order" />
                    </div>
                    <div id="seater">
                      <h5 id="person">{d.name}</h5>
                    </div>
                    <div id="name-container">
                      <h5 id="name">6 persons</h5>
                      <h5 id="milage">{d.perKm}RS/KM</h5>
                    </div>
                    <div id="booking">
                      <Link to="/payment"><span onClick={() => setCarData(d)} id="book-now-of-the-car">Book Now</span></Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default OrderPage;
