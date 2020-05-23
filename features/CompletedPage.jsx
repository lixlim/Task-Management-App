import React from 'react';
import { connect } from "react-redux"

import CardComponent from "./CardComponent";

const CompletedPage = ({navigation,completedTask})  =>{
  return ( 
    <CardComponent navigation={navigation} data={completedTask}/>


  );
}

const mapStateToProps = state => {
  return {
    completedTask : state.completedTask
  }
}

export default connect(mapStateToProps)(CompletedPage);