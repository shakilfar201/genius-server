import React from 'react';

const Table = ({booking}) => {

    const taka = booking.cashTaka;
    const total = booking.quantity * booking.cashTaka
    const discount = booking.quantity * booking.cashTaka / 10
    const cashTotal = (booking.quantity * booking.cashTaka) - (booking.quantity * booking.cashTaka / 10) - (50)
    return (
        <>
            <table width="100%">
                <thead>
                    <tr className="tr-1">
                        <th className="align">Product Name</th>
                        <th>Part No</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody className="tbody-1">
                    <tr>
                        <td className="align">{booking.productName}</td>
                        <td>{booking.productPrice}</td>
                        <td>{booking.quantity}</td>
                        <td>{taka.toLocaleString()}</td>
                        <td>{total.toLocaleString()}</td>
                    </tr>
                </tbody>

                <thead>
                    <tr className="tr-1">
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="align">Discount</th>
                        <th>{discount.toLocaleString()}</th>
                    </tr>
                </thead>

                <tbody className="tbody-1">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="delivery align">Delivery Charge</td>
                        <td>50</td>
                    </tr>
                </tbody>

                <thead>
                    <tr className="tr-1">
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="align">Total BDT</th>
                        <th>{cashTotal.toLocaleString()}</th>
                    </tr>
                </thead>

            </table>

        </>
    );
};

export default Table;