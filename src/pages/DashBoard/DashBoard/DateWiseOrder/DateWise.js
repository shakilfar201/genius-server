import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const DateWise = () => {

    const [showOrder, setShowOrder] = useState([]);
    const [form, setForm] = useState('')
    const [to, setTo] = useState('')


    const handleInput2 = (e) => {
        // console.log(e.target.value)
        setForm(e.target.value)
    }
    const handleInput3 = (e) => {
        // console.log(e.target.value)
        setTo(e.target.value)
    }

    const handleCalender = (e) => {
        e.preventDefault()
        const date = { form, to }
        const url = (`https://calm-everglades-03915.herokuapp.com/booking/date`)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(date)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setShowOrder(data)
            })
    }

    const history = useHistory();

    const handleUrl = (id) => {
        const url = `/invoice/${id}`
        history.push(url)
    }

    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Date Wise Order
            </Typography>
            <form onSubmit={handleCalender}>
                <label htmlFor="From" style={{ marginLeft: '5px', marginRight: '5px' }}>From</label>
                <input type="date" name="date" onChange={handleInput2} />

                <label htmlFor="To" name="date" style={{ marginLeft: '5px', marginRight: '5px' }}>To</label>
                <input type="date" onChange={handleInput3} />

                <Button type="submit" style={{ marginLeft: "8px" }} variant="contained">Confirm </Button>
            </form>

            <Typography variant="h3" sx={{ fontWeight: 700, mt: 5 }}>
                Total Order {showOrder.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }}>Token No</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }}>Customer Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }}>Customer Email</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }}>Part No</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">Quantity</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">Phone Number</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">Total Taka</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">Discount</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">N.P</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">Status</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 15 }} align="right">Invoice</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {showOrder.map((row) => (
                            <TableRow
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.token}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.productPrice}
                                </TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
                                <TableCell align="right">{row.cashTaka * row.quantity}</TableCell>
                                {
                                    row?.taka ? <TableCell align="right">{row.taka}</TableCell> : <TableCell sx={{ color: 'red' }} align="right">No Discount</TableCell>
                                }
                                {
                                    row?.taka ? <TableCell align="right">{row.cashTaka * row.quantity - row?.taka}</TableCell> : <TableCell sx={{ color: '#3498db' }} align="right">Not Available</TableCell>
                                }
                                {
                                    row?.status ? <TableCell sx={{ color: 'green' }} align="right">{row.status}</TableCell> : <TableCell sx={{ color: 'red' }} align="right">Pending</TableCell>
                                }
                                <TableCell align="right"><Button sx={{ fontWeight: 400, fontSize: 12, width: '30px' }} onClick={() => handleUrl(row?._id)} variant="contained">Invoice</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default DateWise;