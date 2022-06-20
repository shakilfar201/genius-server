/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './VehicalHome/Vehical.css';
import AceEngine from '../Vehicale/Ace/AceEngine';
import { useEffect } from 'react';
import AceClutch from '../Vehicale/Ace/AceClutch';
import Box from '@mui/material/Box';



const VehicalExplore = () => {

    const [aceEngine, setAceEngine] = useState()
    const [aceClutch, setAceClutch] = useState()

    const [engine, setEngine] = useState(false);
    const [clutch, setClutch] = useState(false);


    // fetch Time
    useEffect(() => {
        const url = "https://calm-everglades-03915.herokuapp.com/products/ace/engine";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAceEngine(data)
            })
    }, [])

    useEffect(() => {
        const url = "https://calm-everglades-03915.herokuapp.com/products/ace/clutch";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAceClutch(data)
            })
    }, [])

    return (
        <>
         <Box sx={{ flexGrow: 1 }}>
            <div className="display">
                <Grid item xs={2}>
                    <ul className="ul">
                        <li className="li"><button onClick={() => setEngine(true)} className="button">ENGINE</button></li>
                        <li className="li"><button onClick={() => setClutch(true)} className="button">CLUTCH</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                        <li className="li"><button className="button">ENGINE</button></li>
                    </ul>
                </Grid>
                <Grid container spacing={2} item xs={8}>
                    {engine && aceEngine.map(expo => <AceEngine key={expo._id} expo={expo}></AceEngine>)}
                    {clutch && aceClutch.map(expo => <AceClutch key={expo._id} expo={expo}></AceClutch>)}
                </Grid>
            </div>
            </Box>
        </>
    );
};

export default VehicalExplore;
