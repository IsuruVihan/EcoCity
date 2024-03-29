import React, {useContext, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TextInput} from "react-native";
import {Dialog, Switch} from "@rneui/themed";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FeatherIcons from "react-native-vector-icons/Feather";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";
import Slider from '@react-native-community/slider';
import Feather from "react-native-vector-icons/Feather";
import {Button} from "@rneui/base";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-date-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import SelectDropdown from 'react-native-select-dropdown';

import {AuthContext} from "../context/AuthContext";
import {Responsive} from "../helpers/Responsive";

import CrewImg from '../assets/images/crew-profile.png';
import NFCImg from '../assets/images/nfc-tag.png';
import FilterImg from "../assets/images/filter.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const MyProfile = () => {
  const {loading, loggedUser, logout} = useContext(AuthContext);

  const [isVisibleSettingsModal, setIsVisibleSettingsModal] = useState(false);
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [fontSize, setFontSize] = useState(10);

  const [isVisibleProfileDetailsModal, setIsVisibleProfileDetailsModal] = useState(false);
  const [crewId, setCrewId] = useState('#1234');
  const [firstName, setFirstName] = useState('Isuru');
  const [lastName, setLastName] = useState('Harischandra');
  const [nic, setNic] = useState('992462698v');
  const [email, setEmail] = useState('isuruvihan@gmail.com');
  const [currentPassword, setCurrentPassword] = useState('Isuru@123');
  const [newPassword, setNewPassword] = useState('Isuru@123');

  const [isVisibleNFCModal, setIsVisibleNFCModal] = useState(false);

  const [nfcTagsTableFilterVisible, setNFCTagsTableFilterVisible] = useState(false);
  const [nfcTagsTableFromDateFilterVisible, setNFCTagsTableFromDateFilterVisible] = useState(false);
  const [nfcTagsTableToDateFilterVisible, setNFCTagsTableToDateFilterVisible] = useState(false);
  const [fromDateFilter, setFromDateFilter] = useState(new Date());
  const [toDateFilter, setToDateFilter] = useState(new Date());

  const [paginatedData, setPaginatedData] = useState([
    {id: 'CMB-07-123', date: '23/06/2022', status: 'Viewed'},
    {id: 'CMB-07-124', date: '24/06/2022', status: 'Not Viewed'},
    {id: 'CMB-07-125', date: '25/06/2022', status: 'Resolved'},
    {id: 'CMB-07-126', date: '26/06/2022', status: 'Removed'},
    {id: 'CMB-07-127', date: '27/06/2022', status: 'Viewed'},
    {id: 'CMB-07-128', date: '28/06/2022', status: 'Viewed'},
    {id: 'CMB-07-123', date: '23/06/2022', status: 'Viewed'},
    {id: 'CMB-07-124', date: '24/06/2022', status: 'Not Viewed'},
    // {id: 'CMB-07-125', date: '25/06/2022', status: 'Resolved'},
    // {id: 'CMB-07-126', date: '26/06/2022', status: 'Removed'},
    // {id: 'CMB-07-127', date: '27/06/2022', status: 'Viewed'},
    // {id: 'CMB-07-128', date: '28/06/2022', status: 'Viewed'},
    // {id: 'CMB-07-123', date: '23/06/2022', status: 'Viewed'},
    // {id: 'CMB-07-124', date: '24/06/2022', status: 'Not Viewed'},
    // {id: 'CMB-07-125', date: '25/06/2022', status: 'Resolved'},
    // {id: 'CMB-07-126', date: '26/06/2022', status: 'Removed'},
    // {id: 'CMB-07-127', date: '27/06/2022', status: 'Viewed'},
    // {id: 'CMB-07-128', date: '28/06/2022', status: 'Viewed'},
  ]);
  const [viewedComplaint, setViewedComplaint] = useState({
    id: 'CMB - 1',
    category: 'Garbage Hub',
    status: 'Viewed',
    date: '16/08/2022',
    description: 'Hub lid is not functioning after tapping the NFC card',
    files: [],
    remarks: 'We will fix th issue as soon as possible',
  });
  const [viewComplaintModalOpen, setViewComplaintModalOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const openModals = (label) => {
    switch (label) {
      case "Profile":
        setIsVisibleProfileDetailsModal(true);
        break;
      case "Settings":
        setIsVisibleSettingsModal(true);
        break;
      case "My NFC Tags":
        setIsVisibleNFCModal(true);

    }
  }

  const Link = (iconType, iconName, label) => {
    return (
      <TouchableOpacity style={styles.myProfile.links.section} onPress={() => openModals(label)}>
        <View style={styles.myProfile.links.section.box1}>
          {iconType === 'feather' && <FeatherIcons name={iconName} size={25} color={'#042434'}/>}
          {iconType === 'material' && <MaterialIcons name={iconName} size={25} color={'#042434'}/>}
        </View>
        <View style={styles.myProfile.links.section.box2}>
          <Text style={styles.myProfile.links.section.box2.txt}>{label}</Text>
        </View>
        <View style={styles.myProfile.links.section.box3}>
          <FeatherIcons name={'chevron-right'} size={25} color={'#042434'}/>
        </View>
      </TouchableOpacity>
    );
  }

  const SettingsModal = () => {
    return (
      <Dialog
        overlayStyle={{
          width: '100%',
          marginTop: 'auto',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          paddingTop: 60,
          paddingBottom: 40,
          paddingHorizontal: 50,
        }}
        isVisible={isVisibleSettingsModal}
        onBackdropPress={() => setIsVisibleSettingsModal(false)}
        style={styles.myProfile.settings}
      >
        <View style={styles.myProfile.settings.linkRow}>
          <View style={styles.myProfile.settings.linkRow.column}>
            <Feather name={'globe'} size={25} color={'#042434'}/>
            <Text style={styles.myProfile.settings.linkRow.column.txt}>Language</Text>
          </View>
          <View style={styles.myProfile.settings.linkRow.column}>
            <TouchableOpacity style={styles.myProfile.settings.linkRow.column.container}>
              <Text style={styles.myProfile.settings.linkRow.column.container.langTxt}>English</Text>
              <FeatherIcons name={'chevron-right'} size={18} color={'#6F6F6F'}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.myProfile.settings.linkRow}>
          <View style={styles.myProfile.settings.linkRow.column}>
            <Feather name={'moon'} size={25} color={'#042434'}/>
            <Text style={styles.myProfile.settings.linkRow.column.txt}>Dark Mode</Text>
          </View>
          <View style={styles.myProfile.settings.linkRow.column}>
            <Switch value={darkModeOn} color={'#228693'} onValueChange={() => setDarkModeOn(!darkModeOn)}/>
          </View>
        </View>
        <View style={styles.myProfile.settings.linkRow}>
          <View style={styles.myProfile.settings.linkRow.column}>
            <FontAwesomeIcons name={'font'} size={25} color={'#042434'}/>
            <Text style={styles.myProfile.settings.linkRow.column.txt}>Font Size</Text>
          </View>
          <View style={styles.myProfile.settings.linkRow.column}>
            <FontAwesome5Icons name={'font'} color={'black'}/>
            <Slider
              style={styles.myProfile.settings.linkRow.column.slider}
              minimumValue={1}
              maximumValue={10}
              onValueChange={(value) => setFontSize(Math.floor(value))}
              thumbTintColor='#228693'
            />
            <FontAwesome5Icons name={'font'} color={'black'} size={25}/>
          </View>
        </View>
      </Dialog>
    );
  }

  const ProfileDetailsModal = () => {
    const Item = (label, onChange, value, secure) => {
      return (
        <View style={styles.myProfile.profile.section.item}>
          <View style={styles.myProfile.profile.section.item.part1}>
            <Text style={styles.myProfile.profile.section.item.part1.label}>{label}</Text>
            <TextInput
              style={styles.myProfile.profile.section.item.part1.field}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secure}
            />
          </View>
          <View style={styles.myProfile.profile.section.item.part2}>
            <MaterialIcons size={20} color={'#AFCACB'} name={'done'}/>
          </View>
        </View>
      );
    }

    return (
      <Dialog
        isVisible={isVisibleProfileDetailsModal}
        style={styles.myProfile.profile}
      >
        <View style={styles.myProfile.profile.first}>
          <MaterialIcons
            size={25}
            color={'black'}
            name={'chevron-left'}
            onPress={() => setIsVisibleProfileDetailsModal(false)}
          />
          <Text style={styles.myProfile.profile.first.txt}>EDIT PROFILE</Text>
          <MaterialIcons size={25} color={'black'} name={'done'}/>
        </View>
        <View style={styles.myProfile.profile.space}/>
        <View style={styles.myProfile.profile.section}>
          <Text style={styles.myProfile.profile.section.topic}>PUBLIC INFORMATION</Text>
          {Item('Crew ID', setCrewId, crewId, false)}
          {Item('First Name', setFirstName, firstName, false)}
          {Item('Last Name', setLastName, lastName, false)}
          {Item('NIC', setNic, nic, false)}
          {Item('Email', setEmail, email, false)}
        </View>
        <Button title="Save" buttonStyle={styles.myProfile.profile.section.btn}/>
        <View style={styles.myProfile.profile.space}/>
        <View style={styles.myProfile.profile.section}>
          <Text style={styles.myProfile.profile.section.topic}>PASSWORD</Text>
          {Item('Current Password', setCurrentPassword, currentPassword, true)}
          {Item('New Password', setNewPassword, newPassword, true)}
        </View>
        <Button title="Change Password" buttonStyle={styles.myProfile.profile.section.btn}/>
      </Dialog>
    );
  }

  const NFCTagsTableFilter = () => {
    return (
      <Dialog
        isVisible={nfcTagsTableFilterVisible}
        onBackdropPress={() => setNFCTagsTableFilterVisible(false)}
        style={styles.myProfile.filter}
      >
        <View style={styles.myProfile.filter.title}>
          <Text style={styles.myProfile.filter.title.txt}>NFC Tag Usage Filter</Text>
        </View>
        <View style={styles.myProfile.filter.fields}>
          <View style={styles.myProfile.filter.fields.field}>
            <Text style={styles.myProfile.filter.fields.field.label}>Bin Type</Text>
            <SelectDropdown
              data={["Organic", "Paper", "Plastic", "Glass"]}
              defaultValue="Organic"
              // onSelect={(selectedItem) => setNewComplaintCategory(selectedItem)}
              buttonTextAfterSelection={(selectedItem) => selectedItem}
              rowTextForSelection={(item) => item}
              buttonStyle={{
                width: '70%',
                height: Responsive(4, HEIGHT),
                borderBottomWidth: 1,
                borderBottomColor: '#E9E8EF',
                marginVertical: 3,
                backgroundColor: 'white',
                color: '#7CB6B8',
              }}
              buttonTextStyle={{fontSize: 12, color: '#7CB6B8', backgroundColor: 'white',}}
              dropdownStyle={{backgroundColor: 'white', height: Responsive(20, HEIGHT), borderRadius: 10,}}
              rowStyle={{
                height: Responsive(5, HEIGHT),
                paddingVertical: 5,
                borderBottomColor: '#E8F5F6',
                borderBottomWidth: 1,
              }}
              rowTextStyle={{color: '#7CB6B8', fontSize: 15,}}
              renderDropdownIcon={() => <Ionicons name={'caret-down-circle'} color="#7CB6B8"/>}
              dropdownIconPosition="right"
            />
          </View>
          <View style={styles.myProfile.filter.fields.field}>
            <Text style={styles.myProfile.filter.fields.field.label}>Hub ID</Text>
            <TextInput style={styles.myProfile.filter.fields.field.txtInput}/>
          </View>
          <View style={styles.myProfile.filter.fields.field}>
            <Text style={styles.myProfile.filter.fields.field.label}>NFC Id</Text>
            <TextInput style={styles.myProfile.filter.fields.field.txtInput}/>
          </View>
        </View>
        <View style={styles.myProfile.filter.dates}>
          <TouchableOpacity
            style={styles.myProfile.filter.dates.date}
            onPress={() => setNFCTagsTableFromDateFilterVisible(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.myProfile.filter.dates.date.texts}>
              <Text style={styles.myProfile.filter.dates.date.texts.txtOne}>From</Text>
              <Text style={styles.myProfile.filter.dates.date.texts.txtTwo}>{fromDateFilter.toDateString()}</Text>
              <DatePicker
                modal
                mode="date"
                // minimumDate={LAUNCH}
                // maximumDate={fromDateFilter > TODAY ? fromDateFilter : TODAY}
                open={nfcTagsTableFromDateFilterVisible}
                date={fromDateFilter}
                onConfirm={(date) => {
                  setNFCTagsTableFromDateFilterVisible(false);
                  setFromDateFilter(date);
                }}
                onCancel={() => setNFCTagsTableFromDateFilterVisible(false)}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myProfile.filter.dates.date}
            onPress={() => setNFCTagsTableToDateFilterVisible(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.myProfile.filter.dates.date.texts}>
              <Text style={styles.myProfile.filter.dates.date.texts.txtOne}>To</Text>
              <Text style={styles.myProfile.filter.dates.date.texts.txtTwo}>{toDateFilter.toDateString()}</Text>
              <DatePicker
                modal
                mode="date"
                // minimumDate={LAUNCH < toDateFilter ? LAUNCH : toDateFilter}
                // maximumDate={TODAY}
                open={nfcTagsTableToDateFilterVisible}
                date={toDateFilter}
                onConfirm={(date) => {
                  setNFCTagsTableToDateFilterVisible(false);
                  setToDateFilter(date);
                }}
                onCancel={() => setNFCTagsTableToDateFilterVisible(false)}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.myProfile.filter.last}>
          <Button
            type="solid"
            size='sm'
            color={'#228693'}
            buttonStyle={{borderRadius: 5, width: Responsive(20, WIDTH),}}
            onPress={() => {
              // filterData();
              // setFilterVisible(false);
            }}
          >
            <AntDesign name='filter' size={20} color={'white'}/>
            Filter
          </Button>
        </View>
      </Dialog>
    );
  }

  const NFCTagsModal = () => {
    return (
      <Dialog
        isVisible={isVisibleNFCModal}
        style={styles.myProfile.nfc}
      >
        <View style={styles.myProfile.nfc.first}>
          <MaterialIcons
            size={25}
            color={'black'}
            name={'chevron-left'}
            onPress={() => setIsVisibleNFCModal(false)}
          />
          <Text style={styles.myProfile.nfc.first.txt}>MY NFC TAGS</Text>
          <MaterialIcons size={25} color={'black'} name={'done'}/>
        </View>
        <View style={styles.myProfile.nfc.space}/>
        <View>
          <Text style={styles.myProfile.nfc.topic}>NFC Tags</Text>
        </View>
        <View style={styles.myProfile.nfc.card}>
          <View style={styles.myProfile.nfc.card.section1}>
            <Image source={NFCImg} style={styles.myProfile.nfc.card.section1.img}/>
          </View>
          <View style={styles.myProfile.nfc.card.section2}>
            <Text style={styles.myProfile.nfc.card.section2.first}>ID</Text>
            <Text style={styles.myProfile.nfc.card.section2.second}>#12345</Text>
          </View>
          <View style={styles.myProfile.nfc.card.section2}>
            <Text style={styles.myProfile.nfc.card.section2.first}>Status</Text>
            <Text style={styles.myProfile.nfc.card.section2.second}>Active</Text>
          </View>
        </View>
        <View style={styles.myProfile.nfc.space}/>
        <View style={styles.myProfile.nfc.filterContainer}>
          <TouchableOpacity
            style={styles.myProfile.nfc.filterContainer.filter}
            onPress={() => setNFCTagsTableFilterVisible(true)}
          >
            <Text style={styles.myProfile.nfc.filterContainer.filter.txt}>Filter</Text>
            <Image source={FilterImg} style={styles.myProfile.nfc.filterContainer.filter.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.myProfile.nfc.space}/>
        <View style={styles.myProfile.nfc.tableContainer}>
          <View style={styles.myProfile.nfc.tableContainer.headerContainer}>
            <Text style={styles.myProfile.nfc.tableContainer.headerContainer.label}>Bin</Text>
            <Text style={styles.myProfile.nfc.tableContainer.headerContainer.label}>Hub</Text>
            <Text style={styles.myProfile.nfc.tableContainer.headerContainer.label}>NFC</Text>
            <Text style={styles.myProfile.nfc.tableContainer.headerContainer.label2}>Date</Text>
          </View>
          {paginatedData.map((complaint, idx) => {
            // if (complaint.page === activePage)
              return TableRow(idx, complaint.id, complaint.date, complaint.status);
          })}
        </View>
        <View style={styles.myProfile.nfc.space}/>
        <View style={styles.myProfile.nfc.paginationContainer}>
          <IconFontAwesome
            name="arrow-left"
            size={15}
            color={activePage === 1 ? "#BFDDDE" : "#228693"}
            onPress={() => setActivePage(activePage === 1 ? activePage : activePage - 1)}
            style={styles.myProfile.nfc.paginationContainer.arrowLeft}
          />
          {
            activePage - 1 > 0 && <TouchableOpacity
              style={styles.myProfile.nfc.paginationContainer.prevPageNo}
              onPress={() => setActivePage(activePage - 1)}
            ><Text>{activePage - 1}</Text>
            </TouchableOpacity>
          }
          <Text style={styles.myProfile.nfc.paginationContainer.pageNo}>{activePage}</Text>
          {
            activePage + 1 <= pageCount && <TouchableOpacity
              style={styles.myProfile.nfc.paginationContainer.prevPageNo}
              onPress={() => setActivePage(activePage + 1)}
            ><Text>{activePage + 1}</Text>
            </TouchableOpacity>
          }
          <IconFontAwesome
            name="arrow-right"
            size={15}
            color={activePage < pageCount ? "#228693" : "#BFDDDE"}
            onPress={() => setActivePage(activePage === pageCount ? activePage : activePage + 1)}
            style={styles.myProfile.nfc.paginationContainer.arrowRight}
          />
        </View>
      </Dialog>
    );
  }

  const TableRow = (idx, id, date, status) => {
    let fullDay = date.split('T')[0].split('-');
    let formattedDate = `${fullDay[2]}/${fullDay[1]}/${fullDay[0]}`;
    return (
      <TouchableOpacity
        key={idx}
        style={styles.myProfile.nfc.tableContainer.row}
        onPress={() => {
          setViewedComplaint({
            id: id,
            status: status,
            date: formattedDate,
          });
          setViewComplaintModalOpen(true);
        }}
      >
        <Text style={
          status === 'Viewed' ? styles.myProfile.nfc.tableContainer.row.binType.viewed :
            status === 'Not Viewed' ? styles.myProfile.nfc.tableContainer.row.binType.notViewed :
              status === 'Resolved' ? styles.myProfile.nfc.tableContainer.row.binType.resolved :
                styles.myProfile.nfc.tableContainer.row.binType.removed
        }><FontAwesomeIcons name={'trash-o'} size={20}/></Text>
        <Text style={styles.myProfile.nfc.tableContainer.row.nfcId}>1</Text>
        <Text style={styles.myProfile.nfc.tableContainer.row.nfcId}>1</Text>
        <Text style={styles.myProfile.nfc.tableContainer.row.id}>23/08/2022</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.myProfile}>
      {SettingsModal()}
      {ProfileDetailsModal()}
      {NFCTagsModal()}
      {NFCTagsTableFilter()}
      <View style={styles.myProfile.space}/>
      <View style={styles.myProfile.topic}>
        <Text style={styles.myProfile.topic.txt}>My Profile</Text>
      </View>
      <View style={styles.myProfile.space}/>
      <View style={styles.myProfile.status}>
        <View style={styles.myProfile.status.first}>
          <Image source={CrewImg} style={styles.myProfile.status.first.img}/>
        </View>
        <View style={styles.myProfile.status.second}>
          <Text style={styles.myProfile.status.second.txt1}>Welcome</Text>
          <View style={styles.myProfile.status.second.container}>
            <Text style={styles.myProfile.status.second.container.name}>Isuru Harischandra</Text>
            <Octicons
              name={'dot-fill'}
              size={25}
              color={'#00C186'}
              style={styles.myProfile.status.second.container.icon}
            />
          </View>
          <Text style={styles.myProfile.status.second.txt2}>Maintenance ID: 1234</Text>
        </View>
        <View style={styles.myProfile.status.third}>
          <MaterialIcons name={'logout'} size={25} color={'#075061'} onPress={logout}/>
        </View>
      </View>
      <View style={styles.myProfile.space}/>
      <View style={styles.myProfile.links}>
        {Link('feather', 'user', 'Profile')}
        {Link('feather', 'settings', 'Settings')}
        {Link('material', 'nfc', 'My NFC Tags')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myProfile: {
    backgroundColor: '#FAFAFA',
    nfc: {
      tableContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        row: {
          borderBottomColor: '#EDFBFC',
          borderBottomWidth: 2,
          height: Responsive(6, HEIGHT),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          nfcId: {
            flex: 1,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#707070',
          },
          id: {
            flex: 2,
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
          binType: {
            viewed: {
              flex: 1,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderRadius: 5,
              color: '#008BD1',
              backgroundColor: '#E1F0FF',
              height: '75%',
            },
            notViewed: {
              flex: 1,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderRadius: 5,
              color: '#FF9900',
              backgroundColor: '#FFF6E9',
              height: '75%',
            },
            resolved: {
              flex: 1,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderRadius: 5,
              color: '#00C186',
              backgroundColor: '#E0F8E3',
              height: '75%',
            },
            removed: {
              flex: 1,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderRadius: 5,
              color: 'red',
              backgroundColor: 'pink',
              height: '75%',
            },
          },
        },
        headerContainer: {
          // borderWidth: 2,
          // borderColor: 'red',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          label: {
            color: '#042434',
            fontSize: 12,
            textAlign: 'center',
            flex: 1,
          },
          label2: {
            color: '#042434',
            fontSize: 12,
            textAlign: 'center',
            flex: 2,
          },
        },
      },
      paginationContainer: {
        // height: '80%',
        // borderWidth: 2,
        // borderColor: 'red',
        width: '50%',
        height: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 'auto',
        pageNo: {
          marginHorizontal: 3,
          fontSize: 12,
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
      first: {
        borderBottomColor: '#BFDDDE',
        borderBottomWidth: 2,
        height: Responsive(5, HEIGHT),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        icon: {

        },
        txt: {
          color: '#042434',
          fontSize: 15,
        },
      },
      space: {
        height: '2%',
      },
      topic: {
        color: '#707070',
        fontWeight: '600',
        marginVertical: 5,
        fontSize: 12,
      },
      card: {
        borderColor: '#E8F5F6',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#E8F5F6',
        height: Responsive(8, HEIGHT),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        section1: {
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: 'white',
          width: '25%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 1,
          img: {
            width: Responsive(6, HEIGHT),
            height: Responsive(2, HEIGHT),
          },
        },
        section2: {
          // borderColor: 'orange',
          // borderWidth: 2,
          first: {
            fontSize: 12,
            color: '#042434',
          },
          second: {
            fontSize: 12,
            color: '#7CB6B8',
          },
        },
      },
      filterContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        filter: {
          borderWidth: 1,
          borderColor: '#BFDDDE',
          borderRadius: 5,
          // height: '100%',
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
    // borderWidth: 2,
    // borderColor: 'orange',
    height: Responsive(83, HEIGHT),
    paddingHorizontal: 10,
    space: {
      // borderWidth: 2,
      // borderColor: 'red',
      height: '2%',
    },
    topic: {
      // borderWidth: 2,
      // borderColor: 'red',
      height: '8%',
      display: 'flex',
      justifyContent: 'center',
      txt: {
        // borderWidth: 2,
        // borderColor: 'green',
        color: '#042434',
        fontSize: 30,
        fontWeight: '600',
      },
    },
    status: {
      borderTopWidth: 2,
      borderTopColor: '#BFDDDE',
      borderBottomWidth: 2,
      borderBottomColor: '#BFDDDE',
      height: '20%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      first: {
        // borderWidth: 2,
        // borderColor: 'blue',
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        img: {
          height: '60%',
          width: '70%',
        },
      },
      second: {
        // borderWidth: 2,
        // borderColor: 'blue',
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        txt1: {
          color: '#949494',
          fontSize: 15,
        },
        container: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          name: {
            color: '#042434',
            fontSize: 20,
            fontWeight: '500',
            // borderWidth: 2,
            // borderColor: 'blue',
          },
          icon: {
            marginLeft: 3,
            // borderWidth: 2,
            // borderColor: 'blue',
          },
        },
        txt2: {
          color: '#042434',
          fontSize: 12,
        },
      },
      third: {
        // borderWidth: 2,
        // borderColor: 'blue',
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
      },
    },
    links: {
      // borderWidth: 2,
      // borderColor: 'red',
      height: '66%',
      section: {
        // borderWidth: 2,
        // borderColor: 'blue',
        height: '18%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        box1: {
          // borderWidth: 2,
          // borderColor: 'green',
          width: '10%',
        },
        box2: {
          // borderWidth: 2,
          // borderColor: 'green',
          width: '50%',
          txt: {
            color: '#042434',
            fontSize: 18,
            fontWeight: '500',
          },
        },
        box3: {
          // borderWidth: 2,
          // borderColor: 'green',
          width: '10%',
        },
      },
    },
    settings: {
      linkRow: {
        // borderColor: 'red',
        // borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12,
        column: {
          // borderColor: 'blue',
          // borderWidth: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          txt: {
            marginLeft: 10,
            fontSize: 18,
            color: '#042434',
          },
          container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            langTxt: {
              marginRight: 5,
              color: '#6F6F6F',
              fontSize: 18,
            },
          },
          slider: {
            width: Responsive(12, HEIGHT),
          },
        },
      },
    },
    profile: {
      first: {
        borderBottomColor: '#BFDDDE',
        borderBottomWidth: 2,
        height: Responsive(5, HEIGHT),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        icon: {

        },
        txt: {
          color: '#042434',
          fontSize: 15,
        },
      },
      section: {
        // borderColor: 'blue',
        // borderWidth: 2,
        topic: {
          color: '#707070',
          fontWeight: '600',
          marginVertical: 5,
          fontSize: 12,
        },
        item: {
          borderColor: '#E8F5F6',
          borderWidth: 2,
          marginBottom: 5,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          part1: {
            label: {
              // borderColor: 'orange',
              // borderWidth: 2,
              color: '#707070',
              fontSize: 12,
            },
            field: {
              // borderColor: 'orange',
              // borderWidth: 2,
              padding: 0,
              color: '#042434',
            },
          },
          part2: {
            // borderColor: 'orange',
            // borderWidth: 2,
          },
        },
        btn: {
          backgroundColor: '#228693',
          borderRadius: 10,
        },
      },
      space: {
        height: '2%',
      },
    },
    filter: {
      title: {
        txt: {
          color: '#042434',
          fontSize: 15,
          fontWeight: '600',
        },
      },
      fields: {
        marginVertical: 10,
        field: {
          // borderColor: 'red',
          // borderWidth: 2,
          height: Responsive(5, HEIGHT),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          label: {
            color: '#042434',
          },
          txtInput: {
            borderBottomWidth: 1,
            borderBottomColor: '#E9E8EF',
            padding: 0,
            width: '70%',
            color: '#7CB6B8',
            fontSize: 12,
            height: Responsive(4, HEIGHT),
            textAlign: 'center',
          },
        },
      },
      options: {
        paddingVertical: 5,
      },
      dates: {
        borderColor: '#BFDDDE',
        borderTopWidth: 2,
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

export default MyProfile;
