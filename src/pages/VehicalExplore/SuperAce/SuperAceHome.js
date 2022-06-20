import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import SuperAce from '../SuperAce';
import './../VehicalHome/Vehical.css';

const SuperAceHome = () => {
    return (
        <div>
            <Navigation></Navigation> 
            <SuperAce></SuperAce>
        </div>
    );
};

export default SuperAceHome;