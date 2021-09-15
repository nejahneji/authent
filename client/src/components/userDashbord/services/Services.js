import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="services">
        <h1>More Services</h1>
        <div className="service1">
          <img
            style={{ width: "20rem", height: "15rem", borderRadius: "0 70px" }}
            src="https://lh3.googleusercontent.com/proxy/C3hBPoPg_Lvzfi6xeoZBx8uvobRVNfXTKJZYFn0o8TIpRmq74K03Dvy1pa0Bn3hqhYGH_EIgygHDKl7dKpktFg1VWb45tx6TKLYNEuul6dyZI6EaBuzA"
            alt=""
          />
          <p>
            <h3>delivery</h3>
            The delivered items can include entrees, sides, drinks, desserts, or
            grocery items and are typically delivered in boxes or bags. The
            delivery person will normally drive a car,
            <br /> but in bigger cities where homes and restaurants are closer
            together, they may use bikes or motorized scooters.
          </p>
        </div>
        <div className="service2">
          <img
            style={{ width: "20rem", height: "15rem", borderRadius: "0 70px" }}
            src="https://www.sortiramarrakech.com/wp-content/uploads/2019/08/humberger-%C3%A0-marrakech-1-e1565172290709.jpg"
            alt=""
          />

          <p>
            <h3>humberger</h3>
            A hamburger (or burger for short) is a food, typically considered a
            sandwich, <br />
            consisting of one or more cooked patties of ground meat, usually
            beef, <br />
            placed inside a sliced bread roll or bun. ...
            <br />
            Hamburgers are typically sold at fast-food restaurants, diners, and
            specialty and high-end restaurants.
          </p>
        </div>
      </div>
      <Link to="/UserDashbord">
        <i class="fas fa-pizza-slice fa-4x" id="contactbtn">
          pizza
        </i>
      </Link>
    </div>
  );
};

export default Services;
