import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

import AllScreen from "./AllScreen";
import AssignedScreen from "./AssignedScreen";
import OngoingScreen from "./OngoingScreen";
import CompletedScreen from "./CompletedScreen";

import {getGCRJobDetails} from "../../api/garbageCollectionRides";
import {AuthContext} from "../../context/AuthContext";

const tabs = [
  {id: 0, label: 'All'},
  {id: 1, label: 'Assigned'},
  {id: 2, label: 'Ongoing'},
  {id: 3, label: 'Completed'},
];

const GarbageCollectionRides = () => {
  const {loggedUser} = useContext(AuthContext);

  const [viewedTab, setViewedTab] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    getGCRData();
  });

  const getGCRData = () => {
    getGCRJobDetails(loggedUser)
      .then((gcrData) => {
        // console.log(gcrData);
      });
  }

  return (
    <View style={styles.maintenance}>
      <View style={styles.maintenance.one}>
        <Text style={styles.maintenance.one.txt}>Garbage Collection Rides</Text>
      </View>
      <View style={styles.maintenance.two}>
        <View style={styles.maintenance.two.nav}>
          {tabs.map((tab) => {
            return <TouchableOpacity key={tab.id} style={styles.maintenance.two.nav.pageLink}>
              <Text style={viewedTab === tab.id ? styles.maintenance.two.nav.pageLink.txt2 :
                styles.maintenance.two.nav.pageLink.txt
              } onPress={() => setViewedTab(tab.id)}>{tab.label}</Text>
            </TouchableOpacity>
          })}
        </View>
        <View style={styles.maintenance.two.screens}>
          <View style={styles.maintenance.two.screens.screen}>
            {viewedTab === 0 && <AllScreen/>}
            {viewedTab === 1 && <AssignedScreen/>}
            {viewedTab === 2 && <OngoingScreen/>}
            {viewedTab === 3 && <CompletedScreen/>}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maintenance: {
    backgroundColor: 'white',
    // backgroundColor: 'red',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    one: {
      // borderWidth: 2,
      // borderColor: 'orange',
      flex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      txt: {
        color: '#042434',
        fontSize: 25,
        fontWeight: '600',
      },
    },
    two: {
      // borderWidth: 2,
      // borderColor: 'orange',
      flex: 11,
      width: '100%',
      nav: {
        // borderWidth: 2,
        // borderColor: 'blue',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        pageLink: {
          // borderWidth: 2,
          // borderColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          txt: {
            color: '#042434',
            fontSize: 16,
            borderBottomWidth: 2,
            borderBottomColor: '#EDFBFC',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
          },
          txt2: {
            color: '#042434',
            fontSize: 16,
            borderBottomWidth: 2,
            borderBottomColor: '#228693',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
          },
        },
      },
      screens: {
        // borderWidth: 2,
        // borderColor: 'blue',
        flex: 15,
        paddingVertical: 5,
        screen: {

          screen2: {
            height: '100%',
            // borderWidth: 2,
            // borderColor: 'red',
          },
        },
      },
    },
  },
});

export default GarbageCollectionRides;
