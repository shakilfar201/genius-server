import React from 'react';

const ClintDetails = ({booking}) => {
    return (
        <>
            <section className="section-2">
                <h2>Clints Name : {booking.customerName}</h2> 
                <p>Email : {booking.email}</p>
                <p>Clint Address :</p>
                <p>Phone Number : {booking.phoneNumber}</p>
            </section>
        </>
    );
};

export default ClintDetails;