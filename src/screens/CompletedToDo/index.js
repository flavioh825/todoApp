import React, {Component} from 'react';
import { Container, Header, Body, Title, Content, Text } from 'native-base';


export default class CompletedToDo extends Component {
  render() {
    return(
      <Container>
          <Header>
            <Body>
              <Title>Concluídas</Title>
            </Body>
          </Header>
          <Content>
            <Text>Tarefas Concluídas</Text>
          </Content>
        </Container>
    );
  }
}