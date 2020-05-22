import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text } from 'native-base';
import CompletedPage from './CompletedPage';
import PendingPage from './PendingPage';
function TabComponent() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Pending</Text></TabHeading>}>
            <PendingPage />
          </Tab>
          <Tab heading={ <TabHeading><Text>Done</Text></TabHeading>}>
            <CompletedPage />
        
          </Tab>
        </Tabs>
      </Container>
    );
}

export default TabComponent