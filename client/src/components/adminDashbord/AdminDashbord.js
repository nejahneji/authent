import React from 'react'
import AddPizaa from './addPizzaList/AddPizaa';
import Contact from './contact/Contact';
import Navbar from './navbar/Navbar';
import PizzaList from './pizzaList/PizzaList'
const AdminDashbord = () => {
    return (
        <div>
            <Navbar/>
            <PizzaList/>
            <AddPizaa/>
            <Contact/>
        </div>
    )
}

export default AdminDashbord
