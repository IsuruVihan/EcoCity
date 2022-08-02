import React from 'react';
import {Text, View, StyleSheet, Dimensions, LogBox} from "react-native";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory-native";
import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

LogBox.ignoreLogs([
  "Require cycle: node_modules/victory",
]);

const Complaints = () => {
  const PieChart = () => {
    return (
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
        <VictoryPie
          style={{labels: {fontSize: 10, fill: "white", fontWeight: 'bold',},}}
          labelRadius={Responsive(12, WIDTH)}
          width={Responsive(100, WIDTH)}
          height={Responsive(25, HEIGHT)}
          padding={10}
          radius={Responsive(20, WIDTH)}
          innerRadius={Responsive(5, WIDTH)}
          padAngle={5}
          categories={{ x: ["dogs", "cats", "mice"] }}
          colorScale={["#03989E", "#68ADCA", "#ABC2E4", "#075061", ]}
          responsive={true}
          data={[
            { x: '1', y: 1 },
            { x: '3', y: 3 },
            { x: '2', y: 2 },
            { x: '2', y: 2 },
          ]}
        />
      </View>
    );
  }

  const Card = (title, count) => {
    return (
      <View style={styles.complaints.statistics.section1.card}>
        <View style={styles.complaints.statistics.section1.card.title}>
          <Text style={styles.complaints.statistics.section1.card.title.txt}>{title}</Text>
        </View>
        <View style={styles.complaints.statistics.section1.card.count}>
          <Text style={styles.complaints.statistics.section1.card.count.txt}>{count}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.complaints}>
      <View style={styles.complaints.title}>
        <Text style={styles.complaints.title.txt}>Complaints</Text>
      </View>
      <View style={styles.complaints.statistics}>
        <View style={styles.complaints.statistics.section1}>
          {Card('Viewed', '1')}
          {Card('Not Viewed', '6')}
          {Card('Resolved', '3')}
          {Card('Removed', '2')}
        </View>
        <View style={styles.complaints.statistics.section2}>
          {PieChart()}
        </View>
      </View>
      <View style={styles.complaints.table}>
        <Text>Table</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  complaints: {
    // borderColor: 'red',
    // borderWidth: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#F7F7F7',
    title: {
      // borderColor: 'blue',
      // borderWidth: 2,
      paddingLeft: 10,
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      txt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#042434',
        // marginLeft: 5,
      },
    },
    statistics: {
      // borderColor: 'green',
      // borderWidth: 2,
      paddingVertical: 5,
      paddingLeft: 20,
      flex: 4,
      display: 'flex',
      flexDirection: 'row',
      section1: {
        // borderColor: 'black',
        // borderWidth: 2,
        flex: 5,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        card: {
          borderColor: '#BFDDDE',
          borderWidth: 1,
          backgroundColor: '#EDFBFC',
          borderRadius: 5,
          width: Responsive(18.5, WIDTH),
          height: Responsive(12, HEIGHT),
          display: 'flex',
          title: {
            // borderColor: 'blue',
            // borderWidth: 2,
            flex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            txt: {
              fontSize: 12,
              color: '#042434',
            },
          },
          count: {
            // borderColor: 'blue',
            // borderWidth: 2,
            flex: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            txt: {
              color: '#042434',
              fontWeight: '900',
              fontSize: 35,
            },
          },
        },
      },
      section2: {
        // borderColor: 'black',
        // borderWidth: 2,
        flex: 7,
      },
    },
    table: {
      padding: 5,
      borderColor: 'orange',
      borderWidth: 2,
      flex: 8,
    },
  },
});

export default Complaints;
