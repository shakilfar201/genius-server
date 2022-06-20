import React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Lpt909Engine from '../Vehicale/LPT909LPK909/Lpt909Engine';

const Lpt909 = () => {
    const [engine, setEngine] = useState(false);
    const [clutch, setClutch] = useState(false);
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
                <Grid item xs={10}>
                    {engine && <Lpt909Engine></Lpt909Engine>}
                    {clutch && <h2>Ami valo</h2>}
                </Grid>
            </div>      
        </>
    );
};

export default Lpt909;