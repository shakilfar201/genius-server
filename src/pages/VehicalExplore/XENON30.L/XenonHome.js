import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Xenon from '../Xenon';
import './../VehicalHome/Vehical.css';

const XenonHome = () => {
    return (
        <div>
             <Navigation></Navigation> 
             <Xenon></Xenon>
        </div>
    );
};

export default XenonHome;