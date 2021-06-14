import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {selectIsNew} from "../../../../redux/person/PersonSlice";
import {useDispatch, useSelector} from 'react-redux';
import HttpService from "../../../../services/httpService";
import UserTableRow from "./UserTableRow";
import  {setUsers} from "../../../../redux/Users/UsersSlice";

export default function UserTable() {

    const [data, setData] = useState([]);
    // const [header, setHeader] = useState([]);
    const [loaded,setLoaded] = React.useState(false)
    const isNew = useSelector(selectIsNew)
    const display = (loaded===true) ? "block" : "none"
    const svc = new HttpService()
    const dispatch = useDispatch()
    //
    // useEffect(() => {
    //    svc.getUserTableHeader().then((header) =>
    //        setHeader(header[0].headers))},[])
const header = ["ID","Name", "Role"]
    useEffect(() => {
        svc.getAllUsers().then((users) => {
            setData(users)
            dispatch(setUsers(users))


        }).then(() => {
            setLoaded(true)
            console.log("Users Fetched ")        })
    }, [isNew]);



        return <Paper style={{display:display}}>

            <Table>
                <TableHead>
                    <TableRow>
                        {header.map((h, index) => {
                            return (
                                <TableCell key={"key_header_cell_" + h}>
                                    {h}
                                </TableCell>)
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((user, index) => {

                        return(
                            <UserTableRow user={user} index={index} key={"UserTableRow_" + user._id}/>

                            )

                    })}
                </TableBody>
            </Table>
        </Paper>

}