import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default class HeaderSession extends Component {
  render() {
    return (
      <div>
        <br/>
        <Header as='h2' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content>Users</Header.Content>
        </Header>
        <br/>
      </div>
    )
  }
}
