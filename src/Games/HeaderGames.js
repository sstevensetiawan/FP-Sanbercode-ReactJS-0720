import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default class HeaderGames extends Component {
  render() {
    return (
      <div>
        <br/>
        <Header as='h2' icon textAlign='center'>
        <Icon name='gamepad' circular />
        <Header.Content>Games</Header.Content>
        </Header>
        <br/>
      </div>
    )
  }
}
