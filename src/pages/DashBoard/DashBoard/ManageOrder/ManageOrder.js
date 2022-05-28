import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import delete1 from '../../../../images/delete-removebg-preview.png'
import { Alert, Button, Grid } from '@mui/material';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [update, setUpdate] = useState('');
    const [stock, setStock] = useState('');
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const handleInput = (e) => {
        console.log(e.target.value)
        setUpdate(e.target.value)
    }

    const handleInputt = (e) => {
        console.log(e.target.value)
        setStock(e.target.value)
    }


    useEffect(() => {
        fetch('https://calm-everglades-03915.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)
            })
    }, []);

    const handleUpdate = () => {
        const user = { update, stock }
        fetch(`https://calm-everglades-03915.herokuapp.com/products/quantity`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You sure Admin, You Want to Delete user Order?")
        if (proceed) {
            fetch(`https://calm-everglades-03915.herokuapp.com/booking/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount) {
                        const remaining = allOrder.filter(order => order._id !== id)
                        setAllOrder(remaining)
                        setDeleteSuccess(true)
                    }
                })
        };
    };

    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Manage all Order
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
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">A.S</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Status</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Action</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">U.P</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrder.map((row) => (
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
                                <TableCell align="right">{row.stock - row.quantity}</TableCell>
                                {
                                    row?.status ? <TableCell sx={{ color: 'green' }} align="right">{row.status}</TableCell> : <TableCell sx={{ color: 'red' }} align="right">Pending</TableCell>
                                }
                                <TableCell align="right"> <Button sx={{ color: 'red' }} onClick={() => handleDelete(row?._id)}>Delete</Button> </TableCell>

                                <TableCell align="right">
                                    <button type="button" class="btn btn-primary w-20" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Yes
                                    </button>


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Update Stock</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <TextField
                                                        required
                                                        sx={{ width: "50%", m: 2 }}
                                                        id="outlined-basic"
                                                        label="PartNo"
                                                        type="price"
                                                        onBlur={handleInput}
                                                        variant="outlined" /> <br />

                                                    <TextField
                                                        required
                                                        sx={{ width: "50%", m: 2 }}
                                                        id="outlined-basic"
                                                        label="Available Stock"
                                                        type="price"
                                                        onBlur={handleInputt}
                                                        variant="outlined" /> <br />
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary w-20" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" onClick={()=> handleUpdate()} class="btn btn-primary w-20">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {deleteSuccess &&
                <Grid container spacing={2}>
                    <Grid item xs={5} md={6} sm={12}>
                        <Alert sx={{ width: "75%", marginLeft: '60px', mt: 25 }} severity="success"> Admin Order Delete Successfully!</Alert>
                    </Grid>
                    <Grid item xs={6} md={6} sm={12}>
                        <img src={delete1} widthh="100%" alt="" />
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default ManageOrder;