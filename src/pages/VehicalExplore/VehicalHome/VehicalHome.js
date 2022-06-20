import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import VehicalExplore from '../VehicalExplore';

const VehicalHome = () => {
    return (
        <div>
           <Navigation></Navigation> 
           <VehicalExplore></VehicalExplore>
        </div>
    );
};

export default VehicalHome;