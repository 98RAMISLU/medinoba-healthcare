import React from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-banner">
        <div className="inside-banner">
          <div className="banner-content">
            <h1>Get Best Healthcare</h1>
            <p>
              The quality of lab tests at Medinoba Diagnostics is ensured at
              every step from sample collection to testing to reporting.
            </p>
            <button className="btn btn-info">Get Appointment</button>
          </div>
        </div>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
