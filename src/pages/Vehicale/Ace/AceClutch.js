import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import '../Vehicale.css';

const AceClutch = (props) => {
    const { url, name, price, _id, partNo, Block, instock, selfName, side, condition } = props.expo;
    const { admin } = useAuth();

    const history = useHistory();

    const handleUrl = (id) => {
        const url = `/placeOrder/${id}`
        history.push(url)
    }
    return (
        <>
          <div className="parts1">
                <div data-aos="zoom-out-up" className="part-container2 container2">
                    <div className="box2">
                        <img src={url} alt="" />
                        <div className="description2">
                            <ol>
                                <li><h4>Part No:</h4> {price} </li>
                                <li><h4>Name:</h4> {name} </li>
                                <li><h2>Price:</h2> {partNo} Taka </li>
                                <li><h2>In-stock:</h2> {instock} </li>
                                <li><h2>condition:</h2> {condition} </li>
                            </ol>
                            {admin && <ol>
                                <li><h2>Self-Name:</h2> {selfName} </li>
                                <li><h2>Block:</h2> {Block} </li>
                                <li><h2>side:</h2> {side} </li>
                            </ol>}
                        </div>
                        <Button onClick={() => handleUrl(_id)} variant="contained">Order Now</Button>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default AceClutch;