import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ExploreProCar from './ExploreProCar/ExploreProCar';
import './ExploreCar.css';

const ExploreCar = () => {
    const [carModel, setCarModel] = useState([]);
    const [displayCar, setDisplayCar] = useState([]);

    useEffect(() => {
        const url = "https://calm-everglades-03915.herokuapp.com/carmodel";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCarModel(data)
            })
    }, [])

    const handleSearch = e => {
        const searchText = e.target.value;
        const matchCar = carModel.filter(car => car.carName.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayCar(matchCar);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h3" sx={{ color: '#8e24aa', fontWeight: 600, my: 3 }}>
                    WE HAVE LOT OF CAR 
                </Typography>
                <div className="search">
                    <input type="text"
                        onChange={handleSearch}
                        placeholder="Search your car name" />
                </div>
                <Grid container spacing={2}>
                    {
                        displayCar.map(expo => <ExploreProCar key={expo._id} expo={expo}></ExploreProCar>)
                    }
                </Grid>
            </Box>
        </>
    );
};

export default ExploreCar;