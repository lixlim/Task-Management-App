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
      "status" : "Pending"
    },
    {
        "title": "Move to Location 2",
        "status" : "Pending"
    },
    {
        "title": "Move to Location 1",
        "status" : "Pending"
    },
    {
        "title": "Move to Location 3",
        "status" : "Pending"
    },
    {
        "title": "Move to Location 2",
        "status" : "Pending"
    },
    {
        "title": "Move to Location 1",
        "status" : "Pending"
    },
    {
        "title": "Move to Location 3",
        "status" : "Pending"
    }
]
export default function PendingPage() {

    const [state,setState] = React.useState([]);

  return ( 
    <CardComponent data={data}/>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });