import React from "react";
import { Button, Checkbox, Form, Grid, Icon } from 'semantic-ui-react';


  

export const Auth = () => {
        return (

        <Grid style={styles.parentGrid} centered columns={4} verticalAlign="middle">
            <Grid.Column>
                <Form>
                    <Form.Field className="loginIcon" >
                        <Icon styles={styles.iconStyle} disabled name='user' size='huge' />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='username' />
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='password' />
                    </Form.Field >
                    <Button className="submitIcon" type='submit'>Submit</Button>
                </Form>
            </Grid.Column>
        </Grid>

        )
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
