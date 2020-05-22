import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabComponent from "./Tabs";

export default function App() {
  return ( 
    <TabComponent/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});