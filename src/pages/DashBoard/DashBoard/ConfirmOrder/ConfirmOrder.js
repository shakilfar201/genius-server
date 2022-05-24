import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';


const ConfirmOrder = () => {
    const [token, setToken] = useState('');
    const [addminSuccess, setAdminSuccess] = useState(false);
    const [addminSuccesss, setAdminSuccesss] = useState(false);


    const handleInput = (e) => {
        console.log(e.target.value)
        setToken(e.target.value)
    }

    const handleStatus = (e) => {
        e.preventDefault()
        const user = { token }
        console.log(user)
        fetch('https://calm-everglades-03915.herokuapp.com/booking', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount){
                    setAdminSuccess(true)
                }
                if(data.matchedCount){
                    setAdminSuccesss(true)
                }
            })
    }

    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'lawngreen' }}>
                Confirm Order
            </Typography>

            <form onSubmit={handleStatus}>
                {addminSuccess && <Alert sx={{ width: "50%", marginLeft: 39, mb: 2 }} severity="success">Confirm Successfully</Alert> }
                {addminSuccesss && <Alert sx={{ width: "50%", marginLeft: 39, mb: 2 }} severity="error">Order Already Confirm</Alert>}
                <TextField
                    sx={{ width: "50%", m: 2 }}
                    id="outlined-basic"
                    label="Token No"
                    type="token"
                    onBlur={handleInput}
                    variant="outlined" /> <br/>
                <Button type="submit" variant="contained">Confirm </Button>
            </form>
        </>
    );
};

export default ConfirmOrder;