import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text } from 'native-base';
import CompletedPage from './CompletedPage';
import PendingPage from './PendingPage';
function TabComponent({navigation}) {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Pending</Text></TabHeading>}>
            <PendingPage navigation={navigation} />
          </Tab>
          <Tab heading={ <TabHeading><Text>Done</Text></TabHeading>}>
            <CompletedPage navigation={navigation} />
        
          </Tab>
        </Tabs>
      </Container>
    );
}

export default TabComponent