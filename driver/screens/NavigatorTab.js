import React, {useState, useContext} from 'react';
import {Tab, TabView} from '@rneui/themed';

import Welcome from "./Welcome";
import AreaMap from "./AreaMap";
import GarbageCollectionRides from "./GarbageCollectionRides";
import MyProfile from "./MyProfile";
import Header from "../components/Header";

import {AuthContext} from "../context/AuthContext";

const NavigatorTab = () => {
  const [index, setIndex] = useState(0);

  const {loggedUser} = useContext(AuthContext);

  const TabItem = (title, id, icon, type) => {
    return (
      <Tab.Item
        title={title}
        containerStyle={{
          backgroundColor: "white",
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          borderTopWidth: 2,
          borderTopColor: id === index ? '#228693' : 'white',
        }}
        titleStyle={{fontSize: 9, color: "#228693"}}
        icon={{name: icon, size: 25, type: type, color: "#228693"}}
      />
    );
  }

  return (
    <>
      <Header email={loggedUser.email}/>
      <TabView value={index} onChange={setIndex} disableSwipe={true}>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <Welcome/>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <AreaMap/>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <GarbageCollectionRides/>
        </TabView.Item>
        <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
          <MyProfile/>
        </TabView.Item>
      </TabView>
      <Tab value={index} onChange={(e) => setIndex(e)} indicatorStyle={{backgroundColor: 'white', height: 3,}}>
        {TabItem('Home', 0, 'home', 'feather')}
        {TabItem('Map', 1, 'location-on', 'materialicon')}
        {TabItem('GCR', 2, 'truck', 'feather')}
        {TabItem('Profile', 3, 'user', 'feather')}
      </Tab>
    </>
  );
}

export default NavigatorTab;
