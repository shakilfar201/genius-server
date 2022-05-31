import React, { useState, useRef, useEffect } from 'react';
import ClintDetails from './Components/ClintDetails';
import Date from './Components/Date';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { useParams } from 'react-router';
import MainDetails from './Components/MainDetails';
import Notes from './Components/Notes';
import Table from './Components/Table';
import ReactToPrint from 'react-to-print';
import './Invoice.css';

const Invoice = () => {

    const { id } = useParams();
    const [booking, SetBooking] = useState([]);

    const [showInvoice, setShowInvoice] = useState(false);
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [invoiceDate, setInvoiceDate] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleInput1 = (e) =>{
        setInvoiceNumber(e.target.value)
    }
    const handleInput2 = (e) =>{
        setInvoiceDate(e.target.value)
    }
    const handleInput3 = (e) =>{
        setDueDate(e.target.value)
    }

    useEffect(() => {
        const url = `https://calm-everglades-03915.herokuapp.com/booking/invoice/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                SetBooking(data)
            })
    }, [id])

    const componentRef = useRef()

    return (
        <>
            <main className="main">
                <ReactToPrint trigger={()=> <button className="btn btn-preview">Print / Download</button>} content={()=> componentRef.current} />
                {showInvoice ? <div ref={componentRef} className="all-div">
                    <Header></Header>
                    <MainDetails></MainDetails>
                    <ClintDetails booking={booking}></ClintDetails>
                    <Date booking={booking} invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}></Date>
                    <Table booking={booking}></Table>
                    <Notes></Notes>
                    <Footer></Footer>
                </div> : (
                    <>
                        <div className="preview">
                            <label htmlFor="invoiceNumber">Enter Your Invoice Number</label>
                            <input type="text" name="text" id="invoiceNumber"  autoComplete="off"
                            value={invoiceNumber}  onChange={handleInput1}/>

                            <label htmlFor="invoiceDate">Invoice Date</label>
                            <input type="date" name="text" id="invoiceDate" autoComplete="off"
                            value={invoiceDate}  onChange={handleInput2}/>

                            <label htmlFor="dueDate">Due Date</label>
                            <input type="date" name="text" id="dueDate" autoComplete="off"
                            value={dueDate}  onChange={handleInput3}/>

                            <button onClick={()=> setShowInvoice(true)} className="btn btn-preview">Preview Invoice</button>
                        </div>
                    </>
                )}
            </main>
        </>
    );
};

export default Invoice;