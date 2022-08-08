import React, {Fragment} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiEdit, FiTrash} from "react-icons/fi";


const GarbageHubsTableItem = (props) => {
    const hub = props.hub;
    const bins = hub.bins;

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

    const handleOnGarbageBinClicked = () => {

    }

    return (
        <tbody onClick={props.onClick}>
        <tr onClick={handleOnGarbageBinClicked}>
            <td rowSpan={4}>{props.index + 1}</td>
            <td rowSpan={4}>{hub.hubID}</td>
            <td>{bins[0].binType}</td>
            <td>{bins[0].status}</td>
            <td>{bins[0].temperature}&deg;C</td>
            <td>{bins[0].humidity}</td>
            <td><label className={getFillLevelClasses(bins[0].level)}>{bins[0].level}%</label></td>
            <td>
                <label className='action-item-group'>
                    <FiEdit/>
                    <FiTrash/>
                </label>
            </td>
        </tr>
        {
            bins.map((bin, idx) => {
                if (idx !== 0) {
                    return <tr key={idx}>
                        <td>{bin.binType}</td>
                        <td>{bin.status}</td>
                        <td>{bin.temperature}&deg;C</td>
                        <td>{bin.humidity}</td>
                        <td><label className={getFillLevelClasses(bin.level)}>{bin.level}%</label></td>
                        <td>
                            <div className='action-item-group'>
                                <FiEdit/>
                                <FiTrash/>
                            </div>
                        </td>
                    </tr>
                }
            })
        }


        </tbody>
    );
}

export default GarbageHubsTableItem;
