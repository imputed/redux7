import React from 'react';
import {selectValue} from "../../redux/tabvalue/tabvalueSlice"
import {useSelector} from "react-redux";
import UserTable from "./User/Table/UserTable";
import UserForm from "./User/UserForm";
import {Grid} from "@material-ui/core";
import GamesInput from "./Game/GamesInput";

export default function Content() {
    const selectedTab = useSelector(selectValue)
    switch (selectedTab) {
        case 0:
            return (
                <Grid container spacing={8}>
                    <Grid item>
                        <UserForm/>
                    </Grid>
                    <Grid item>
                        <UserTable/>
                    </Grid>
                </Grid>
            )
        case 1:
            return (
                <Grid container spacing={8}>
                    <Grid item>
                        <GamesInput/>
                    </Grid>
                </Grid>
            )
        default:
            return ("default")
    }

}