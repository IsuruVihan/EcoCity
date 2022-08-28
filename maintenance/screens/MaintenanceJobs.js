import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const MaintenanceJobs = () => {
  return (
    <View style={styles.maintenance}>
      <View style={styles.maintenance.one}>
        <Text style={styles.maintenance.one.txt}>Maintenance Jobs</Text>
      </View>
      <View style={styles.maintenance.two}></View>
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
    },
  },
});

export default MaintenanceJobs;
