import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import {Dialog} from "@rneui/themed";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-date-picker";
import {Button} from "@rneui/base";
import AntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import MaintenanceAssigned from "../../assets/images/maintenance-assigned.png";
import FilterImg from "../../assets/images/filter.png";

import {Responsive} from "../../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const AssignedScreen = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [fromDateFilterOpen, setFromDateFilterOpen] = useState(false);
  const [toDateFilterOpen, setToDateFilterOpen] = useState(false);
  const [fromDateFilter, setFromDateFilter] = useState(new Date('1999-08-18T04:48:09.000Z'));
  const [toDateFilter, setToDateFilter] = useState(new Date());

  const [viewedJob, setViewedJob] = useState(null);
  const [viewedJobModalOpen, setViewedJobModalOpen] = useState(false);

  const [data, setData] = useState([
    {
      id: 'CMB-07-124', date: '2022-08-18T04:48:09.000Z', status: 'Not Started', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-124', date: '2022-08-18T04:48:09.000Z', status: 'Not Started', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-124', date: '2022-08-18T04:48:09.000Z', status: 'Not Started', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
  ]);
  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterData();
  }, [data]);

  useEffect(() => {
    paginateData();
  }, [filteredData]);

  const getData = () => {

  }

  const filterData = () => {
    let tempFilteredData = data.filter(job => new Date(job.date) >= new Date(fromDateFilter));
    tempFilteredData = tempFilteredData.filter(job => new Date(job.date) <= new Date(toDateFilter));
    setFilteredData(tempFilteredData);
  }

  const paginateData = () => {
    const pc = Math.ceil(filteredData.length / 6);
    setPageCount(pc);
    setActivePage(pc > 0 ? 1 : 0);
    let ind = 1;
    const tempPaginatedData = [];
    outer:
      for (let i = 1; i <= pc; i++) { // Page
        for (let j = 1; j <= 6; j++) { // Index
          if (ind > filteredData.length)
            break outer;
          tempPaginatedData.push({
            page: i,
            index: ind,
            id: filteredData[ind - 1].id,
            date: filteredData[ind - 1].date,
            status: filteredData[ind - 1].status,
            hub: {
              id: filteredData[ind - 1].hub.id,
              location: {
                lat: filteredData[ind - 1].hub.location.lat,
                long: filteredData[ind - 1].hub.location.long
              },
            },
            description: filteredData[ind - 1].description,
          });
          ind++;
        }
      }
    setPaginatedData(tempPaginatedData);
    // if (tempPaginatedData.length > 0) {
    //   console.log("PAGINATED DATA: ", tempPaginatedData[0]);
    // }
  }

  const TableRow = (index, id, date, status, hub, description) => {
    let fullDay = date.split('T')[0].split('-');
    // let fullDay = date.split('/');
    let formattedDate = `${fullDay[2]}/${fullDay[1]}/${fullDay[0]}`;
    // console.log(fullDay);
    return (
      <TouchableOpacity
        key={index}
        style={styles.screen1.listContainer.row}
        onPress={() => {
          setViewedJob({
            id: id,
            date: formattedDate,
            status: status,
            hub: {
              id: hub.id,
              location: {
                lat: hub.location.lat,
                long: hub.location.long,
              },
            },
            description: description,
          });
          setViewedJobModalOpen(true);
        }}
      >
        <Text style={styles.screen1.listContainer.row.index}>{index}</Text>
        <Text style={styles.screen1.listContainer.row.id}>{id}</Text>
        <Text style={styles.screen1.listContainer.row.date}>{formattedDate}</Text>
        <Text style={
          status === 'Not Started' ? styles.screen1.listContainer.row.status.notStarted :
            status === 'Ongoing' ? styles.screen1.listContainer.row.status.ongoing :
              styles.screen1.listContainer.row.status.completed
        }>{status}</Text>
      </TouchableOpacity>
    );
  }

  const Filter = () => {
    return (
      <Dialog
        isVisible={filterVisible}
        onBackdropPress={() => setFilterVisible(false)}
        style={styles.screen1.filter}
      >
        <View style={styles.screen1.filter.dates}>
          <TouchableOpacity
            style={styles.screen1.filter.dates.date}
            onPress={() => setFromDateFilterOpen(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.screen1.filter.dates.date.texts}>
              <Text style={styles.screen1.filter.dates.date.texts.txtOne}>From</Text>
              <Text style={styles.screen1.filter.dates.date.texts.txtTwo}>{fromDateFilter.toDateString()}</Text>
              <DatePicker
                modal
                mode="date"
                // minimumDate={LAUNCH}
                // maximumDate={fromDateFilter > TODAY ? fromDateFilter : TODAY}
                open={fromDateFilterOpen}
                date={fromDateFilter}
                onConfirm={(date) => {
                  setFromDateFilterOpen(false);
                  setFromDateFilter(date);
                }}
                onCancel={() => setFromDateFilterOpen(false)}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screen1.filter.dates.date}
            onPress={() => setToDateFilterOpen(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.screen1.filter.dates.date.texts}>
              <Text style={styles.screen1.filter.dates.date.texts.txtOne}>To</Text>
              <Text style={styles.screen1.filter.dates.date.texts.txtTwo}>{toDateFilter.toDateString()}</Text>
              <DatePicker
                modal
                mode="date"
                // minimumDate={LAUNCH < toDateFilter ? LAUNCH : toDateFilter}
                // maximumDate={TODAY}
                open={toDateFilterOpen}
                date={toDateFilter}
                onConfirm={(date) => {
                  setToDateFilterOpen(false);
                  setToDateFilter(date);
                }}
                onCancel={() => setToDateFilterOpen(false)}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.screen1.filter.last}>
          <Button
            type="solid"
            size='sm'
            color={'#228693'}
            buttonStyle={{borderRadius: 5, width: Responsive(20, WIDTH),}}
            onPress={() => {
              filterData();
              setFilterVisible(false);
            }}
          >
            <AntDesign name='filter' size={20} color={'white'}/>
            Filter
          </Button>
        </View>
      </Dialog>
    );
  }

  const Paginator = () => {
    return (
      <View style={styles.screen1.paginationContainer2.paginationContainer}>
        <IconFontAwesome
          name="arrow-left"
          size={15}
          color={activePage === 1 ? "#BFDDDE" : "#228693"}
          onPress={() => setActivePage(activePage === 1 ? activePage : activePage - 1)}
          style={styles.screen1.paginationContainer2.paginationContainer.arrowLeft}
        />
        {
          activePage - 1 > 0 && <TouchableOpacity
            style={styles.screen1.paginationContainer2.paginationContainer.prevPageNo}
            onPress={() => setActivePage(activePage - 1)}
          ><Text>{activePage - 1}</Text>
          </TouchableOpacity>
        }
        <Text style={styles.screen1.paginationContainer2.paginationContainer.pageNo}>
          {activePage}
        </Text>
        {
          activePage + 1 <= pageCount && <TouchableOpacity
            style={styles.screen1.paginationContainer2.paginationContainer.prevPageNo}
            onPress={() => setActivePage(activePage + 1)}
          ><Text>{activePage + 1}</Text>
          </TouchableOpacity>
        }
        <IconFontAwesome
          name="arrow-right"
          size={15}
          color={activePage < pageCount ? "#228693" : "#BFDDDE"}
          onPress={() => setActivePage(activePage === pageCount ? activePage : activePage + 1)}
          style={styles.screen1.paginationContainer2.paginationContainer.arrowRight}
        />
      </View>
    );
  }

  return (
    <View style={styles.screen1}>
      {Filter()}
      <View style={styles.screen1.totalContainer}>
        <Text style={styles.screen1.totalContainer.txt}>Total {data.length} job{data.length !== 1 && 's'}</Text>
      </View>
      <View style={styles.screen1.imgContainer}>
        <Image style={styles.screen1.imgContainer.img} source={MaintenanceAssigned}/>
      </View>
      <View style={styles.screen1.filterContainer}>
        <TouchableOpacity
          style={styles.screen1.filterContainer.filter}
          onPress={() => setFilterVisible(true)}
        >
          <Text style={styles.screen1.filterContainer.filter.txt}>Filter</Text>
          <Image
            source={FilterImg}
            style={styles.screen1.filterContainer.filter.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.screen1.listContainer}>
        {paginatedData.map((complaint) => {
          if (complaint.page === activePage)
            return TableRow(complaint.index, complaint.id, complaint.date, complaint.status, complaint.hub,
              complaint.description);
        })}
      </View>
      <View style={styles.screen1.paginationContainer2}>
        {Paginator()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen1: {
    height: '100%',
    // borderWidth: 2,
    // borderColor: 'red',
    display: 'flex',
    totalContainer: {
      // borderWidth: 2,
      // borderColor: 'green',
      flex: 0.4,
      display: 'flex',
      justifyContent: 'center',
      txt: {
        color: '#707070',
      },
    },
    imgContainer: {
      // borderWidth: 2,
      // borderColor: 'green',
      flex: 3.6,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: {
        height: Responsive(18, HEIGHT),
        width: Responsive(24, HEIGHT),
      },
    },
    filterContainer: {
      // borderWidth: 2,
      // borderColor: 'green',
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
      filter: {
        borderWidth: 1,
        borderColor: '#BFDDDE',
        borderRadius: 5,
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
          height: 20,
        },
      },
    },
    listContainer: {
      // borderWidth: 2,
      // borderColor: 'green',
      flex: 6,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      // padding: 10,
      row: {
        borderBottomColor: '#EDFBFC',
        borderBottomWidth: 2,
        height: Responsive(6, HEIGHT),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        index: {
          flex: 1,
          textAlignVertical: 'center',
          textAlign: 'center',
          color: '#707070',
        },
        id: {
          flex: 3,
          textAlignVertical: 'center',
          textAlign: 'center',
          color: '#707070',
        },
        date: {
          flex: 3,
          textAlignVertical: 'center',
          textAlign: 'center',
          color: '#707070',
        },
        status: {
          notStarted: {
            flex: 2,
            textAlignVertical: 'center',
            textAlign: 'center',
            borderRadius: 5,
            color: '#008BD1',
            backgroundColor: '#E1F0FF',
            height: '75%',
          },
          ongoing: {
            flex: 2,
            textAlignVertical: 'center',
            textAlign: 'center',
            borderRadius: 5,
            color: '#FF9900',
            backgroundColor: '#FFF6E9',
            height: '75%',
          },
          completed: {
            flex: 2,
            textAlignVertical: 'center',
            textAlign: 'center',
            borderRadius: 5,
            color: '#00C186',
            backgroundColor: '#E0F8E3',
            height: '75%',
          },
        },
      },
    },
    paginationContainer2: {
      // borderWidth: 2,
      // borderColor: 'green',
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paginationContainer: {
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        pageNo: {
          marginHorizontal: 5,
          fontSize: 15,
          fontWeight: '700',
          color: '#7CB6B8',
          borderColor: '#7CB6B8',
          borderRadius: 5,
          borderWidth: 2,
          padding: 5,
          textAlign: 'center',
        },
        prevPageNo: {
          marginHorizontal: 5,
          fontSize: 15,
          fontWeight: '700',
          color: '#A3A3A3',
          padding: 5,
          textAlign: 'center',
        },
        arrowLeft: {
          marginRight: 10,
        },
        arrowRight: {
          marginLeft: 10,
        },
      },
    },
    filter: {
      dates: {
        borderColor: '#BFDDDE',
        borderBottomWidth: 2,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        date: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 5,
          texts: {
            marginLeft: 30,
            txtOne: {
              color: '#BFDDDE',
            },
            txtTwo: {
              color: '#228693',
            },
          },
        },
      },
      last: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    },
  },
});

export default AssignedScreen;
