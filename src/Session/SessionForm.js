import React from 'react'
import { Button, Divider, Form, Grid, Segment, Header } from 'semantic-ui-react'

const DividerExampleVerticalForm = () => (
  <Segment placeholder style={{height:'800px'}}>
    <Grid columns={2} relaxed='very' stackable>
        <Grid.Column style={{padding:'auto auto'}} > 
            <Header as='h1' textAlign='center'>Login</Header><br/>
            <Form>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    placeholder='Password'
                    type='password'
                />
                <Button content='Login' primary />
            </Form>
        </Grid.Column>

        <Grid.Column verticalAlign='middle' style={{padding:'auto auto'}} >
            <Header as='h1'textAlign='center'>Register</Header><br/>
            <Form>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    placeholder='Username'
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    placeholder='Password'
                    type='password'
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Confirm Password'
                    placeholder='Confirm Password'
                    type='password'
                />
                <Button content='Login' primary />
            </Form>
        </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)

export default DividerExampleVerticalForm
