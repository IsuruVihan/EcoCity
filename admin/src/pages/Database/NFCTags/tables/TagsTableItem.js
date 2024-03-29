import React, {Fragment, useState} from 'react';
import {Row, Table} from "react-bootstrap";
import {FiCircle, FiEdit, FiTrash} from "react-icons/fi";
import {FaCircle} from "react-icons/fa";
import UpdateNFCTagModal from "../modals/UpdateNFCTagModal";
import DeleteNFCTagModal from "../modals/DeleteNFCTagModal";


// import DeleteTruckDriverModal from "../modals/DeleteTruckDriverModal";


const TagsTableItem = (props) => {

    const tag = props.tag;
    //
    const [isEditTagDetailsVisible, setIsEditTagDetailsVisible] = useState(false);
    const [isDeleteTagVisible, setIsDeleteTagVisible] = useState(false);
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
    const handleOnTagCloseClicked = () => {
        setIsEditTagDetailsVisible(false);
    }
    // const handleOnEditBinClicked = () => {
    //     setIsDeleteBinVisible(false);
    // }
    //
    const handleOnTagEditClicked = (e) => {
        setIsEditTagDetailsVisible(true);
        e.stopPropagation();
    }
    const handleOnTagDeleteClicked = (e) => {
        setIsDeleteTagVisible(true);
        e.stopPropagation();
    }
    //
    const handleOnTagDeleted = () => {
        setIsDeleteTagVisible(false);
    }
    return (
        <Fragment>
            <tr className='c-pointer' style={{height: "42px"}} onClick={props.onClick}>
                <td>{props.index + 1}</td>
                <td>{tag.serial}</td>
                <td>{tag.name}</td>
                <td>{tag.userType}</td>
                <td>{tag.status}</td>
                <td>
                    <div className='action-item-group'>
                        <FiEdit id={1} onClick={handleOnTagEditClicked}/>
                        <FiTrash id={1} onClick={handleOnTagDeleteClicked}/>
                    </div>
                </td>
            </tr>
            <UpdateNFCTagModal show={isEditTagDetailsVisible} onHide={handleOnTagCloseClicked}/>
            <DeleteNFCTagModal show={isDeleteTagVisible} onHide={handleOnTagDeleted}
                               onConfirm={handleOnTagDeleted}/>
        </Fragment>
    );
}

export default TagsTableItem;
