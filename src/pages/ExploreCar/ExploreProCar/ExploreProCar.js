import { Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useHistory } from 'react-router';

const ExploreProCar = (props) => {
    const { carName, img } = props.expo;

    const history = useHistory()

    const handleUrl = (id) => {
        const url = `/carmodel/${id}`
        history.push(url)
    }
    
    return (
        <>
          <Grid item xs={6} md={4} sm={12}>
                <Container>
                    <Card sx={{ maxWidth: 480, m: 'auto', paddingBottom: '10px' }}>
                        <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px' }}>
                            {carName}
                        </Typography>
                        <CardMedia
                            component="img"
                            height="300"
                            image={img}
                            alt="Loading Wait"
                        />
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

export default ExploreProCar;