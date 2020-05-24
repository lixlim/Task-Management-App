import React from 'react';

import CardComponent from "./CardComponent";
import { connect } from "react-redux"
const PendingPage = ({navigation,pendingTask}) =>{
  console.log("pending", pendingTask)
  return ( 
    <CardComponent navigation={navigation} data={pendingTask}/>

  );
}

const mapStateToProps = state => {
  return {
    pendingTask : state.pendingTask
  }
}

export default connect(mapStateToProps)(PendingPage);