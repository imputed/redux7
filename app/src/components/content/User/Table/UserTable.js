import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import UserTableRow from "./UserTableRow";
import {selectUsers, setUsers} from "../../../../redux/Users/UsersSlice";
import httpService from "../../../../services/httpService";

export default function UserTable() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const header = ["ID", "Name", "Mail", "Role"]
    const users = useSelector(selectUsers)
    useEffect(() => {
        new httpService().getAllUsers().then((users) => {
            setData(users)
            dispatch(setUsers(users))
        })
    }, [dispatch, users]);

    return <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    {header.map((h) => {
                        return (
                            <TableCell key={"key_header_cell_" + h}>
                                {h}
                            </TableCell>)
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((user, index) => {
                    return (
                        <UserTableRow user={user} index={index} key={"UserTableRow_" + user._id}/>
                    )
                })}
            </TableBody>
        </Table>
    </Paper>

}