import React from 'react';

const Date = ({invoiceNumber, invoiceDate, dueDate, booking}) => {
    return (
        <>
            <article className="article-1">
                <ul>
                    <li><span className="span">Token No:</span> {booking.token}</li>
                    <li><span className="span">Invoice Number:</span> {invoiceNumber}</li>
                    <li><span className="span">Invoice Date:</span> {invoiceDate}</li>
                    <li><span className="span">Due Date:</span> {dueDate}</li>
                </ul>
            </article>
        </>
    );
};

export default Date;