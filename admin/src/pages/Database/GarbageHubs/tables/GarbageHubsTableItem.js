import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiEdit, FiTrash} from "react-icons/fi";

import UpdateGarbageHubModal from "../modals/UpdateGarbageHubModal";
import DeleteGarbagBinModal from "../modals/DeleteGarbagBinModal";


const GarbageHubsTableItem = (props) => {
    const hub = props.hub;
    const bins = hub.bins;

    const [isEditHubDetailsVisible, setIsEditHubDetailsVisible] = useState(false);
    const [isDeleteBinVisible, setIsDeleteBinVisible] = useState(false);

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

    const handleOnHubCloseClicked = () => {
        setIsEditHubDetailsVisible(false);
    }
    const handleOnEditBinClicked = () => {
        setIsDeleteBinVisible(false);
    }

    const handleOnGarbageBinEditClicked = (e) => {
        setIsEditHubDetailsVisible(true);
        e.stopPropagation();
    }
    const handleOnGarbageBinDeleteClicked = (e) => {
        setIsDeleteBinVisible(true);
        e.stopPropagation();
    }

    const handleOnBinDeleted = () => {
        setIsDeleteBinVisible(false);
    }
    return (
        <Fragment>
            <tbody onClick={() => {
                props.onClick(hub.hubID)
            }} id={hub.hubID}>
            <tr>
                <td rowSpan={4}>{props.index + 1}</td>
                <td rowSpan={4}>{hub.hubID}</td>
                <td>{bins[0].binType}</td>
                <td>{bins[0].status}</td>
                <td>{bins[0].temperature}&deg;C</td>
                <td>{bins[0].humidity}</td>
                <td><label className={getFillLevelClasses(bins[0].level)}>{bins[0].level}%</label></td>
                <td>
                    <label className='action-item-group'>
                        <FiEdit id={1} onClick={handleOnGarbageBinEditClicked}/>
                        <FiTrash onClick={handleOnGarbageBinDeleteClicked}/>
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
                                    <FiEdit id={1} onClick={handleOnGarbageBinEditClicked}/>
                                    <FiTrash id={1} onClick={handleOnGarbageBinDeleteClicked}/>
                                </div>
                            </td>
                        </tr>
                    }
                })
            }
            </tbody>
            <UpdateGarbageHubModal show={isEditHubDetailsVisible} onHide={handleOnHubCloseClicked}/>
            <DeleteGarbagBinModal show={isDeleteBinVisible} onHide={handleOnEditBinClicked}
                                  onConfirm={handleOnBinDeleted}/>
        </Fragment>
    );
}

export default GarbageHubsTableItem;
