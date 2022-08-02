import React, {useState, useContext} from 'react';
import {Tab, TabView} from '@rneui/themed';

import Welcome from "./Welcome";
import AreaMap from "./AreaMap";
import Complaints from "./Complaints";
import MyProfile from "./MyProfile";
import Header from "../components/Header";

import {AuthContext} from "../context/AuthContext";

const NavigatorTab = () => {
  const [index, setIndex] = useState(0);

  const {loggedUser} = useContext(AuthContext);

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
      <Header email={loggedUser.email}/>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          {/*<Welcome/>*/}
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          {/*<AreaMap/>*/}
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          {/*<Complaints/>*/}
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          {/*<MyProfile/>*/}
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
