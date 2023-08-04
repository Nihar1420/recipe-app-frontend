import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PublicRoute = ({ user }) => {
    return (
        user ? <Navbar /> : <Outlet />
    )
}

export default PublicRoute;