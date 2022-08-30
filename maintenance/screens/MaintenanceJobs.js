import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const tabs = [
  {id: 0, label: 'All'},
  {id: 1, label: 'Assigned'},
  {id: 2, label: 'Ongoing'},
  {id: 3, label: 'Completed'},
];

const MaintenanceJobs = () => {
  const [viewedTab, setViewedTab] = useState(0);

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
          {viewedTab === 0 && <View style={styles.maintenance.two.screens.screen}><Text>0</Text></View>}
          {viewedTab === 1 && <View style={styles.maintenance.two.screens.screen}><Text>1</Text></View>}
          {viewedTab === 2 && <View style={styles.maintenance.two.screens.screen}><Text>2</Text></View>}
          {viewedTab === 3 && <View style={styles.maintenance.two.screens.screen}><Text>3</Text></View>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maintenance: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    one: {
      borderWidth: 2,
      borderColor: 'orange',
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
      borderWidth: 2,
      borderColor: 'orange',
      flex: 11,
      width: '100%',
      nav: {
        borderWidth: 2,
        borderColor: 'blue',
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
            borderBottomColor: 'green',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
          },
          txt2: {
            color: '#042434',
            fontSize: 16,
            borderBottomWidth: 2,
            borderBottomColor: 'red',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
          },
        },
      },
      screens: {
        borderWidth: 2,
        borderColor: 'blue',
        flex: 15,
        screen: {

        },
      },
    },
  },
});

export default MaintenanceJobs;
