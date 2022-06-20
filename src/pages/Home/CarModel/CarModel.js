import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Car from './Car';
import { Typography } from '@mui/material';

const CarModel = () => {

    // const [carModel, setCarModel] = useState([]);

    // useEffect(() => {
    //     const url = "https://calm-everglades-03915.herokuapp.com/carmodel";
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCarModel(data)
    //         })
    // }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h3" sx={{ color: '#8e24aa', fontWeight: 600, my: 3 }}>
                    CAR WISE OUR PARTS
                </Typography>
                <Grid container spacing={12}>
                    <Car></Car>
                </Grid>
            </Box>
        </>
    );
};

export default CarModel;