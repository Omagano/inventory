import React from "react";
import { Button, Checkbox, Form, Grid, Icon } from 'semantic-ui-react';

export const Auth = () => {
    const auth = () => {
        fetch("http://localhost:4000/auth", {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ username: "", password : ""})
        }).then(response => {
            return response;
        }).then(response => {
            console.log("Login Response", response);

        }).catch(error => {
            console.log("Login Err", error);

        })
    };

    return (
        <Grid style={styles.parentGrid} centered columns={4} verticalAlign="middle">
            <Grid.Column>
                <Form >
                    <Form.Field className="loginIcon" >
                        <Icon styles={styles.iconStyle} disabled name='user' size='huge' />
                    </Form.Field>
                    <Form.Field>
                        <input  placeholder='username' value={this.value.username}/>
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='password' value={this.value.password} />
                    </Form.Field >
                    <Button className="submitIcon" type='submit' onClick={auth}>Submit </Button>
                </Form>
            </Grid.Column>
        </Grid>

    );



}
const styles = {
    parentGrid: {
        marginTop: "150px",
        textAlign: "center"
    },
    iconStyle: {
        textAlign: "center"

    }
}
