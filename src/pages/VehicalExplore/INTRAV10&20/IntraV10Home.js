import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import IntraV10 from '../IntraV10';
import './../VehicalHome/Vehical.css';

const IntraV10Home = () => {
    return (
        <div>
           <Navigation></Navigation>  
           <IntraV10></IntraV10>
        </div>
    );
};

export default IntraV10Home;