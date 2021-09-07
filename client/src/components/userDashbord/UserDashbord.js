import React from 'react'
import Contact from './contact/Contact';
import UserNavbar from './navbar/UserNavbar';

import PizzaList from './pizzaList/PizzaList';

const UserDashbord = () => {
    return (
        <div>
            <UserNavbar/>
            <PizzaList/>
            <Contact/>
        </div>
    )
}

export default UserDashbord
