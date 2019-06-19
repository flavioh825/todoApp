import React, {Component} from 'react';
import { Container, Header, Body, Title, Content, Text } from 'native-base';

export default class AllToDo extends Component {
  render() {
    return(
      <Container>
          <Header><Body><Title>All</Title></Body></Header>
          <Content><Text>All Section</Text></Content>                
      </Container>
    );
  }
}