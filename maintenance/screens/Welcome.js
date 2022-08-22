import React, {useContext, useState} from 'react';
import {Dimensions, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import {Button} from "@rneui/base";
import {VictoryChart, VictoryLine} from "victory-native";

import CarouselImg from '../assets/images/motivation-quote.png';
import GreenBin from '../assets/images/staitstics-dump.png';
import FilterImg from "../assets/images/filter.png";
import OrganicBin from "../assets/images/organic.png";
import PaperBin from "../assets/images/paper.png";
import PlasticBin from "../assets/images/plastic.png";
import GlassBin from "../assets/images/glass.png";

import {AuthContext} from "../context/AuthContext";
import {Responsive} from "../helpers/Responsive";
import {Dialog} from "@rneui/themed";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-date-picker";
import AntDesign from "react-native-vector-icons/AntDesign";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const Welcome = () => {
  const {loggedUser} = useContext(AuthContext);

  const [filterVisible, setFilterVisible] = useState(false);
  const [fromDateFilterOpen, setFromDateFilterOpen] = useState(false);
  const [toDateFilterOpen, setToDateFilterOpen] = useState(false);
  const [fromDateFilter, setFromDateFilter] = useState(new Date());
  const [toDateFilter, setToDateFilter] = useState(new Date());

  const filterData = () => {
    console.log("Filter data");
  }

  const WeightCard = (img, weight) => {
    return (
      <View style={styles.welcome.stat.bins.bottomContainer.sec2.card}>
        <View style={styles.welcome.stat.bins.bottomContainer.sec2.card.first}>
          <Image source={img} style={styles.welcome.stat.bins.bottomContainer.sec2.card.first.img}/>
        </View>
        <View style={styles.welcome.stat.bins.bottomContainer.sec2.card.second}>
          <View style={styles.welcome.stat.bins.bottomContainer.sec2.card.second.container}>
            <Text style={styles.welcome.stat.bins.bottomContainer.sec2.card.second.container.txt1}>{weight}</Text>
            <Text style={styles.welcome.stat.bins.bottomContainer.sec2.card.second.container.txt2}>Kg</Text>
          </View>
        </View>
      </View>
    );
  }

  const Filter = () => {
    return (
      <Dialog
        isVisible={filterVisible}
        onBackdropPress={() => setFilterVisible(false)}
        style={styles.welcome.filter}
      >
        <View style={styles.welcome.filter.dates}>
          <TouchableOpacity
            style={styles.welcome.filter.dates.date}
            onPress={() => setFromDateFilterOpen(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.welcome.filter.dates.date.texts}>
              <Text style={styles.welcome.filter.dates.date.texts.txtOne}>From</Text>
              <Text style={styles.welcome.filter.dates.date.texts.txtTwo}>{fromDateFilter.toDateString()}</Text>
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
            style={styles.welcome.filter.dates.date}
            onPress={() => setToDateFilterOpen(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.welcome.filter.dates.date.texts}>
              <Text style={styles.welcome.filter.dates.date.texts.txtOne}>To</Text>
              <Text style={styles.welcome.filter.dates.date.texts.txtTwo}>{toDateFilter.toDateString()}</Text>
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
        <View style={styles.welcome.filter.last}>
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

  const Chart = () => {
    return (
      <VictoryChart
        animate={{duration: 2000, onLoad: {duration: 1000}}}
        minDomain={{y: 0}}
        height={Responsive(25, HEIGHT)}
        width={Responsive(50, HEIGHT)}
      >
        <VictoryLine
          data={[
            {x: "Jan", y: 2},
            {x: "Feb", y: 3},
            {x: "Mar", y: 5},
            {x: "Apr", y: 4},
            {x: "May", y: 7},
            {x: "Jun", y: 4},
            {x: "Jul", y: 7},
          ]}
          style={{
            data: {
              stroke: "#85BBBD",
              strokeWidth: 2,
            },
          }}
          interpolation="linear"
        />
      </VictoryChart>
    );
  }

  return (
    <ScrollView style={styles.welcome}>
      {Filter()}
      <View style={styles.welcome.carousel}>
        <Image source={CarouselImg} style={styles.welcome.carousel.img}/>
      </View>
      <View style={styles.welcome.space1}/>
      <View style={styles.welcome.first}>
        <View style={styles.welcome.first.container1}>
          <Text style={styles.welcome.first.container1.txt}>
            Welcome, {loggedUser.email.split('@')[0][0].toUpperCase()}{loggedUser.email.split('@')[0].slice(1)}!
          </Text>
        </View>
        <View style={styles.welcome.first.container2}>
          <Text style={styles.welcome.first.container2.txt}>Your garbage transformed, is your gift!</Text>
        </View>
      </View>
      <View style={styles.welcome.space1}/>
      <View style={styles.welcome.stat}>
        <View style={styles.welcome.stat.first}>
          <View style={styles.welcome.stat.first.container1}>
            <Text style={styles.welcome.stat.first.container1.txt}>Statistics</Text>
          </View>
          <View style={styles.welcome.stat.first.container2}>
            <TouchableOpacity style={styles.welcome.stat.first.container2.filter} onPress={() => setFilterVisible(true)}>
              <Text style={styles.welcome.stat.first.container2.filter.txt}>Filter</Text>
              <Image source={FilterImg} style={styles.welcome.stat.first.container2.filter.icon}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.welcome.stat.space}/>
        <View style={styles.welcome.stat.bins}>
          <View style={styles.welcome.stat.bins.topContainer}>
            <Text style={styles.welcome.stat.bins.topContainer.txt}>Garbage Collection Weight</Text>
          </View>
          <View style={styles.welcome.stat.bins.bottomContainer}>
            <View style={styles.welcome.stat.bins.bottomContainer.sec1}>
              <View style={styles.welcome.stat.bins.bottomContainer.sec1.first}>
                <Image source={GreenBin} style={styles.welcome.stat.bins.bottomContainer.sec1.first.img}/>
              </View>
              <View style={styles.welcome.stat.bins.bottomContainer.sec1.second}>
                <View style={styles.welcome.stat.bins.bottomContainer.sec1.second.container}>
                  <Text style={styles.welcome.stat.bins.bottomContainer.sec1.second.container.txt1}>630</Text>
                  <Text style={styles.welcome.stat.bins.bottomContainer.sec1.second.container.txt2}>Kg</Text>
                </View>
              </View>
              <View style={styles.welcome.stat.bins.bottomContainer.sec1.third}>
                <Text style={styles.welcome.stat.bins.bottomContainer.sec1.third.txt}>Total</Text>
              </View>
            </View>
            <View style={styles.welcome.stat.bins.bottomContainer.sec2}>
              {WeightCard(OrganicBin, 230)}
              {WeightCard(PlasticBin, 100)}
              {WeightCard(PaperBin, 150)}
              {WeightCard(GlassBin, 150)}
            </View>
          </View>
        </View>
        <View style={styles.welcome.stat.space}/>
        <View style={styles.welcome.stat.graph}>
          <View style={styles.welcome.stat.graph.first}>
            <Text style={styles.welcome.stat.graph.first.txt}>
              My maintenance jobs count
            </Text>
          </View>
          <View style={styles.welcome.stat.graph.second}>
            {Chart()}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: '#FAFAFA',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    carousel: {
      height: Responsive(20, HEIGHT),
      img: {
        height: '100%',
        width: '100%',
        borderRadius: 30,
      },
    },
    space1: {
      height: Responsive(2, HEIGHT),
    },
    first: {
      borderBottomWidth: 2,
      borderBottomColor: '#BFDDDE',
      height: Responsive(10, HEIGHT),
      container1: {
        txt: {
          color: '#042434',
          fontSize: 30,
          fontWeight: '600',
        },
      },
      container2: {
        txt: {
          color: '#85BBBD',
          fontSize: 17,
          fontWeight: '500',
        },
      },
    },
    stat: {
      height: Responsive(49, HEIGHT),
      first: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '8%',
        container1: {
          txt: {
            color: '#042434',
            fontSize: 18,
            fontWeight: '700',
          },
        },
        container2: {
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
              height: '100%',
            },
          },
        },
      },
      bins: {
        borderRadius: 10,
        backgroundColor: 'white',
        boxShadow: '1px 2px 4px red',
        height: '44%',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        topContainer: {
          height: '20%',
          flex: 1,
          txt: {
            color: '#042434',
            fontWeight: '500',
          },
        },
        bottomContainer: {
          flex: 5,
          display: 'flex',
          flexDirection: 'row',
          height: '20%',
          sec1: {
            height: '100%',
            flex: 1,
            display: 'flex',
            first: {
              flex: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              img: {
                height: '100%',
                width: '50%',
              },
            },
            second: {
              flex: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              container: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                txt1: {
                  fontSize: 30,
                  fontWeight: '700',
                  color: '#042434',
                },
                txt2: {
                  color: '#042434',
                  fontWeight: '500',
                },
              },
            },
            third: {
              flex: 2,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              txt: {
                color: '#042434',
              },
            },
          },
          sec2: {
            height: '100%',
            flex: 2,
            display: 'flex',
            flexWrap: 'wrap',
            card: {
              height: '50%',
              width: '50%',
              display: 'flex',
              flexDirection: 'row',
              first: {
                padding: 5,
                width: '50%',
                img: {
                  height: '100%',
                  width: '100%',
                },
              },
              second: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                container: {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  txt1: {
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#042434',
                  },
                  txt2: {
                    color: '#042434',
                    fontWeight: '400',
                    fontSize: 12,
                  },
                },
              },
            },
          },
        },
      },
      graph: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: '44%',
        padding: 10,
        first: {
          height: '15%',
          txt: {
            color: '#042434',
            fontWeight: '500',
          },
        },
        second: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85%',
        },
      },
      space: {
        height: '2%',
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

export default Welcome;
