import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiCircle, FiEdit, FiTrash} from "react-icons/fi";
import {FaCircle} from "react-icons/fa";
// import UpdateTruckDriverModal from "../modals/UpdateTruckDriverModal";
// import DeleteTruckDriverModal from "../modals/DeleteTruckDriverModal";


const MaintennaceCrewTableItem = (props) => {

    const member = props.member;
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
    const handleOnDriverCloseClicked = () => {
        setIsEditMemberDetailsVisible(false);
    }
    // const handleOnEditBinClicked = () => {
    //     setIsDeleteBinVisible(false);
    // }
    //
    const handleOnDriverEditClicked = (e) => {
        setIsEditMemberDetailsVisible(true);
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
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.nic}</td>
                <td>{member.email}</td>
                <td>{member.jobs}</td>
                <td>
                    <FaCircle color={member.status === 'Active' ? 'green' : 'red'} size={'25px'}/>
                    {member.status}
                </td>
                <td>
                    <div className='action-item-group'>
                        <FiEdit id={1} onClick={handleOnDriverEditClicked} cl/>
                        <FiTrash id={1} onClick={handleOnDriverDeleteClicked}/>
                    </div>
                </td>
            </tr>


            {/*<UpdateTruckDriverModal show={isEditMemberDetailsVisible} onHide={handleOnDriverCloseClicked}/>*/}
            {/*<DeleteTruckDriverModal show={isDeleteDriverVisible} onHide={handleOnDriverDeleted}*/}
            {/*                        onConfirm={handleOnDriverDeleted}/>*/}
        </Fragment>
    );
}

export default MaintennaceCrewTableItem;
