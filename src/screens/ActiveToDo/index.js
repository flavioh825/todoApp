import React, {Component} from 'react';
import { Container, Header, Body, Title, Content, Text } from 'native-base';


export default class ActiveToDo extends Component {
  render() {
    return(
      <Container>
        <Header>
          <Body>
            <Title>Ativas</Title>
          </Body>
        </Header>
        <Content>
          <Text>Tarefas ativas</Text>
        </Content>    
      </Container>
    );
  }
}