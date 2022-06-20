import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Tc1613 from '../Tc1613';
import './../VehicalHome/Vehical.css';

const Tc1613Home = () => {
    return (
        <div>
           <Navigation></Navigation> 
           <Tc1613></Tc1613>
        </div>
    );
};

export default Tc1613Home;