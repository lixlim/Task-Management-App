import React from 'react';
import {
  Text,
  View
} from 'react-native';
import CardComponent from "./CardComponent";
let data = [
    {
      "title": "Move to Location 1",
      "description": "Place the item at location 1 by 5pm",
      "status" : "Completed"
    },
    {
        "title": "Move to Location 2",
        "description": "Place the item at location 2 by 5pm",
        "status" : "Completed"
    },
    {
        "title": "Move to Location 1",
        "description": "Place the item at location 1 by 3pm",
        "status" : "Completed"
    },
    {
        "title": "Move to Location 3",
        "description": "Place the item at location 3 by 3pm",
        "status" : "Completed"
    },
]
export default function CompletedPage({navigation}) {
  return ( 
    <CardComponent navigation={navigation} data={data}/>


  );
}

