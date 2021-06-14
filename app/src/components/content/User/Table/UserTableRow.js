import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {toggleIsNew} from "../../../../redux/person/PersonSlice";
import HttpService from "../../../../services/httpService";
import {useDispatch} from "react-redux";

export default function UserTableRow(props) {
    const svc = new HttpService()
    const dispatch = useDispatch()
    const deleteUser = (event) => {
        let usr = {}
        usr._id = event.target.attributes.id.value
        console.log(usr)
        svc.deleteUser(usr).then((res,err) => console.log("deleted " + err +" " + res ))
        dispatch(toggleIsNew())
    }

    return (
        <TableRow key={"key_data_user_row_" + props.user._id}>
            <TableCell>
                {props.user._id}
            </TableCell>
            <TableCell>
                {props.user.name}
            </TableCell>
            <TableCell>
                {props.user.age}
            </TableCell>
            <TableCell>
                {props.user.role}
            </TableCell>
            <TableCell>
                <button type={"submit"} id={props.user._id}  onClick={(event) => {
                    deleteUser(event)
                }}>
                    Delete</button>
            </TableCell>
        </TableRow>
    )
}
