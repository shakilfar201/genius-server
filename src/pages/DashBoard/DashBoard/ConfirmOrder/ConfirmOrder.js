import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Alert } from '@mui/material';


const ConfirmOrder = () => {
    const [token, setToken] = useState('');
    // const [taka, setTaka] = useState('');
    // const [service, setService] = useState('');
    const [addminSuccess, setAdminSuccess] = useState(false);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value);
      };

    // const [addminSuccesss, setAdminSuccesss] = useState(false);


    const handleInput = (e) => {
        console.log(e.target.value)
        setToken(e.target.value)
    }

    // const handleInputt = (e) => {
    //     console.log(e.target.value)
    //     setTaka(e.target.value)
    // }

    // const handleInputtt = (e) => {
    //     console.log(e.target.value)
    //     setService(e.target.value)
    // }

    const handleStatus = (e) => {
        e.preventDefault()
        const user = { token, value }
        // console.log(user)
        fetch('https://calm-everglades-03915.herokuapp.com/booking', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    setAdminSuccess(true)
                }
                // if(data.matchedCount){
                //     setAdminSuccesss(true)
                // }
            })
    }

    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'lawngreen' }}>
                Confirm Order
            </Typography>

            <form onSubmit={handleStatus}>
                {addminSuccess && <Alert sx={{ width: "50%", marginLeft: 39, mb: 2 }} severity="success">Confirm Successfully</Alert>}
                {/* {addminSuccesss && <Alert sx={{ width: "50%", marginLeft: 39, mb: 2 }} severity="error">Order Already Confirm</Alert>} */}
                <TextField
                    required
                    sx={{ width: "50%", m: 2 }}
                    id="outlined-basic"
                    label="Token No"
                    type="token"
                    onBlur={handleInput}
                    variant="outlined" /> <br />

                {/* <TextField
                    sx={{ width: "50%", m: 2 }}
                    id="outlined-basic"
                    label="Discount Taka"
                    type="token"
                    onBlur={handleInputt}
                    variant="outlined" /> <br /> */}

                {/* <TextField
                    required
                    sx={{ width: "50%", m: 2 }}
                    id="outlined-basic"
                    label="Service"
                    type="token"
                    onBlur={handleInputtt}
                    variant="outlined" /> <br /> */}

                <div>
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Change Status</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Package Processing Started" control={<Radio />} label="On processing" type="token" />
                        <FormControlLabel value="Package being Prepared" control={<Radio />} label="Package being Prepared" />
                        <FormControlLabel value="Pickup in progress" control={<Radio />} label="Pickup in progress" />
                        <FormControlLabel value="Arrived at Our Warehouse" control={<Radio />} label="Arrived at Our Warehouse" />
                        <FormControlLabel value="Shipped" control={<Radio />} label="Shipped" />
                        <FormControlLabel value="Out of Delivery" control={<Radio />} label="Out of Delivery" />
                        <FormControlLabel value="Delivered" control={<Radio />} label="Delivered" />
                    </RadioGroup>
                </FormControl>
                </div>

                <Button type="submit" variant="contained">Confirm </Button>
            </form>
        </>
    );
};

export default ConfirmOrder;