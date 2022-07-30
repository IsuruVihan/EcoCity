import React, {Fragment} from 'react';
import {Row, Table} from "react-bootstrap";


const GarbageHubsTableItem = () => {
    return (
        <Fragment>
            <tr>
                <td rowSpan={4}>1</td>
                <td rowSpan={4}>CMB-7-1</td>
                <td>Organic</td>
                <td>Active</td>
                <td>10&deg;C</td>
                <td>20%</td>
                <td><label className='px-2 label level-warning'>95%</label></td>
                <td>Edit</td>
            </tr>
            <tr>
                <td>Glass</td>
                <td>Active</td>
                <td>5&deg;C</td>
                <td>3%</td>
                <td><label className='px-2 label level-normal'>23%</label></td>
                <td>Edit</td>
            </tr>
            <tr>
                <td>Paper</td>
                <td>Active</td>
                <td>3&deg;C</td>
                <td>5%</td>
                <td><label className='px-2 label level-medium'>56%</label></td>
                <td>Edit</td>
            </tr>
            <tr>
                <td>Plastic</td>
                <td>Active</td>
                <td>3&deg;C</td>
                <td>2%</td>
                <td><label className='px-2 label level-normal'>21%</label></td>
                <td>Edit</td>
            </tr>
        </Fragment>
    );
}

export default GarbageHubsTableItem;
