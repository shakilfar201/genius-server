import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useHistory } from 'react-router';


const Car = (props) => {

    const { carName, img } = props.car;

    const history = useHistory()

    const handleUrl = (id) => {
        const url = `/carmodel/${id}`
        history.push(url)
    }

    return (
        <>
            <Grid item xs={6} md={3} sm={12}>
                <Container>
                    <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={img}
                            alt="Loading Wait"
                        />
                        <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                            {carName}
                        </Typography>
                        <CardContent>
                            {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                        </CardContent>
                        <Button onClick={() => handleUrl(carName)} variant="contained">See Parts</Button>
                    </Card>
                </Container>
            </Grid>
        </>
    );
};

export default Car;