import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiCircle, FiEdit, FiTrash} from "react-icons/fi";
import {FaCircle} from "react-icons/fa";


const GarbageHubsTableItem = (props) => {

    const driver = props.driver;
    //
    const [isEditDriverDetailsVisible, setIsEditDriverDetailsVisible] = useState(false);
    const [isDeleteDriverVisible, setIsDeleteDriverVisible] = useState(false);
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
    const handleOnDriverEditClicked = (e) => {
        setIsEditDriverDetailsVisible(true);
        e.stopPropagation();
    }
    const handleOnDriverDeleteClicked = (e) => {
        setIsDeleteDriverVisible(true);
        e.stopPropagation();
    }
    //
    // const handleOnBinDeleted = () => {
    //     setIsDeleteBinVisible(false);
    // }
    return (
        <Fragment>
            <tr className='c-pointer' style={{height: "42px"}} onClick={props.onClick}>
                <td>{props.index + 1}</td>
                <td>{driver.id}</td>
                <td>{driver.name}</td>
                <td>{driver.nic}</td>
                <td>{driver.email}</td>
                <td>{driver.jobs}</td>
                <td>
                    <FaCircle color={driver.status === 'Active' ? 'green' : 'red'} size={'25px'}/>
                    {driver.status}
                </td>
                <td>
                    <div className='action-item-group'>
                        <FiEdit id={1} onClick={handleOnDriverEditClicked} cl/>
                        <FiTrash id={1} onClick={handleOnDriverDeleteClicked}/>
                    </div>
                </td>
            </tr>


            {/*/!*<UpdateGarbageHubModal show={isEditHubDetailsVisible} onHide={handleOnHubCloseClicked}/>*!/*/}
            {/*/!*<DeleteGarbagBinModal show={isDeleteBinVisible} onHide={handleOnEditBinClicked}*!/*/}
            {/*/!*                      onConfirm={handleOnBinDeleted}/>*!/*/}
        </Fragment>
    );
}

export default GarbageHubsTableItem;
