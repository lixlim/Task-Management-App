import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CardComponent from "./CardComponent";

let data = [
    {
      "title": "Move to Location 1",
      "description": "Place the item at location 1 by 5pm",
      "status" : "Pending"
    },
    {
        "title": "Move to Location 2",
        "description": "Place the item at location 2 by 5pm",
        "status" : "Pending"
    },
    {
        "title": "Move to Location 1",
        "description": "Place the item at location 1 by 4pm",
        "status" : "Pending"
    },
    {
        "title": "Move to Location 3",
        "description": "Place the item at location 3 by 3pm",
        "status" : "Pending"
    },

]
export default function PendingPage({navigation}) {

    const [state,setState] = React.useState([]);

  return ( 
    <CardComponent navigation={navigation} data={data}/>

  );
}

