import {TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {toggleIsNew} from "../../../../redux/person/PersonSlice";
import HttpService from "../../../../services/httpService";
import {useDispatch} from "react-redux";

export default function UserTableRow(props) {
    const svc = new HttpService()
    const dispatch = useDispatch()
    const deleteUser = (event) => {

        svc.deleteUser(event.target.attributes.id.value).then((res, err) => console.log("deleted " + err + " " + res))
        dispatch(toggleIsNew())
    }

    return (
        <TableRow key={"key_data_user_row_" + props.user.ID}>
            <TableCell>
                {props.user.ID}
            </TableCell>
            <TableCell>
                {props.user.Name}
            </TableCell>
            <TableCell>
                {props.user.Mail}
            </TableCell>
            <TableCell>
                {props.user.Role}
            </TableCell>
            <TableCell>
                <button type={"submit"} id={props.user.ID} onClick={(event) => {
                    deleteUser(event)
                }}>
                    Delete
                </button>
            </TableCell>
        </TableRow>
    )
}
