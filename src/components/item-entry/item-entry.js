import React from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react"


const replacementsOptions = [
    { key: 'y', text: 'Yes', value: 'y' },
    { key: 'n', text: 'No', value: 'n' }
  ]
export const ItemEntry = () => {
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-equipment-type'
                    control={Input}
                    label='Equipment Type'
                    placeholder=''
                />
                <Form.Field
                    id='form-input-control-mod'
                    control={Input}
                    label='Month and Year'
                    placeholder=''
                />
                   <Form.Field
                    id='form-input-control-model'
                    control={Input}
                    label='Model'
                    placeholder='Model'
                />
                <Form.Field
                    id='form-input-control-brand'
                    control={Input}
                    label='brand'
                    placeholder='brand'
                />
                   <Form.Field
                    id='form-input-control-serial-number'
                    control={Input}
                    label='Serial Number'
                    placeholder='Serial Number'
                />
                <Form.Field
                    id='form-input-control-town'
                    control={Input}
                    label='town'
                    placeholder='Town'
                />
                <Form.Field
                    control={Select}
                    options={replacementsOptions}
                    label={{ children: 'Replacement', htmlFor: 'form-select-control-replacement' }}
                    placeholder='Y/N'
                    search
                    searchInput={{ id: 'form-select-control-replacement' }}
                />
            </Form.Group>
            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Comments'
                placeholder='Comments/'
            />
            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='joe@schmoe.com'
                error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                }}
            />
            <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Label with htmlFor'
            />
        </Form>

    )
}