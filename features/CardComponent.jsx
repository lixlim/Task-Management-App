import React, { Component } from 'react';
import { Card,Container, CardItem, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    button: {
      left: 200,
      bottom:50
    },
    title:{
     fontSize: 19
    },
    status:{
      fontSize:14
    }

  });


export default function CardComponent(props) {

    const cardItems = props.data.map((data,index) => {
        return (
        <Card key={index}>
        <CardItem header>          
          <Text style={styles.title}>{data.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
          <Text>Status:</Text>

            <Text style={styles.status}>
            {data.status}            
            </Text>

            {data.status=="Pending"?
            <Button onPress={()=> {
              props.navigation.navigate('Details',
              {data: data})}
              } style = {styles.button} primary ><Text> Start </Text></Button>: null}

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


