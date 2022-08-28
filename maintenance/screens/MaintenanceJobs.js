import React, {useState} from 'react';
import {Text, View, StyleSheet} from "react-native";
import {Tab, TabView} from "@rneui/themed";

const MaintenanceJobs = () => {
  const [index, setIndex] = useState(0);

  const TabItem = (title, id, width) => {
    return (
      <Tab.Item
        title={title}
        containerStyle={{
          backgroundColor: "white",
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          borderBottomWidth: 2,
          borderBottomColor: id === index ? '#228693' : '#EDFBFC',
          maxWidth: width,
        }}
        titleStyle={{fontSize: 12, color: "#042434", fontWeight: '300',}}
      />
    );
  }

  return (
    <View style={styles.maintenance}>
      <View style={styles.maintenance.one}>
        <Text style={styles.maintenance.one.txt}>Maintenance Jobs</Text>
      </View>
      <View style={styles.maintenance.two}>
        <Tab value={index} onChange={(e) => setIndex(e)} indicatorStyle={{backgroundColor: 'white', height: 0,}}>
          {TabItem('All', 0, '17.9%')}
          {TabItem('Assigned', 1, '28%')}
          {TabItem('Ongoing', 2, '27%')}
          {TabItem('Finished', 3, '27%')}
        </Tab>
        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={{backgroundColor: 'white', width: '100%', borderWidth: 2, borderColor: 'blue',}}>
            <Text>All</Text>
          </TabView.Item>
          <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
            <Text>Assigned</Text>
          </TabView.Item>
          <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
            <Text>Ongoing</Text>
          </TabView.Item>
          <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
            <Text>Finished</Text>
          </TabView.Item>
        </TabView>
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
    },
  },
});

export default MaintenanceJobs;
