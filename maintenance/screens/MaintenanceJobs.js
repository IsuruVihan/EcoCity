import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, Dimensions} from "react-native";
import {Dialog} from "@rneui/themed";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-date-picker";
import {Button} from "@rneui/base";
import AntDesign from "react-native-vector-icons/AntDesign";

import MaintenanceAll from '../assets/images/maintenance-all.png';
import FilterImg from "../assets/images/filter.png";

import {Responsive} from "../helpers/Responsive";

const tabs = [
  {id: 0, label: 'All'},
  {id: 1, label: 'Assigned'},
  {id: 2, label: 'Ongoing'},
  {id: 3, label: 'Completed'},
];
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const MaintenanceJobs = () => {
  const [viewedTab, setViewedTab] = useState(0);

  const [filterVisible, setFilterVisible] = useState(false);
  const [fromDateFilterOpen, setFromDateFilterOpen] = useState(false);
  const [toDateFilterOpen, setToDateFilterOpen] = useState(false);
  const [fromDateFilter, setFromDateFilter] = useState(new Date());
  const [toDateFilter, setToDateFilter] = useState(new Date());

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([
    {
      id: 'CMB-07-123', date: '23/06/2022', status: 'Ongoing', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-124', date: '24/06/2022', status: 'Not Started', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-125', date: '25/06/2022', status: 'Completed', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-128', date: '28/06/2022', status: 'Ongoing', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-123', date: '23/06/2022', status: 'Ongoing', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-124', date: '24/06/2022', status: 'Not Started', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-125', date: '25/06/2022', status: 'Completed', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
    {
      id: 'CMB-07-124', date: '24/06/2022', status: 'Not Started', description: 'Description',
      hub: {id: '1', location: {lat: '12.432432', long: '43.2432566'}}
    },
  ]);
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

  }

  const paginateData = () => {
    const pc = Math.ceil(filteredData.length / 7);
    setPageCount(pc);
    setActivePage(pc > 0 ? 1 : 0);
    let ind = 1;
    const tempPaginatedData = [];
    outer:
      for (let i = 1; i <= pc; i++) { // Page
        for (let j = 1; j <= 7; j++) { // Index
          if (ind > filteredData.length)
            break outer;
          tempPaginatedData.push({
            page: i,
            index: ind,
            id: filteredData[ind - 1].id,
            date: filteredData[ind - 1].date,
            status: filteredData[ind - 1].status,
            category: filteredData[ind - 1].category,
            description: filteredData[ind - 1].description,
            files: filteredData[ind - 1].files,
            remarks: filteredData[ind - 1].remarks,
          });
          ind++;
        }
      }
    setPaginatedData(tempPaginatedData);
    if (tempPaginatedData.length > 0) {
      console.log("PAGINATED DATA: ", tempPaginatedData[0]);
    }
  }

  const TableRow = (index, id, date, status, category, description, files, remarks) => {
    let fullDay = date.split('T')[0].split('-');
    let formattedDate = `${fullDay[2]}/${fullDay[1]}/${fullDay[0]}`;
    return (
      <TouchableOpacity
        key={index}
        style={styles.maintenance.two.screens.screen.screen1.listContainer.row}
        onPress={() => {
          // setViewedComplaint({
          //   id: id,
          //   category: category,
          //   status: status,
          //   date: formattedDate,
          //   description: description,
          //   files: files,
          //   remarks: remarks,
          // });
          // setViewComplaintModalOpen(true);
        }}
      >
        <Text style={styles.maintenance.two.screens.screen.screen1.listContainer.row.index}>{index}</Text>
        <Text style={styles.maintenance.two.screens.screen.screen1.listContainer.row.id}>{id}</Text>
        {/*<Text style={styles.maintenance.two.screens.screen.screen1.listContainer.row.date}>{formattedDate}</Text>*/}
        <Text style={
          status === 'Viewed' ? styles.maintenance.two.screens.screen.screen1.listContainer.row.status.viewed :
            status === 'Not Viewed' ? styles.maintenance.two.screens.screen.screen1.listContainer.row.status.notViewed :
              status === 'Resolved' ? styles.maintenance.two.screens.screen.screen1.listContainer.row.status.resolved :
                styles.maintenance.two.screens.screen.screen1.listContainer.row.status.removed
        }>{status}</Text>
      </TouchableOpacity>
    );
  }

  const Filter = () => {
    return (
      <Dialog
        isVisible={filterVisible}
        onBackdropPress={() => setFilterVisible(false)}
        style={styles.maintenance.filter}
      >
        <View style={styles.maintenance.filter.dates}>
          <TouchableOpacity
            style={styles.maintenance.filter.dates.date}
            onPress={() => setFromDateFilterOpen(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.maintenance.filter.dates.date.texts}>
              <Text style={styles.maintenance.filter.dates.date.texts.txtOne}>From</Text>
              <Text style={styles.maintenance.filter.dates.date.texts.txtTwo}>{fromDateFilter.toDateString()}</Text>
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
            style={styles.maintenance.filter.dates.date}
            onPress={() => setToDateFilterOpen(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.maintenance.filter.dates.date.texts}>
              <Text style={styles.maintenance.filter.dates.date.texts.txtOne}>To</Text>
              <Text style={styles.maintenance.filter.dates.date.texts.txtTwo}>{toDateFilter.toDateString()}</Text>
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
        <View style={styles.maintenance.filter.last}>
          <Button
            type="solid"
            size='sm'
            color={'#228693'}
            buttonStyle={{borderRadius: 5, width: Responsive(20, WIDTH),}}
            onPress={() => {
              // filterData();
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

  const AllScreen = () => {
    return (
      <View style={styles.maintenance.two.screens.screen.screen1}>
        <View style={styles.maintenance.two.screens.screen.screen1.totalContainer}>
          <Text style={styles.maintenance.two.screens.screen.screen1.totalContainer.txt}>Total 6 jobs</Text>
        </View>
        <View style={styles.maintenance.two.screens.screen.screen1.imgContainer}>
          <Image style={styles.maintenance.two.screens.screen.screen1.imgContainer.img} source={MaintenanceAll}/>
        </View>
        <View style={styles.maintenance.two.screens.screen.screen1.filterContainer}>
          <TouchableOpacity
            style={styles.maintenance.two.screens.screen.screen1.filterContainer.filter}
            onPress={() => setFilterVisible(true)}
          >
            <Text style={styles.maintenance.two.screens.screen.screen1.filterContainer.filter.txt}>Filter</Text>
            <Image
              source={FilterImg}
              style={styles.maintenance.two.screens.screen.screen1.filterContainer.filter.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.maintenance.two.screens.screen.screen1.listContainer}>
          {paginatedData.map((complaint) => {
            if (complaint.page === activePage)
              return TableRow(complaint.index, complaint.id, complaint.date, complaint.status, complaint.category,
                complaint.description, complaint.files, complaint.remarks);
          })}
        </View>
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
      {Filter()}
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
              borderWidth: 2,
              borderColor: 'green',
              flex: 6.6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
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
                  viewed: {
                    flex: 2,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    borderRadius: 5,
                    color: '#008BD1',
                    backgroundColor: '#E1F0FF',
                    height: '75%',
                  },
                  notViewed: {
                    flex: 2,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    borderRadius: 5,
                    color: '#FF9900',
                    backgroundColor: '#FFF6E9',
                    height: '75%',
                  },
                  resolved: {
                    flex: 2,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    borderRadius: 5,
                    color: '#00C186',
                    backgroundColor: '#E0F8E3',
                    height: '75%',
                  },
                  removed: {
                    flex: 2,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    borderRadius: 5,
                    color: 'red',
                    backgroundColor: 'pink',
                    height: '75%',
                  },
                },
              },
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

export default MaintenanceJobs;
