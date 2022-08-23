import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiCircle, FiEdit, FiTrash} from "react-icons/fi";
import {FaCircle} from "react-icons/fa";
import UpdateHouseModal from "../modals/UpdateHouseModal";
import DeleteHouseModal from "../modals/DeleteHouseModal";

// import DeleteTruckDriverModal from "../modals/DeleteTruckDriverModal";


const MaintennaceCrewTableItem = (props) => {

    const house = props.house;
    //
    const [isEditHouseDetailsVisible, setIsEditHouseDetailsVisible] = useState(false);
    const [isDeleteHouseVisible, setIsDeleteHouseVisible] = useState(false);
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
    const handleOnHouseCloseClicked = () => {
        setIsEditHouseDetailsVisible(false);
    }
    // const handleOnEditBinClicked = () => {
    //     setIsDeleteBinVisible(false);
    // }
    //
    const handleOnHouseEditClicked = (e) => {
        setIsEditHouseDetailsVisible(true);
        e.stopPropagation();
    }
    const handleOnHouseDeleteClicked = (e) => {
        setIsDeleteHouseVisible(true);
        e.stopPropagation();
    }
    //
    const handleOnHouseDeleted = () => {
        setIsDeleteHouseVisible(false);
    }
    return (
        <Fragment>
            <tr className='c-pointer' style={{height: "42px"}} onClick={props.onClick}>
                <td>{props.index + 1}</td>
                <td>{house.id}</td>
                <td>{house.name}</td>
                <td>{house.nic}</td>
                <td>{house.email}</td>
                <td>
                    <FaCircle color={house.status === 'Active' ? 'green' : 'red'} size={'25px'}/>
                    {house.status}
                </td>
                <td>
                    <div className='action-item-group'>
                        <FiEdit id={1} onClick={handleOnHouseEditClicked} cl/>
                        <FiTrash id={1} onClick={handleOnHouseDeleteClicked}/>
                    </div>
                </td>
            </tr>

            <UpdateHouseModal show={isEditHouseDetailsVisible} onHide={handleOnHouseCloseClicked}/>
            <DeleteHouseModal show={isDeleteHouseVisible} onHide={handleOnHouseDeleted}
                              onConfirm={handleOnHouseDeleted}/>
        </Fragment>
    );
}

export default MaintennaceCrewTableItem;
