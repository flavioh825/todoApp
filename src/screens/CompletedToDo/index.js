import React, {Component} from 'react';
import { Container, Header, Body, Title, Content, Text } from 'native-base';


export default class CompletedToDo extends Component {
  render() {
    return(
      <Container>
          <Header><Body><Title>Completed</Title></Body></Header>
          <Content><Text>Completed Section</Text></Content>
        </Container>
    );
  }
}