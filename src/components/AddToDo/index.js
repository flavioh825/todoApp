import React, {Component} from 'react';
import { Body, Icon, CheckBox, ListItem, Input, Button } from 'native-base';

export default class AddToDo extends Component {

  state = {
    title: "",
    completed: false,
    createdAt: ""
  }

  setStateUtil = (property, value) => {
    this.setState({
      [property]: value
    });
  }

  render() {
    return(
      <ListItem>
        <CheckBox
          checked={this.state.completed} 
          onPress={ () => this.setStateUtil("completed", !this.state.completed) }/>
        <Body>
          <Input 
            placeholder="Qual é a sua próxima tarefa?"
            onChangeText={ (txt) => this.setStateUtil("title", txt) }
            onSubmitEditing={ () => this.props.onPress(this.state) }
          />
        </Body>
        <Button 
          transparent
          onPress={ () => this.props.onCancel(show=false) }
        ><Icon name="Trash" /></Button>
      </ListItem>
    );
  }
}