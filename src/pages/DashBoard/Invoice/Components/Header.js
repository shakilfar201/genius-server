import React from 'react';

const Header = () => {

    // const handlePrint = () => {
    //     window.print()
    // }
    return (
        <>
            <header className="invoiceHeader">
                <div>
                    <h1 className="h1-1">#Invoicer</h1>
                </div>
                {/* <div>
                    <ul className="ul-1">
                        <li><button className="btn btn-preview" onClick={handlePrint}>Print</button></li>
                        <li><button className="btn btn-preview">Download</button></li>
                        <li><button className="btn btn-preview">Send</button></li>
                    </ul>
                </div> */}
            </header>
        </>
    );
};

export default Header;