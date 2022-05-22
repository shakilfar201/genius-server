import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './ExplorePro.css';

const ExplorePro = (props) => {
    const { url, name, price, _id, partNo, Block, instock, selfName, side } = props.expo;


    const history = useHistory();

    const handleUrl = (_id) => {
        const url = `/placeOrder/${_id}`
        history.push(url)
    }


    return (
        <>
            <div className="parts">
                <div data-aos="zoom-out-up" className="part-container container">
                    <div className="box">
                        <img src={url} alt="" />
                        <div className="description">
                            <ol>
                                <li><h4>Part No:</h4> {price} </li>
                                <li><h4>Name:</h4> {name} </li>
                                <li><h2>Price:</h2> {partNo} Taka </li>
                                <li><h2>In-stock:</h2> {instock} </li>
                                <li><h2>Self-Name:</h2> {selfName} </li>
                                <li><h2>Block:</h2> {Block} </li>
                                <li><h2>side:</h2> {side} </li>
                            </ol>
                        </div>
                        <Button onClick={()=>handleUrl(_id)} variant="contained">Order Now</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExplorePro;
