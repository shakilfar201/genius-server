import React from 'react';
import {useHistory }from 'react-router';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';


const Product = (props) => {
    
    const { url, name, price, _id, partNo, instock } = props.product;

    const history = useHistory();

    const handleUrl = (_id) => {
        const url = `/placeOrder/${_id}`
        history.push(url)
    };

    return (
        <>
        <Grid item xs={6} md={4} sm={12}>
            <Container>
                <Card sx={{ maxWidth: 355, m: 'auto', paddingBottom: '10px' }}>
                    <CardHeader
                        title={name}
                    />
                    <CardMedia
                        component="img"
                        height="300"
                        image={url}
                        alt="Loading Wait"
                    />
                    <CardContent>
                        <Typography variant="h4" sx={{color: '#f50057'}}>
                            {price}
                        </Typography>
                        <Typography variant="BUTTON TEXT" sx={{color: '#34495e'}}>
                            {partNo} Taka
                        </Typography>
                        <br />
                        <Typography variant="BUTTON TEXT" sx={{color: '#34495e'}}>
                            In Stock <br />
                            {instock} 
                        </Typography>
                    </CardContent>
                    <Button onClick={()=>handleUrl(_id)} variant="contained">Order Now</Button>
                </Card>
            </Container>
        </Grid>
        </>
    );
};

export default Product;