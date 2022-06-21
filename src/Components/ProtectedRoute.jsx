import React from 'react'
import { Navigate } from 'react-router-dom';
import { UseStateContext } from '../Context/AppContext';

const ProtectedRoute = ({children}) => {
    const {allState : {user}} = UseStateContext(); 
    if(user) {
        return children
    }
    else {
        return <Navigate to="/" />
    }

}

export default ProtectedRoute
