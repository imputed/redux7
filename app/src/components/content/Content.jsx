import React from 'react';
import {selectValue} from "../../redux/tabvalue/tabvalueSlice"
import {useSelector} from "react-redux";
import UserTable from "./User/Table/UserTable";
import LoginRegisterForm from "../login/LoginRegisterForm";
import {Grid} from "@material-ui/core";
import GameController from "./Game/GameController";
import {selectAuthorized, selectAuthorizedUser, setAuthorized} from "../../redux/login/LoginSlice";
import Profile from "../profile/profile";


export default function Content() {
    const selectedTab = useSelector(selectValue)
    const authorized = useSelector(selectAuthorized)
    const user = useSelector(selectAuthorizedUser)

    let tab0

    if (authorized) {
        tab0 =
            <Grid container spacing={8} justify={"center"} style={{margin: 50}}>
                <Grid item>
                    <Profile/>
                </Grid>
            </Grid>
    } else {
        tab0 = <Grid container spacing={8} justify={"center"} style={{margin: 50}}>
            <Grid item>
                <LoginRegisterForm/>
            </Grid>
        </Grid>
    }


    switch (selectedTab) {
        case 0:
            return tab0

        case 1:
            return (
                <Grid item>
                    <UserTable/>
                </Grid>
            )
        case 2:
            return (
                <Grid container spacing={8} justify={"center"}>
                    <Grid item>
                        <GameController/>
                    </Grid>
                </Grid>
            )
        default:
            return ("default")


    }
}