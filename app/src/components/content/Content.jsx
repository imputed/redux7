import React from 'react';
import {selectValue} from "../../redux/tabvalue/tabvalueSlice"
import {useSelector} from "react-redux";
import UserTable from "./User/Table/UserTable";
import LoginRegisterForm from "../login/LoginRegisterForm";
import {Grid} from "@material-ui/core";
import GamesInput from "./Game/GamesInput";
import {selectAuthorized} from "../../redux/login/LoginSlice";


export default function Content() {
    const selectedTab = useSelector(selectValue)
    switch (selectedTab) {
        case 0:
            return (
                <Grid container spacing={8} justify={"center"} style={{margin: 50}}>
                    <Grid item>
                        <LoginRegisterForm/>
                    </Grid>
                </Grid>
            )
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
                        <GamesInput/>
                    </Grid>
                </Grid>
            )
        default:
            return ("default")
    }

}