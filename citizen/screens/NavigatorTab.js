import React, {useState} from 'react';
import {Text} from "react-native";
import {Tab, TabView} from '@rneui/themed';

const NavigatorTab = () => {
  const [index, setIndex] = useState(0);

  const TabItem = (title, id, icon, type) => {
    return (
      <Tab.Item
        // title={title}
        containerStyle={{
          backgroundColor: index === id ? "#228693" : "white", height: 50, display: 'flex', justifyContent: 'center'
        }}
        titleStyle={{fontSize: 12, color: index === id ? 'white' : "#228693"}}
        icon={{name: icon, size: 25, type: type, color: index === id ? 'white' : "#228693"}}
      />
    );
  }

  return (
    <>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{backgroundColor: 'red', width: '100%'}}>
          <Text>Home</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
          <Text>Area Map</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'blue', width: '100%'}}>
          <Text>Complaints</Text>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'green', width: '100%'}}>
          <Text>My Profile</Text>
        </TabView.Item>
      </TabView>
      <Tab value={index} onChange={(e) => setIndex(e)}>
        {TabItem('Home', 0, 'home', 'feather')}
        {TabItem('Map', 1, 'location-on', 'materialicon')}
        {TabItem('Complaints', 2, 'error', 'materialicon')}
        {TabItem('Profile', 3, 'user', 'feather')}
      </Tab>
    </>
  );
}

export default NavigatorTab;
