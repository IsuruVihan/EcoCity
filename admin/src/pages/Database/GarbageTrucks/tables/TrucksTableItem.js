import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiCircle, FiEdit, FiTrash} from "react-icons/fi";
import {FaCircle} from "react-icons/fa";
import UpdateTruckModal from "../modals/UpdateTruckModal";
import DeleteTruckModal from "../modals/DeleteTruckModal";


const GarbageHubsTableItem = (props) => {

    const truck = props.truck;
    console.log(truck);
    //
    const [isEditTruckDetailsVisible, setIsEditTruckDetailsVisible] = useState(false);
    const [isDeleteTruckVisible, setIsDeleteTruckVisible] = useState(false);
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
    const handleOnTruckCloseClicked = () => {
        setIsEditTruckDetailsVisible(false);
    }
    // const handleOnEditBinClicked = () => {
    //     setIsDeleteBinVisible(false);
    // }
    //
    const handleOnDriverEditClicked = (e) => {
        setIsEditTruckDetailsVisible(true);
        e.stopPropagation();
    }
    const handleOnDriverDeleteClicked = (e) => {
        setIsDeleteTruckVisible(true);
        e.stopPropagation();
    }
    //
    const handleOnTruckDeleted = () => {
        setIsDeleteTruckVisible(false);
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


            <UpdateTruckModal show={isEditTruckDetailsVisible} onHide={handleOnTruckCloseClicked}/>
            <DeleteTruckModal show={isDeleteTruckVisible} onHide={handleOnTruckDeleted}
                              onConfirm={handleOnTruckDeleted}/>
        </Fragment>
    );
}

export default GarbageHubsTableItem;
