import React from 'react';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Lpk912crEngine from '../Vehicale/LPK912CR/Lpk912crEngine';

const Lpk912cr = () => {
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
                    {engine && <Lpk912crEngine></Lpk912crEngine>}
                    {clutch && <h2>Ami valo</h2>}
                </Grid>
            </div>     
        </>
    );
};

export default Lpk912cr;