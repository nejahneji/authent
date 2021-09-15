import React from 'react';
import AddPizaa from './addPizzaList/AddPizaa';
import PizzaList from './pizzaList/PizzaList';
import Navbar from '../adminDashbord/navbar/Navbar';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
const AdminDashbord = () => {
    const { token } = useSelector(state => state.userReducer);
    return (
    <div>
        {(token!==null&&token.user.isAdmin) ?
        (<div className="admindashbord">
            <Navbar />
            <PizzaList />
            <AddPizaa />
        </div>) : (<Redirect to='/'/>)}
   </div>
        )
    }

        export default AdminDashbord
