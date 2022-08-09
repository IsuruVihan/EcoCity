import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, LogBox, Image, TouchableOpacity} from "react-native";
import {VictoryPie} from "victory-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import {Dialog} from '@rneui/themed';

import FilterImg from '../assets/images/filter.png';
import CreateImg from '../assets/images/create.png';

import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

LogBox.ignoreLogs([
  "Require cycle: node_modules/victory",
]);

const Complaints = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [viewedFilter, setViewedFilter] = useState(true);
  const [notViewedFilter, setNotViewedFilter] = useState(true);
  const [resolvedFilter, setResolvedFilter] = useState(true);
  const [removedFilter, setRemovedFilter] = useState(true);
  const [fromDateFilter, setFromDateFilter] = useState(null);
  const [toDateFilter, setToDateFilter] = useState(null);

  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(0);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([
    {id: 'CMB-07-123', date: '23/06/2022', status: 'Viewed'},
    {id: 'CMB-07-124', date: '24/06/2022', status: 'Not Viewed'},
    {id: 'CMB-07-125', date: '25/06/2022', status: 'Resolved'},
    {id: 'CMB-07-126', date: '26/06/2022', status: 'Removed'},
    {id: 'CMB-07-127', date: '27/06/2022', status: 'Viewed'},
    {id: 'CMB-07-128', date: '28/06/2022', status: 'Viewed'},
    {id: 'CMB-07-123', date: '23/06/2022', status: 'Viewed'},
    {id: 'CMB-07-124', date: '24/06/2022', status: 'Not Viewed'},
    {id: 'CMB-07-125', date: '25/06/2022', status: 'Resolved'},
    {id: 'CMB-07-126', date: '26/06/2022', status: 'Removed'},
    {id: 'CMB-07-127', date: '27/06/2022', status: 'Viewed'},
    {id: 'CMB-07-128', date: '28/06/2022', status: 'Viewed'},
    {id: 'CMB-07-123', date: '23/06/2022', status: 'Viewed'},
    {id: 'CMB-07-124', date: '24/06/2022', status: 'Not Viewed'},
    {id: 'CMB-07-125', date: '25/06/2022', status: 'Resolved'},
    {id: 'CMB-07-126', date: '26/06/2022', status: 'Removed'},
    {id: 'CMB-07-127', date: '27/06/2022', status: 'Viewed'},
    {id: 'CMB-07-128', date: '28/06/2022', status: 'Viewed'},
  ]);
  const [paginatedData, setPaginatedData] = useState([]);

  // useEffect(() => {
  //   // TODO: Get data
  //   console.log('GET DATA');
  // }, []);

  // useEffect(() => {
  //   // TODO: Apply filters and push eligible complaints into filtered data
  //   console.log('FILTER DATA');
  // }, [data]);

  useEffect(() => {
    // TODO: Divide filtered data into pages
    const pc = Math.ceil(filteredData.length / 5);
    setPageCount(pc);
    setActivePage(pc > 0 ? 1 : 0);
    let ind = 1;
    const tempPaginatedData = [];
    outer:
      for (let i = 1; i <= pc; i++) { // Page
        for (let j = 1; j <= 5; j++) { // Index
          if (ind > filteredData.length)
            break outer;
          tempPaginatedData.push({
            page: i,
            index: ind,
            id: filteredData[ind - 1].id,
            date: filteredData[ind - 1].date,
            status: filteredData[ind - 1].status
          });
          ind++;
        }
      }
    setPaginatedData(tempPaginatedData);
  }, [filteredData]);

  const TableRow = (index, id, date, status) => {
    return (
      <View key={index} style={styles.complaints.table.content.row}>
        <Text style={styles.complaints.table.content.row.index}>{index}</Text>
        <Text style={styles.complaints.table.content.row.id}>{id}</Text>
        <Text style={styles.complaints.table.content.row.date}>{date}</Text>
        <Text style={
          status === 'Viewed' ? styles.complaints.table.content.row.status.viewed :
            status === 'Not Viewed' ? styles.complaints.table.content.row.status.notViewed :
              status === 'Resolved' ? styles.complaints.table.content.row.status.resolved :
                styles.complaints.table.content.row.status.removed
        }>{status}</Text>
      </View>
    );
  }

  const PieChart = () => {
    return (
      <VictoryPie
        style={{labels: {fontSize: 10, fill: "white", fontWeight: 'bold',},}}
        labelRadius={Responsive(12, WIDTH)}
        width={Responsive(100, WIDTH)}
        height={Responsive(25, HEIGHT)}
        padding={10}
        radius={Responsive(20, WIDTH)}
        innerRadius={Responsive(5, WIDTH)}
        padAngle={5}
        categories={{x: ["dogs", "cats", "mice"]}}
        colorScale={["#03989E", "#68ADCA", "#ABC2E4", "#075061",]}
        responsive={true}
        data={[
          {x: '1', y: 1},
          {x: '3', y: 3},
          {x: '2', y: 2},
          {x: '2', y: 2},
        ]}
      />
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

  const Filter = () => {
    return (
      <Dialog
        isVisible={filterVisible}
        onBackdropPress={() => setFilterVisible(false)}
      >
        <Text>Complaints Filter</Text>
      </Dialog>
    );
  }

  return (
    <View style={styles.complaints}>
      {Filter()}
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
        <View style={styles.complaints.table.title}>
          <Text style={styles.complaints.table.title.txt}>My Complaints</Text>
          <TouchableOpacity style={styles.complaints.table.title.filter} onPress={() => setFilterVisible(true)}>
            <Text style={styles.complaints.table.title.filter.txt}>Filter</Text>
            <Image source={FilterImg} style={styles.complaints.table.title.filter.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.complaints.table.content}>
          {paginatedData.map((complaint) => {
            if (complaint.page === activePage)
              return TableRow(complaint.index, complaint.id, complaint.date, complaint.status);
          })}
        </View>
        <View style={styles.complaints.table.last}>
          <View style={styles.complaints.table.last.buttonContainer}>
            <TouchableOpacity style={styles.complaints.table.last.buttonContainer.btn}>
              <Image source={CreateImg} style={styles.complaints.table.last.buttonContainer.btn.icon}/>
              <Text style={styles.complaints.table.last.buttonContainer.btn.txt}>New Complaint</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.complaints.table.last.paginationContainer}>
            <IconFontAwesome
              name="arrow-left"
              size={15}
              color={activePage === 1 ? "#BFDDDE" : "#228693"}
              onPress={() => setActivePage(activePage === 1 ? activePage : activePage - 1)}
            />
            <Text style={styles.complaints.table.last.paginationContainer.pageNo}>{activePage}</Text>
            <IconFontAwesome
              name="arrow-right"
              size={15}
              color={activePage < pageCount ? "#228693" : "#BFDDDE"}
              onPress={() => setActivePage(activePage === pageCount ? activePage : activePage + 1)}
            />
          </View>
        </View>
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
          // borderColor: '#BFDDDE',
          // borderWidth: 1,
          backgroundColor: '#EDFBFC',
          borderRadius: 5,
          width: Responsive(18.5, WIDTH),
          height: Responsive(11, HEIGHT),
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 7,
      },
    },
    table: {
      // borderColor: 'red',
      // borderWidth: 2,
      padding: 5,
      flex: 8,
      paddingHorizontal: 23,
      // paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      title: {
        // borderColor: 'orange',
        // borderWidth: 2,
        marginTop: 15,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        txt: {
          color: '#042434',
          fontSize: 18,
          fontWeight: '600',
        },
        filter: {
          borderWidth: 1,
          borderColor: '#BFDDDE',
          borderRadius: 5,
          height: '100%',
          width: Responsive(23, WIDTH),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 3,
          paddingHorizontal: 10,
          txt: {
            color: '#042434',
          },
          icon: {
            width: 20,
            height: '100%',
          },
        },
      },
      content: {
        // borderColor: 'black',
        // borderWidth: 2,
        flex: 8.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        row: {
          borderBottomColor: '#EDFBFC',
          borderBottomWidth: 2,
          height: Responsive(6, HEIGHT),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          index: {
            // borderColor: 'green',
            // borderWidth: 2,
            flex: 1,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#707070',
          },
          id: {
            // borderColor: 'green',
            // borderWidth: 2,
            flex: 3,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#707070',
          },
          date: {
            // borderColor: 'green',
            // borderWidth: 2,
            flex: 3,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#707070',
          },
          status: {
            viewed: {
              flex: 2,
              textAlignVertical: 'center',
              textAlign: 'center',
              // borderColor: 'blue',
              // borderWidth: 1,
              borderRadius: 5,
              color: '#008BD1',
              backgroundColor: '#E1F0FF',
              height: '75%',
            },
            notViewed: {
              flex: 2,
              textAlignVertical: 'center',
              textAlign: 'center',
              // borderColor: 'orange',
              // borderWidth: 1,
              borderRadius: 5,
              color: '#FF9900',
              backgroundColor: '#FFF6E9',
              height: '75%',
            },
            resolved: {
              flex: 2,
              textAlignVertical: 'center',
              textAlign: 'center',
              // borderColor: 'green',
              // borderWidth: 1,
              borderRadius: 5,
              color: '#00C186',
              backgroundColor: '#E0F8E3',
              height: '75%',
            },
            removed: {
              flex: 2,
              textAlignVertical: 'center',
              textAlign: 'center',
              // borderColor: 'red',
              // borderWidth: 1,
              borderRadius: 5,
              color: 'red',
              backgroundColor: 'pink',
              height: '75%',
            },
          },
        },
      },
      last: {
        // borderColor: 'black',
        // borderWidth: 2,
        flex: 1.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        buttonContainer: {
          // flex: 1,
          height: '80%',
          // borderColor: 'red',
          // borderWidth: 1,
          btn: {
            backgroundColor: '#228693',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 5,
            // paddingVertical: 3,
            paddingHorizontal: 10,
            height: '100%',
            icon: {
              // borderColor: 'blue',
              // borderWidth: 1,
              width: 16,
              height: 16,
            },
            txt: {
              // borderColor: 'blue',
              // borderWidth: 1,
              color: 'white',
              fontWeight: '700',
              fontSize: 12,
              marginLeft: 10,
            },
          },
        },
        paginationContainer: {
          // flex: 5,
          height: '80%',
          // borderColor: 'red',
          // borderWidth: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          pageNo: {
            marginHorizontal: 15,
            fontSize: 15,
            fontWeight: '700',
            color: '#7CB6B8',
            borderColor: '#7CB6B8',
            borderRadius: 5,
            borderWidth: 2,
            padding: 5,
            textAlign: 'center',
          },
        },
      },
    },
  },
});

export default Complaints;
