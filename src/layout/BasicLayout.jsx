import React from 'react';
import Home from '../pages/Home';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const BasicLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default BasicLayout;