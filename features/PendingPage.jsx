import React from 'react';

import CardComponent from "./CardComponent";
import { connect } from "react-redux"
const PendingPage = ({navigation,pendingTask}) =>{
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