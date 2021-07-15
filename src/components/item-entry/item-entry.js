import React from "react";
import { Container, Header, Form } from "semantic-ui-react"


const equipments = [
    { key: 'pc', text: 'Personal Computer', value: 'pc' },
    { key: 'sm', text: 'Screen / Monitor', value: 'sm' },
    { key: 'kb', text: 'Keyboard', value: 'kb' },
    { key: 'Mouse', text: 'Mouse', value: 'mouse' },
    { key: 'tablet', text: 'Tablet', value: 'Printer' },
    { key: 'printer', text: 'Printer', value: 'Printer' }
]
export const ItemEntry = () => {
    return (
        <Container>
            <Header as='h2' textAlign='center'>ICT Unique Repair Form</Header>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Username' placeholder='Username' />
                    <Form.Input fluid label='Directorate' placeholder='Directorate' />
                    <Form.Input fluid label='Division' placeholder='Division' />
                    <Form.Input fluid label='Room/Town' placeholder='Room/Town' />
                    <Form.Input fluid label='Telephone' placeholder='Tel' />
                    <Form.Input fluid label='Date in' placeholder='Date In' />
                    <Form.Input fluid label='Time in' placeholder='Time in' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        label='Equipment Description'
                        options={equipments}
                        placeholder='Monitor'
                    />
                    <Form.Input fluid label='Name' placeholder='Name' />
                    <Form.Input fluid label='Serial Number' placeholder='Serial Number' />
                </Form.Group>
                <Form.TextArea label='Problem Description' />
                <Container>
                    <Form.Group grouped>
                        <Form.Group >
                            <Form.Input fluid label='Delivered By' placeholder='Deliverer' />
                            <Form.Input fluid label='Signature' placeholder='Deliverer' />
                            <Form.Group >
                                <Form.Input fluid label='Recieved By' placeholder='Receiver' />
                                <Form.Input fluid label='Signature' placeholder='Receiver' />
                            </Form.Group>
                        </Form.Group>
                    </Form.Group>

                </Container>
            </Form>

        </Container>
    )
}

