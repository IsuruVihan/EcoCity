import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiCircle, FiEdit, FiTrash} from "react-icons/fi";
import {FaCircle} from "react-icons/fa";
import UpdateHouseModal from "../modals/UpdateHouseModal";

// import DeleteTruckDriverModal from "../modals/DeleteTruckDriverModal";


const MaintennaceCrewTableItem = (props) => {

    const house = props.house;
    //
    const [isEditMemberDetailsVisible, setIsEditMemberDetailsVisible] = useState(false);
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
    const handleOnHouseCloseClicked = () => {
        setIsEditMemberDetailsVisible(false);
    }
    // const handleOnEditBinClicked = () => {
    //     setIsDeleteBinVisible(false);
    // }
    //
    const handleOnHouseEditClicked = (e) => {
        setIsEditMemberDetailsVisible(true);
        e.stopPropagation();
    }
    const handleOnHouseDeleteClicked = (e) => {
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

            <UpdateHouseModal show={isEditMemberDetailsVisible} onHide={handleOnHouseCloseClicked}/>
            {/*<DeleteCrewMemberModal show={isDeleteDriverVisible} onHide={handleOnDriverDeleted}*/}
            {/*                       onConfirm={handleOnDriverDeleted}/>*/}
        </Fragment>
    );
}

export default MaintennaceCrewTableItem;
