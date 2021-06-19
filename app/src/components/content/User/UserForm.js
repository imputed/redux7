import React from "react";
import Select from "react-select";
import {useForm, Controller} from "react-hook-form";
import {Button, FormLabel, Input} from "@material-ui/core";
import {Grid, Box} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {
    toggleIsNew
} from '../../../redux/person/PersonSlice';
import {makeStyles} from "@material-ui/core/styles";
import HttpService from "../../../services/httpService";

const svc = new HttpService()

const useStyles = makeStyles(() => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        marginBottom: 10,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

export default function UserForm() {
    const { control, handleSubmit } = useForm();

    const dispatch = useDispatch();
    const onSubmit = (data) => {
            const usr = {name: data["userName"], mail:data['userMail'], role:data['userRole']}
            Promise.resolve(svc.createUser(usr)).then(() => {
                    dispatch(toggleIsNew())
                }
            )

    };
    const classes = useStyles()
    return (

        <Box className={classes.box}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container justify={"center"} direction={"column"} spacing={8}>

                    <Grid item>
                        <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <FormLabel>Name</FormLabel>
                            </Grid>
                            <Grid item style={{width: "60%"}}>
                                <Controller
                                    name="userName"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <Input style={{width: "100%"}} {...field}   />}
                                />

                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                                <Grid item>
                                    <FormLabel>Mail</FormLabel>
                                </Grid>
                                <Grid item style={{width: "60%"}}>
                                    <Controller
                                        name="userMail"
                                        control={control}
                                        defaultValue=""
                                        render={({field}) => <Input style={{width: "100%"}} {...field} />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <FormLabel>Role</FormLabel>
                            </Grid>
                            <Grid item style={{width: "60%"}}>
                                <Controller
                                    name="userRole"
                                    control={control}
                                    render={({field}) => <Select
                                        {...field}
                                        options={[
                                            {value: "1", label: "Player"},
                                            {value: "2", label: "Admin"}
                                        ]}
                                    />}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} justify={"center"}>
                            <Grid item>

                                <Button type={"submit"}>Submit</Button>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}
;
