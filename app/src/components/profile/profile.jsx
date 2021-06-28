import React from 'react';
import {useSelector} from "react-redux";
import {selectAuthorized, selectAuthorizedUser} from "../../redux/login/LoginSlice";
import {Card, Grid} from "@material-ui/core";


export default function Profile() {
    const authorized = useSelector(selectAuthorized)
    const user = useSelector(selectAuthorizedUser)
    if (!authorized){
        return ('')
    }

    return (

        <Card> <Grid container spacing={8} justify={"center"} style={{margin: 10, padding:10}}>
            <Grid item>

                    <h1>ID</h1>
                    <h1>Name</h1>
                    <h1>Role</h1>
                    <h1>Mail</h1>

            </Grid>
            <Grid item>
                <h1>{user.id}</h1>
                <h1>{user.name}</h1>
                <h1>{user.role}</h1>
                <h1>{user.mail}</h1>
            </Grid>
        </Grid>
        </Card>

    )
}


