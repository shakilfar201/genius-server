import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import car1 from './../../../images/Ace.jpg';
import car2 from './../../../images/Super-ace.jpg';
import car3 from './../../../images/megaXl.jpg';
import car4 from './../../../images/intra-v-10&20.png';
import car5 from './../../../images/207Di & Rx.jpg';
import car6 from './../../../images/Xenon.jpg';
import car7 from './../../../images/lpt-407.jpg';
import car8 from './../../../images/lpt909&lpk.jpg';
import car9 from './../../../images/lpk912 cr.png';
import car10 from './../../../images/ultra.jpg';
import car11 from './../../../images/1212cr.jpg';
import car12 from './../../../images/1613tc.png';
import car13 from './../../../images/lpk1615.png';
import car14 from './../../../images/lpk2516.png';
import car15 from './../../../images/lpt2518.jpg';
import { Link } from 'react-router-dom';


const Car = () => {
    return (
        <>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px', marginLeft: '30px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car1}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        ACE
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/ace"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car2}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        SUPER ACE
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/superace"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car3}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        MEGA XL
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/megaXl"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px', marginRight: '30px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car4}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        INTRA V10 & 20
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/IntraV1020"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px', marginLeft: '30px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car5}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        207 DI & RX
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/207dI&rx"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car6}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        XENON 30.L
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/xenon30.l"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car7}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        LPT 407 ,LPT 709
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/lpt407&709"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px', marginRight: '30px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car8}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        LPT 909,LPK 909
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/lpt909lpk909"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px', marginLeft: '30px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car9}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        LPK 912 CR
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/lpk912cr"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car10}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        ULTRA
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/ultra"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car11}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        1212 CR
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/1212cr"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px', marginRight: '30px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car12}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        1613 TC & BS3
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/1613tc&bs3"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px',marginLeft: '30px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car13}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        LPT & LPK 1615
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/lpt&lpk1615"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={4} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car14}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        LPT & LPK 2516
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/lpt&lpk2516"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
            <Grid item xs={6} md={3} sm={12}>
                <Card sx={{ maxWidth: 400, m: 'auto', paddingBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={car15}
                        alt="Loading Wait"
                    />
                    <Typography variant="h6" sx={{ color: '#f50057', fontSize: '30px', marginBottom: '-25px' }}>
                        LPT & LPK 2518
                    </Typography>
                    <CardContent>
                        {/* <Typography variant="h4" sx={{ color: '#f50057' }}>
                                k
                            </Typography> */}
                    </CardContent>
                    <Link to="/lpt&lpk2518"> <Button variant="contained" sx={{color: 'white'}}>See Parts</Button> </Link>
                </Card>
            </Grid>
        </>
    );
};

export default Car;