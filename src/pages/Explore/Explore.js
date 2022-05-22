import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ExplorePro from './ExplorePro/ExplorePro';
import { Typography } from '@mui/material';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);

    useEffect(() => {
        const url = "https://mysterious-cove-34253.herokuapp.com/products";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const handleSearch = e => {
        const searchText = e.target.value;
        const matchProducts = products.filter(product => product.price.includes(searchText));
        setDisplayProduct(matchProducts);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3" sx={{ color: '#8e24aa', fontWeight: 600, my: 3 }}>
                WE HAVE LOT OF PRODUCTS
            </Typography>
            <div className="search">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Part Number" />
            </div>
            <Grid container spacing={2}>
                {
                    displayProduct.map(expo => <ExplorePro key={expo._id} expo={expo}></ExplorePro>)
                }
            </Grid>
        </Box>
    );
};

export default Explore;