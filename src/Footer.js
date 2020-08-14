import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted vertical style={{padding: '1em 0em' }}>
        <Container textAlign='center'>
            <Segment basic>
                <Header as='h5' inverted>copyright &copy; 2020 by sstevensetiawan</Header>
            </Segment>
        </Container>
    </Segment>
)

export default Footer
