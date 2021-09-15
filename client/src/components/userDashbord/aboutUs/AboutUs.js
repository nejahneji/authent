import React from "react";
import { Link } from "react-router-dom";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="about">
        <h1 className="title">About Us</h1>
        <p>
          La Cucina is a place where Italian food and good people meet every
          day, every time and with every weather.
          <br />
          We can't bring the the sunny Italy to you, but we still can bring you
          the joy what Italian food can offer.
        </p>
        <h1 className="title">why Us</h1>
        <p>
          We believe that every restaurant has its heart and it’s the kitchen.
          La Cucina means kitchen in Italian and in our restaurant & pizzeria it
          is open for every guest. The way food is prepared and made is
          important. What if you could actually see how your dish is created by
          our chefs? You can see it! We have an open kitchen which means all the
          action is there and you can enjoy it when sitting on your table. Our
          menu is versatile. You have fantastic meat dishes, salads and pastas.
          Do we have pizzas? Of course we do! Actually we have really special
          ones, which are called Neapolitan style pizzas. Come and try!
        </p>
      </div>
      
      <Link to="/UserDashbord">
        <i class="fas fa-pizza-slice fa-4x" id="aboutbtn">pizza</i>
      </Link>
      
      
    </div>
  );
};

export default AboutUs;
