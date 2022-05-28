import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import order1 from '../../images/order.png';
import order2 from '../../images/place-order-removebg-preview.png';
import { Alert, Button, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import './PlaceOrderHome/placeOrder.css';

const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [single, setSingle] = useState([]);
    // const [inStock, setInStock] = useState([]);
    const [bookSuccess, setBookSuccess] = useState(false);
    // const [tokenConfirm, setTokenConfirm] = useState('');

    const initialize = { customerName: user.displayName, email: user.email }

    const [order, setOrder] = useState(initialize)

    useEffect(() => {
        const url = `https://calm-everglades-03915.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSingle(data)
            })
    }, [id])

    const handleonBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order };
        newOrder[field] = value;
        setOrder(newOrder)
        console.log(newOrder)
        e.preventDefault()
    }

    // const handleonBlurr = (e) => {
    //     setInStock(e.target.value)
    //     console.log(e.target.value)
    //     e.preventDefault()
    // }

    const handleOrder = (e) => {
        const orderBook = {
            ...order,
            productName: single.name,
            productPrice: single.price,
            productID: single._id,
            cashTaka: single.partNo,
            stock: single.instock,
        }
        console.log(orderBook)
        fetch('https://calm-everglades-03915.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookSuccess(true)
                }
            })
        e.preventDefault()
    }

    const getToken = () => {
        const chars = "0123456789ZEMECO";
        const tokenLength = 6;
        let token = '';

        for (var i = 0; i < tokenLength; i++) {
            var randomToken = Math.floor(Math.random() * chars.length);
            token += chars.substring(randomToken, randomToken + 1);
        }
        document.getElementById("token").value = token;
        // return token;
    }

    return (
        <Container>
            <Box sx={{ flexGrow: 1, m: 'auto' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={12}>
                        <Typography variant="h4" sx={{ color: 'green', mb: 5, mt: 14, ml: -9 }}>
                            PLACE YOUR ORDER
                        </Typography>

                        {bookSuccess && <Alert sx={{ width: "75%", marginLeft: '60px', mb: 2 }} severity="success">Order Placed Successfully! Go To Dashboard</Alert>}

                        <form onSubmit={handleOrder}>
                            <Typography variant="h5" sx={{ color: 'green', fontWeight: 600, textAlign: 'left', ml: 9, mb: 5 }}>
                                Product Name: {single.name}
                            </Typography>
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                label="Name"
                                id="outlined-size-small"
                                name="customerName"
                                onBlur={handleonBlur}
                                defaultValue={user.displayName}
                                size="small"
                            />
                            {/* <input type="text" name="token" onBlur={handleonBlur} placeholder="Token No" id="token" /> */}

                            <TextField
                                required
                                sx={{ width: "75%", m: 1 }}
                                label="Token No"
                                id="token"
                                onBlur={handleonBlur}
                                name="token"
                                size="small"
                            />

                            <div id="btn" onClick={getToken} className="button"><button className="design-btn">Generate token</button></div>

                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                label="Email"
                                id="outlined-size-small"
                                onBlur={handleonBlur}
                                name="email"
                                defaultValue={user.email}
                                size="small"
                                disabled
                            />

                            <TextField
                                required
                                sx={{ width: "75%", m: 1 }}
                                label="Phone Number"
                                id="outlined-size-small"
                                onBlur={handleonBlur}
                                name="phoneNumber"
                                size="small"
                            />
                            <TextField
                                required
                                sx={{ width: "75%", m: 1 }}
                                label="Product quantity"
                                id="outlined-size-small"
                                onBlur={handleonBlur}
                                name="quantity"
                                size="small"
                            />
                            <Button sx={{ width: "75%", m: 3 }} type="submit" variant="contained">Submit</Button>
                        </form>
                    </Grid>
                    {bookSuccess ? <Grid item xs={12} md={6} sm={12}>
                        <img src={order1} width="100%" alt="" style={{ marginTop: "60px" }} />
                    </Grid> : <Grid item xs={12} md={6} sm={12}>
                        <img src={order2} width="100%" alt="" style={{ marginTop: "60px" }} />
                    </Grid>}
                </Grid>
            </Box>
        </Container>
    );
};

export default PlaceOrder;