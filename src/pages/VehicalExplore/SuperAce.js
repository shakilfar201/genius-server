import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SuperEngine from '../Vehicale/SuperAce/SuperEngine';
import { useEffect } from 'react';
import './VehicalHome/Vehical.css';

const SuperAce = () => {
    const [superEngine, setSuperAceEngine] = useState()
    const [superClutch, setAceClutch] = useState()

    const [engine, setEngine] = useState(false);
    const [clutch, setClutch] = useState(false);

    useEffect(() => {
        const url = "https://calm-everglades-03915.herokuapp.com/products/superace/engine";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSuperAceEngine(data)
            })
    }, [])

    // useEffect(() => {
    //     const url = "https://calm-everglades-03915.herokuapp.com/products/superace/clutch";
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setAceClutch(data)
    //         })
    // }, [])

    return (
        <>
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
                <Grid container spacing={2} item xs={10}>
                    {engine && superEngine.map(expo => <SuperEngine key={expo._id} expo={expo}></SuperEngine>)}
                    {clutch && <h2>Ami valo</h2>}
                </Grid>
            </div>
        </>
    );
};

export default SuperAce;
