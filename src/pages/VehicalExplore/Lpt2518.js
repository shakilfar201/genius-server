import React from 'react';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Lpt2518Engine from '../Vehicale/LPT&LPK2518/Lpt2518Engine';

const Lpt2518 = () => {
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
                    {engine && <Lpt2518Engine></Lpt2518Engine>}
                    {clutch && <h2>Ami valo</h2>}
                </Grid>
            </div>      
        </>
    );
};

export default Lpt2518;