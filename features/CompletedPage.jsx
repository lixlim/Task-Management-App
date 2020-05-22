import React from 'react';
import {
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
export default function CompletedPage() {
  return ( 
    <CardComponent data={data}/>


  );
}

