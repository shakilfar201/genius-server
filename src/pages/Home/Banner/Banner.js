import React from 'react';
import bg from '../../../images/banner.jpg'
import bg3 from '../../../images/banner3.jpg'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        // <Box style={{ bg }} sx={{ flexGrow: 1 }}>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <Link to="/exploreInventory"> <Button variant="contained" sx={{color: 'white'}}>Explore More</Button> </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <Link to="/explorehome"> <Button variant="contained" sx={{color: 'white'}}>Explore More</Button> </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <Link to="/explorehome"> <Button variant="contained" sx={{color: 'white'}}>Explore More</Button> </Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        // </Box>
    );
};

export default Banner;