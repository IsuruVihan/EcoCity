import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions} from "react-native";

import MaintenanceAll from '../assets/images/maintenance-all.png';

import {Responsive} from "../helpers/Responsive";

const tabs = [
  {id: 0, label: 'All'},
  {id: 1, label: 'Assigned'},
  {id: 2, label: 'Ongoing'},
  {id: 3, label: 'Completed'},
];
const HEIGHT = Dimensions.get('window').height;

const MaintenanceJobs = () => {
  const [viewedTab, setViewedTab] = useState(0);

  const AllScreen = () => {
    return (
      <View style={styles.maintenance.two.screens.screen.screen1}>
        <View style={styles.maintenance.two.screens.screen.screen1.totalContainer}>
          <Text style={styles.maintenance.two.screens.screen.screen1.totalContainer.txt}>Total 6 jobs</Text>
        </View>
        <View style={styles.maintenance.two.screens.screen.screen1.imgContainer}>
          <Image style={styles.maintenance.two.screens.screen.screen1.imgContainer.img} source={MaintenanceAll}/>
        </View>
        <View style={styles.maintenance.two.screens.screen.screen1.filterContainer}></View>
        <View style={styles.maintenance.two.screens.screen.screen1.listContainer}></View>
        <View style={styles.maintenance.two.screens.screen.screen1.paginationContainer}></View>
      </View>
    );
  }

  const AssignedScreen = () => {
    return (
      <View style={styles.maintenance.two.screens.screen.screen1}>
        <Text>Assigned</Text>
      </View>
    );
  }

  const OngoingScreen = () => {
    return (
      <View style={styles.maintenance.two.screens.screen.screen2}>
        <Text>Ongoing</Text>
      </View>
    );
  }

  const CompletedScreen = () => {
    return (
      <View style={styles.maintenance.two.screens.screen.screen1}>
        <Text>Completed</Text>
      </View>
    );
  }

  return (
    <View style={styles.maintenance}>
      <View style={styles.maintenance.one}>
        <Text style={styles.maintenance.one.txt}>Maintenance Jobs</Text>
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
            {viewedTab === 0 && AllScreen()}
            {viewedTab === 1 && AssignedScreen()}
            {viewedTab === 2 && OngoingScreen()}
            {viewedTab === 3 && CompletedScreen()}
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
          screen1: {
            height: '100%',
            borderWidth: 2,
            borderColor: 'red',
            display: 'flex',
            totalContainer: {
              borderWidth: 2,
              borderColor: 'green',
              flex: 0.5,
              display: 'flex',
              justifyContent: 'center',
              txt: {
                color: '#707070',
              },
            },
            imgContainer: {
              borderWidth: 2,
              borderColor: 'green',
              flex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              img: {
                height: Responsive(17, HEIGHT),
                width: Responsive(17, HEIGHT),
              },
            },
            filterContainer: {
              borderWidth: 2,
              borderColor: 'green',
              flex: 0.5,
            },
            listContainer: {
              borderWidth: 2,
              borderColor: 'green',
              flex: 7,
            },
            paginationContainer: {
              borderWidth: 2,
              borderColor: 'green',
              flex: 1,
            },
          },
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

export default MaintenanceJobs;
