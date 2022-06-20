import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import MegaXl from '../MegaXl';
import './../VehicalHome/Vehical.css';

const MegaXlHome = () => {
    return (
        <div>
          <Navigation></Navigation> 
          <MegaXl></MegaXl>  
        </div>
    );
};

export default MegaXlHome;