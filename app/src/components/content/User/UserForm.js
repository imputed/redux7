import React from "react";
import Select from "react-select";
import {useForm, Controller} from "react-hook-form";
import {Button, FormLabel, Input} from "@material-ui/core";
import {Grid, Box} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {
    setName,
    setAge,
    setRole,
    toggleIsNew
} from '../../../redux/person/PersonSlice';
import {makeStyles} from "@material-ui/core/styles";
import httpService from "../../../services/httpService";

const svc = new httpService()

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
            dispatch(setName(data["firstName"] + " " + data["lastName"]))
            console.log(data["firstName"])
            dispatch(setAge(data["age"]))
            dispatch(setRole(data["role"].label))

            const usr = {name: data["firstName"] + " " + data["lastName"], age: data["age"], role: data["role"].label}
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
                                <FormLabel>First Name</FormLabel>
                            </Grid>
                            <Grid item style={{width: "60%"}}>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <Input style={{width: "100%"}} {...field}   />}
                                />

                            </Grid>

                        </Grid>
                        <Grid item>
                            <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                                <Grid item>
                                    <FormLabel>Last Name</FormLabel>
                                </Grid>
                                <Grid item style={{width: "60%"}}>
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        defaultValue=""
                                        render={({field}) => <Input style={{width: "100%"}} {...field} />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <FormLabel>Age</FormLabel>
                            </Grid>
                            <Grid item style={{width: "60%"}}>
                                <Controller
                                    name="age"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <Input type={"number"} style={{width: "100%"}} {...field} />}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <FormLabel>Role</FormLabel>
                            </Grid>
                            <Grid item style={{width: "60%"}}>
                                <Controller
                                    name="role"
                                    control={control}
                                    render={({field}) => <Select
                                        {...field}
                                        options={[
                                            {value: "1", label: "Worker"},
                                            {value: "2", label: "Developer"},
                                            {value: "3", label: "Admin"}
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
