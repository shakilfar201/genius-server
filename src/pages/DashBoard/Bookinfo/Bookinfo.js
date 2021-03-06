import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import delete1 from '../../../images/delete-removebg-preview.png'

const Bookinfo = () => {

    const { user } = useAuth();
    const [showOrder, setShowOrder] = useState([]);
    // const [deleteSuccess, setDeleteSuccess] = useState(false)

    // const handleDelete = (id) => {
    //     const proceed = window.confirm("Are You sure You Want to Delete?")
    //     if (proceed) {
    //         fetch(`https://calm-everglades-03915.herokuapp.com/booking/${id}`, {
    //             method: 'DELETE',
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deletedCount) {
    //                     alert('DELETED SUCCESSFULLY')
    //                     const remaining = showOrder.filter(order => order._id !== id)
    //                     setShowOrder(remaining)
    //                     setDeleteSuccess(true)
    //                 }
    //             })
    //     };
    // };

    useEffect(() => {
        const url = `https://calm-everglades-03915.herokuapp.com/booking/email?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setShowOrder(data)
            })
    }, [user.email])


    return (
        <>
            <Typography variant="h5" >
                Your Orders: {showOrder.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>Token No</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>Customer Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>Customer Email</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>Part No</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Quantity</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Phone Number</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Total Taka</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Discount</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">N.P</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Status</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Delivery Status</TableCell>
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

                                <TableCell sx={{ color: 'green' }} align="right">Available</TableCell>

                                {
                                    row?.quantity ? <TableCell align="right">{row.cashTaka * row.quantity / 15}</TableCell> : <TableCell sx={{ color: '#3498db' }} align="right">Not Available</TableCell>
                                }
                                {
                                    row?.status ? <TableCell sx={{ color: 'green' }} align="right">{row.status}</TableCell> : <TableCell sx={{ color: 'red' }} align="right">Pending</TableCell>
                                }
                                {
                                    row?.service ? <TableCell sx={{ color: '#2980b9' }} align="right">{row.service}</TableCell> : <TableCell sx={{ color: 'red' }} align="right">On Process</TableCell>
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* {deleteSuccess &&
                <Grid container spacing={2}>
                    <Grid item xs={5} md={6} sm={12}>
                    <Alert sx={{width: "75%", marginLeft: '60px', mt: 25}} severity="success">Order Delete Successfully!</Alert>
                    </Grid>
                    <Grid item xs={6} md={6} sm={12}>
                        <img src={delete1} width="100%" alt=""/>
                    </Grid>
                </Grid>
            } */}
        </>
    );
};

export default Bookinfo;