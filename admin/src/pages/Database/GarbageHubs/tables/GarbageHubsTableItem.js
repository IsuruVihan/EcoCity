import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiEdit, FiTrash} from "react-icons/fi";

import UpdateGarbageHubModal from "../modals/UpdateGarbageHubModal";
import DeleteGarbagBinModal from "../modals/DeleteGarbagBinModal";


const GarbageHubsTableItem = (props) => {
    const hub = props.hub;
    const bins = hub.Bins;
    const [isEditHubDetailsVisible, setIsEditHubDetailsVisible] = useState(false);
    const [isDeleteBinVisible, setIsDeleteBinVisible] = useState(false);
    const [selectedBinId, setSelectedBinId] = useState(-1);
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
        e.stopPropagation();
        setSelectedBinId(e.target.id);
        setIsEditHubDetailsVisible(true);
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
                props.onClick(hub.id)
            }} id={hub.id}>
            <tr>
                <td rowSpan={4}>{props.index + 1}</td>
                <td rowSpan={4}>{hub.id}</td>
                <td>{bins[0].bintype}</td>
                <td>{bins[0].status}</td>
                <td>{bins[0].temperature}&deg;C</td>
                <td>{bins[0].humidity}</td>
                <td><label
                    className={getFillLevelClasses(bins[0].garbagelevel.replace('%', ''))}>{bins[0].garbagelevel}</label>
                </td>
                <td>
                    <label className='action-item-group'>
                        <FiEdit id={hub.id} onClick={handleOnGarbageBinEditClicked}/>
                        <FiTrash id={hub.id} onClick={handleOnGarbageBinDeleteClicked}/>
                    </label>
                </td>
            </tr>
            {
                bins.map((bin, idx) => {
                    if (idx !== 0) {
                        return <tr key={idx}>
                            <td>{bin.bintype}</td>
                            <td>{bin.status}</td>
                            <td>{bin.temperature}&deg;C</td>
                            <td>{bin.humidity}</td>
                            <td><label
                                className={getFillLevelClasses(bin.garbagelevel.replace('%', ''))}>{bin.garbagelevel}</label>
                            </td>
                            <td>
                                <div className='action-item-group'>
                                    <FiEdit id={hub.id} onClick={handleOnGarbageBinEditClicked}/>
                                    <FiTrash id={hub.id} onClick={handleOnGarbageBinDeleteClicked}/>
                                </div>
                            </td>
                        </tr>
                    }
                })
            }
            </tbody>
            <UpdateGarbageHubModal show={isEditHubDetailsVisible} onHide={handleOnHubCloseClicked} binid={selectedBinId}/>
            <DeleteGarbagBinModal show={isDeleteBinVisible} onHide={handleOnEditBinClicked}
                                  onConfirm={handleOnBinDeleted}/>
        </Fragment>
    );
}

export default GarbageHubsTableItem;
