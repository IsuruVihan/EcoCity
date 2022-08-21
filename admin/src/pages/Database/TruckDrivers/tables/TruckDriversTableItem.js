import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiEdit, FiTrash} from "react-icons/fi";


const GarbageHubsTableItem = (props) => {

    const driver = props.driver;
    //
    // const [isEditHubDetailsVisible, setIsEditHubDetailsVisible] = useState(false);
    // const [isDeleteBinVisible, setIsDeleteBinVisible] = useState(false);
    //
    // const getFillLevelClasses = (level) => {
    //     let classes = 'px-2 label ';
    //     if (level <= 25) {
    //         classes += 'level-normal';
    //     } else if (level <= 90) {
    //         classes += 'level-medium';
    //     } else {
    //         classes += 'level-warning';
    //     }
    //
    //     return classes;
    // }
    //
    // const handleOnHubCloseClicked = () => {
    //     setIsEditHubDetailsVisible(false);
    // }
    // const handleOnEditBinClicked = () => {
    //     setIsDeleteBinVisible(false);
    // }
    //
    // const handleOnGarbageBinEditClicked = (e) => {
    //     setIsEditHubDetailsVisible(true);
    //     e.stopPropagation();
    // }
    // const handleOnGarbageBinDeleteClicked = (e) => {
    //     setIsDeleteBinVisible(true);
    //     e.stopPropagation();
    // }
    //
    // const handleOnBinDeleted = () => {
    //     setIsDeleteBinVisible(false);
    // }
    return (
        <Fragment>
            <tr className='border-red' style={{height: "42px"}}>
                <td>{props.index + 1}</td>
                <td>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.nic}</td>
                <td>{driver.email}</td>
                <td>{driver.jobs}</td>
                <td>{driver.status}</td>
            </tr>


            {/*/!*<UpdateGarbageHubModal show={isEditHubDetailsVisible} onHide={handleOnHubCloseClicked}/>*!/*/}
            {/*/!*<DeleteGarbagBinModal show={isDeleteBinVisible} onHide={handleOnEditBinClicked}*!/*/}
            {/*/!*                      onConfirm={handleOnBinDeleted}/>*!/*/}
        </Fragment>
    );
}

export default GarbageHubsTableItem;
