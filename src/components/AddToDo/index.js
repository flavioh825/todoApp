import React, {Component} from 'react';
import { Body, Icon, CheckBox, ListItem, Input, Button } from 'native-base';

export default class AddToDo extends Component {
  render() {
    const completed = false;
    return(
      <ListItem>
        <CheckBox
          checked={completed} 
          onPress={ () => console.log("set todo as completed") }/>
        <Body>
          <Input 
            placeholder="Qual é a sua próxima tarefa?"
            onChangeText={ (txt) => console.log(txt) }
            onSubmitEditing={ () => console.log("text submited") }
          />
        </Body>
        <Button 
          transparent
          onPress={ () => console.log("put todo in trash") }
        ><Icon name="Trash" /></Button>
      </ListItem>
    );
  }
}