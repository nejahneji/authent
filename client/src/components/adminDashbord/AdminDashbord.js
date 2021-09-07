import React from 'react'
import AddPizaa from './addPizzaList/AddPizaa';
import PizzaList from './pizzaList/PizzaList'
import Navbar from '../adminDashbord/navbar/Navbar'
const AdminDashbord = () => {
    return (
        <div className="admindashbord">
           <Navbar/>
           <PizzaList/>
           <AddPizaa/> 
        </div>
    )
}

export default AdminDashbord
