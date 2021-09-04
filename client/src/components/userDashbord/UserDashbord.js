import React from 'react'
import Contact from './contact/Contact';

import Navbar from './navbar/Navbar';
import PizzaList from './pizzaList/PizzaList';

const UserDashbord = () => {
    return (
        <div>
            <Navbar/>
            <PizzaList/>
            <Contact/>
        </div>
    )
}

export default UserDashbord
