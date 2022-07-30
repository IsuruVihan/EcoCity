import React, {Fragment} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiEdit, FiTrash} from "react-icons/fi";


const GarbageHubsTableItem = () => {
    const getFillLevelClasses = (level) => {
        let classes = 'px-2 label ';
        if (level <= 25) {
            classes += 'level-normal';
        } else if (level <= 90) {
            classes += 'level-medium';
        } else {
            classes += 'level-warning';
        }

        return classes;
    }
    return (
        <Fragment>
            <tr>
                <td rowSpan={4}>1</td>
                <td rowSpan={4}>CMB-7-1</td>
                <td>Organic</td>
                <td>Active</td>
                <td>10&deg;C</td>
                <td>20%</td>
                <td><label className={getFillLevelClasses(95)}>95%</label></td>
                <td>
                    <div className='action-item-group'>
                        <FiEdit/>
                        <FiTrash/>
                    </div>

                </td>
            </tr>
            <tr>
                <td>Glass</td>
                <td>Active</td>
                <td>5&deg;C</td>
                <td>3%</td>
                <td><label className={getFillLevelClasses(23)}>23%</label></td>
                <td>Edit</td>
            </tr>
            <tr>
                <td>Paper</td>
                <td>Active</td>
                <td>3&deg;C</td>
                <td>5%</td>
                <td><label className={getFillLevelClasses(56)}>56%</label></td>
                <td>Edit</td>
            </tr>
            <tr className='divider-row'>
                <td>Plastic</td>
                <td>Active</td>
                <td>3&deg;C</td>
                <td>2%</td>
                <td><label className={getFillLevelClasses(21)}>21%</label></td>
                <td>Edit</td>
            </tr>
        </Fragment>
    );
}

export default GarbageHubsTableItem;
