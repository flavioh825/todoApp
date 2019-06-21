import React, { Component } from 'react';
import { Container, Fab, Icon } from 'native-base';

export default class AddToDoButton extends Component {
  render() {
    return(
      <Container>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.onAddNewToDo(show = true) }
        ><Icon name="add" /></Fab>
      </Container>
    );
  }
}