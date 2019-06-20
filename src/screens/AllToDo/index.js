import React, {Component} from 'react';
import { Container, Header, Body, Title, Content, Text } from 'native-base';
import AddToDoButton from '../../components/AddToDo/AddToDoButton';
import AddToDo from '../../components/AddToDo';

export default class AllToDo extends Component {
  render() {
    return(
      <Container>
        <Header>
          <Body>
            <Title>Tarefas</Title>
          </Body>
        </Header>
        <Content>
          <AddToDo />
        </Content>
        <AddToDoButton />             
      </Container>
    );
  }
}