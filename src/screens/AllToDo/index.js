import React, {Component} from 'react';
import { Container, Header, Body, Title, Content, Text } from 'native-base';
import AddToDoButton from '../../components/AddToDo/AddToDoButton';
import AddToDo from '../../components/AddToDo';

export default class AllToDo extends Component {

  state = {
    new_todo: false
  }

  saveToDoData = (todo) => {
    this.addNewToDo(false);
    console.log("Todo is: " + todo.title + " " + (todo.completed ? "completed" : "not completed!"));
  }

  addNewToDo = (show) => {
    this.setState({
      new_todo: show
    });
  }

  render() {
    return(
      <Container>
        <Header>
          <Body>
            <Title>Tarefas</Title>
          </Body>
        </Header>
        <Content>
          {this.state.new_todo &&
            <AddToDo 
              onPress={this.saveToDoData}
              onCancel={this.addNewToDo}
            /> }
        </Content>
        <AddToDoButton onAddNewToDo={this.addNewToDo} />
      </Container>
    );
  }
}