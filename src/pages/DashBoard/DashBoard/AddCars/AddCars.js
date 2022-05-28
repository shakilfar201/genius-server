import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';

const AddCars = () => {
    const [addCar, setAddCar] = useState([])
    const [addSuccess, setAddSuccess] = useState(false)

    const handleonBlur = (e) => {
        e.preventDefault()
        const field = e.target.name;
        const value = e.target.value;
        const newAddCar = { ...addCar };
        newAddCar[field] = value;
        setAddCar(newAddCar)
        console.log(newAddCar)
    }

    const handleProduct = (e) => {
        e.preventDefault()
        fetch('https://calm-everglades-03915.herokuapp.com/carmodel', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(addCar)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                // console.log(data)
                setAddSuccess(true)
            }
        })
    }
    return (
        <>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                ADD A CAR**
            </Typography>
            {addSuccess && <Alert sx={{width: "75%", marginLeft: 18, mb: 2}} severity="success">Add Car Successfully</Alert>}
            <form onSubmit={handleProduct}>
                <TextField
                    sx={{ width: "75%", m: 1 }}
                    required
                    id="standard-basic"
                    label="Car Name"
                    name="carName"
                    onBlur={handleonBlur}
                    type="text"
                    variant="standard" />

                <TextField
                    sx={{ width: "75%", m: 1 }}
                    required
                    id="standard-basic"
                    label="Car Image"
                    name="img"
                    onBlur={handleonBlur}
                    type="text"
                    variant="standard" />

                <Button sx={{ width: "75%", m: 3 }} type="submit" variant="contained">Add Car</Button>
            </form>  
        </>
    );
};

export default AddCars;