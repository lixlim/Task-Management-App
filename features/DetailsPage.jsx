import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from "react-redux"
import { updateTask } from "../redux";
 
import { Card,Container, CardItem, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
const styles = StyleSheet.create({
    title:{
     fontSize: 22,
     fontWeight: "bold"
    },
    descriptionHeader:{
      fontSize: 17,
      bottom:10,
      fontWeight: "bold"

    },
    description:{
      bottom:7
    },
    statusHeader:{
      fontWeight: "bold",
     

    },
    // status:{
    //   fontSize:14,

    // }

  });
const DetailsPage = ({updateTask,route,navigation}) => {
    const { data } = route.params;
  return ( 
    <View>
    <Card>
    <CardItem header>          
      <Text style={styles.title}>{data.title}</Text>
    </CardItem>
    <CardItem>
      <Body>
        <Text style={styles.descriptionHeader}>Description:</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.statusHeader}>Status:</Text>
        <Text style={styles.status}>
            {data.status}            
        </Text>

    
      </Body>
    </CardItem>
    </Card>
     {data.status=="Pending"?
     <Button block onPress={()=> {
       updateTask(data)
       navigation.navigate('Home')

     }} style = {styles.button} primary ><Text> Complete </Text></Button>: null}
    </View>
  );
}




const mapDispatchToProps = dispatch => {
  return {
    updateTask: (data) => {
      dispatch(updateTask(data))
  }
}}

export default connect(null,mapDispatchToProps)(DetailsPage);
