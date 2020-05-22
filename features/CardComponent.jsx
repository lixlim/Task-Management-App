import React, { Component } from 'react';
import { Header,Card,Container, CardItem, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default function CardComponent(props) {

    const cardItems = props.data.map((data,index) => {
        return (
        <Card key={index}>
        <CardItem header>
          <Text>{data.title}</Text>
        </CardItem>
        {/* details */}
        <CardItem>
          <Body>
            <Text>
                {data.status}            
            </Text>
          </Body>
        </CardItem>
     </Card>
        )
    }
    )
    return (
        <Container>
        <Content>
           {cardItems}
          
        </Content>

      </Container>
    );
  }
