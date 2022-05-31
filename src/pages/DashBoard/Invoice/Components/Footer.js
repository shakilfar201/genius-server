import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <ul className="ul-3">
                    <li><span className="span">Invoicer Name:</span> Shakil</li>
                    <li><span className="span">Email:</span> shakilfarhan15@gmail.com</li>
                    <li><span className="span">Phone Number:</span> 01516056541</li>
                    <li><span className="span">Bank:</span> Bank Account</li>
                    <li><span className="span">Account Holder:</span> shakil</li>
                    <li><span className="span">Account Number:</span> 123 456 789</li>
                    <li><span className="span">Website:</span> zemeco@motors.com</li>
                </ul>

                <ul className="ul-3-footer">
                    <li className="footer-2">Delivery Signature</li>
                    <li className="footer-2">Customer Signature</li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;