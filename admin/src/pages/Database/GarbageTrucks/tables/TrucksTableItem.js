import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiCircle, FiEdit, FiTrash} from "react-icons/fi";
import {FaCircle} from "react-icons/fa";


const GarbageHubsTableItem = (props) => {

    const truck = props.truck;
    console.log(truck);
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
    const handleOnDriverCloseClicked = () => {
        setIsEditDriverDetailsVisible(false);
    }
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
    const handleOnDriverDeleted = () => {
        setIsDeleteDriverVisible(false);
    }
    return (
        <Fragment>
            <tr className='c-pointer' style={{height: "42px"}} onClick={props.onClick}>
                <td>{props.index + 1}</td>
                <td>{truck.id}</td>
                <td>{truck.numberPlate}</td>
                <td>{truck.status}</td>
                <td>{truck.jobCount}</td>
                <td>{truck.availability}</td>
                <td>
                    <div className='action-item-group'>
                        <FiEdit id={1} onClick={handleOnDriverEditClicked} cl/>
                        <FiTrash id={1} onClick={handleOnDriverDeleteClicked}/>
                    </div>
                </td>
            </tr>


            {/*<UpdateTruckDriverModal show={isEditDriverDetailsVisible} onHide={handleOnDriverCloseClicked}/>*/}
            {/*<DeleteTruckDriverModal show={isDeleteDriverVisible} onHide={handleOnDriverDeleted}*/}
            {/*                        onConfirm={handleOnDriverDeleted}/>*/}
        </Fragment>
    );
}

export default GarbageHubsTableItem;
