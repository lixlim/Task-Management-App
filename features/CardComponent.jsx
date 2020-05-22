import React, { Component } from 'react';
import { Header,Card,Container, CardItem, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default function CardComponent(props) {

    const cardItems = props.data.map((data) => {
        console.log("Test")
    }
    )
    return (
        <Container>
        <Content>
            <Card>
            <CardItem header>
              <Text>hellotssttt</Text>
            </CardItem>
            {/* details */}
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            {/* status */}
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
          
        </Content>

      </Container>
    );
  }
