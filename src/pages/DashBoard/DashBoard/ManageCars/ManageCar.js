import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import delete1 from '../../../../images/delete-removebg-preview.png';
import { Alert, Button, Grid, Typography } from '@mui/material';

const MAnageCar = () => {
    const [allCar, setAllCar] = useState([])
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    useEffect(() => {
        fetch('https://calm-everglades-03915.herokuapp.com/carmodel')
            .then(res => res.json())
            .then(data => {
                setAllCar(data)
                // console.log(data)
            })
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You sure Admin, You Want to Delete this Car?")
        if (proceed) {
            fetch(`https://calm-everglades-03915.herokuapp.com/carmodel/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount) {
                        const remaining = allCar.filter(order => order._id !== id)
                        setAllCar(remaining)
                        setDeleteSuccess(true)
                    }
                })
        };
    };
    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Manage all Car
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }}>Car ID</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Car Name</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Car Image</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: 18 }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allCar.map((row) => (
                            <TableRow
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell align="right">{row?.carName}</TableCell>
                                <TableCell align="right"><img width={"110px"} height={"85px"} src={row.img} alt="" /></TableCell>
                                <TableCell align="right"> <Button sx={{ color: 'red' }} onClick={() => handleDelete(row?._id)}>Delete</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {deleteSuccess &&
                <Grid container spacing={2}>
                    <Grid item xs={5} md={6} sm={12}>
                        <Alert sx={{ width: "75%", marginLeft: '60px', mt: 25 }} severity="success"> Admin Car Delete Successfully!</Alert>
                    </Grid>
                    <Grid item xs={6} md={6} sm={12}>
                        <img src={delete1} widthh="100%" alt="" />
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default MAnageCar;