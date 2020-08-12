import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default class HeaderMovie extends Component {
  render() {
    return (
      <div>
        <br/>
        <Header as='h2' icon textAlign='center'>
        <Icon name='film' circular />
        <Header.Content>Movies</Header.Content>
        </Header>
        <br/>
      </div>
    )
  }
}
