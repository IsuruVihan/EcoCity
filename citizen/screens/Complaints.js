import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, LogBox, TouchableOpacity, Image, TextInput} from "react-native";
import {VictoryPie} from "victory-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Dialog, CheckBox, Button} from '@rneui/themed';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from 'react-native-select-dropdown';
import {launchImageLibrary} from 'react-native-image-picker';

import FilterImg from '../assets/images/filter.png';
import CreateImg from '../assets/images/create.png';
import ViewComplaintImg from '../assets/images/view-complaint.png';
import FileComplaintImg from '../assets/images/file-complaint.png';

import {Responsive} from "../helpers/Responsive";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Toast from "react-native-toast-message";
import {submitComplaint} from "../api/Complaints";
import {AuthContext} from "../context/AuthContext";
import {getHouseIdByEmail} from "../api/Houses";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const LAUNCH = new Date("2022-01-01");
const TODAY = new Date();

LogBox.ignoreLogs([
  "Require cycle: node_modules/victory",
]);

const Complaints = () => {
  const {loggedUser} = useContext(AuthContext);

  const [fromDateFilterOpen, setFromDateFilterOpen] = useState(false);
  const [toDateFilterOpen, setToDateFilterOpen] = useState(false);

  const [viewComplaintModalOpen, setViewComplaintModalOpen] = useState(false);
  const [viewedComplaint, setViewedComplaint] = useState({
    id: 'CMB - 1',
    category: 'Garbage Hub',
    status: 'Viewed',
    date: '16/08/2022',
    description: 'Hub lid is not functioning after tapping the NFC card',
    files: [],
    remarks: 'We will fix th issue as soon as possible',
  });

  const [viewImagesModalOpen, setViewImagesModalOpen] = useState(false);

  const [createComplaintModalOpen, setCreateComplaintModalOpen] = useState(false);
  const [newComplaintCategory, setNewComplaintCategory] = useState("Other");
  const [newComplaintHubNFCId, setNewComplaintHubNFCId] = useState("");
  const [newComplaintImages, setNewComplaintImages] = useState("");
  const [newComplaintDescription, setNewComplaintDescription] = useState("");

  const [filterVisible, setFilterVisible] = useState(false);
  const [viewedFilter, setViewedFilter] = useState(true);
  const [notViewedFilter, setNotViewedFilter] = useState(true);
  const [resolvedFilter, setResolvedFilter] = useState(true);
  const [removedFilter, setRemovedFilter] = useState(true);
  const [fromDateFilter, setFromDateFilter] = useState(new Date);
  const [toDateFilter, setToDateFilter] = useState(new Date);

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

  const openGallery = async () => {
    await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    }, (res) => {
      if (!res.didCancel) {
        console.log("RES ASSETS: ", res.assets[0]);
        setNewComplaintImages(res.assets[0]);
      }
    });
  }

  const handleOnCreateComplaint = () => {
    if (newComplaintDescription.length === 0) {
      setCreateComplaintModalOpen(false);
      return Toast.show({
        type: 'error',
        text1: 'Incomplete form data',
        text2: 'Please enter the complaint description',
        topOffset: 10,
      });
    }
    if (
      (newComplaintCategory === "Garbage hub" || newComplaintCategory === "NFC tags") &&
      (newComplaintHubNFCId.length === 0)
    ) {
      setCreateComplaintModalOpen(false);
      return Toast.show({
        type: 'error',
        text1: 'Incomplete form data',
        text2: 'Please enter the Hub / NFC Id',
        topOffset: 10,
      });
    }

    getHouseIdByEmail(loggedUser)
      .then((result) => {
        const formData = {
          category: newComplaintCategory,
          id: newComplaintHubNFCId,
          description : newComplaintDescription,
          HouseId: result.data.id[0].id,
          file: {
            uri: newComplaintImages.uri,
            type: newComplaintImages.type,
            name: newComplaintImages.fileName,
          },
        };
        submitComplaint(formData, loggedUser)
          .then(() => {
            setNewComplaintCategory("Other");
            setNewComplaintDescription("");
            setNewComplaintHubNFCId("");
            setNewComplaintImages("");
            setCreateComplaintModalOpen(false);
            return Toast.show({
              type: 'success',
              text1: 'Success!',
              text2: 'Your complaint has been submitted successfully',
              topOffset: 10,
            });
          })
          .catch((err) => {
            console.log("SUBMIT COMPLAINT ERROR: ", err);
            return Toast.show({
              type: 'error',
              text1: 'Oops!',
              text2: 'Something went wrong. Please try again.',
              topOffset: 10,
            });
          });
      });
  }

  const TableRow = (index, id, date, status) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.complaints.table.content.row}
        onPress={() => setViewComplaintModalOpen(true)}
      >
        <Text style={styles.complaints.table.content.row.index}>{index}</Text>
        <Text style={styles.complaints.table.content.row.id}>{id}</Text>
        <Text style={styles.complaints.table.content.row.date}>{date}</Text>
        <Text style={
          status === 'Viewed' ? styles.complaints.table.content.row.status.viewed :
            status === 'Not Viewed' ? styles.complaints.table.content.row.status.notViewed :
              status === 'Resolved' ? styles.complaints.table.content.row.status.resolved :
                styles.complaints.table.content.row.status.removed
        }>{status}</Text>
      </TouchableOpacity>
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
        style={styles.complaints.filter}
      >
        <View style={styles.complaints.filter.title}>
          <Text style={styles.complaints.filter.title.txt}>Complaint Filter</Text>
        </View>
        <View style={styles.complaints.filter.options}>
          <CheckBox
            checkedColor={'#228693'}
            containerStyle={{marginVertical: 0, paddingVertical: 4,}}
            textStyle={{color: '#042434', fontWeight: '100',}}
            title="Viewed"
            checked={viewedFilter}
            onPress={() => setViewedFilter(!viewedFilter)}
          />
          <CheckBox
            checkedColor={'#228693'}
            containerStyle={{marginVertical: 0, paddingVertical: 4,}}
            textStyle={{color: '#042434', fontWeight: '100',}}
            title="Not Viewed"
            checked={notViewedFilter}
            onPress={() => setNotViewedFilter(!notViewedFilter)}
          />
          <CheckBox
            checkedColor={'#228693'}
            containerStyle={{marginVertical: 0, paddingVertical: 4,}}
            textStyle={{color: '#042434', fontWeight: '100',}}
            title="Resolved"
            checked={resolvedFilter}
            onPress={() => setResolvedFilter(!resolvedFilter)}
          />
          <CheckBox
            checkedColor={'#228693'}
            containerStyle={{marginVertical: 0, paddingVertical: 4,}}
            textStyle={{color: '#042434', fontWeight: '100',}}
            title="Removed"
            checked={removedFilter}
            onPress={() => setRemovedFilter(!removedFilter)}
          />
        </View>
        <View style={styles.complaints.filter.dates}>
          <TouchableOpacity
            style={styles.complaints.filter.dates.date}
            onPress={() => setFromDateFilterOpen(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.complaints.filter.dates.date.texts}>
              <Text style={styles.complaints.filter.dates.date.texts.txtOne}>From</Text>
              <Text style={styles.complaints.filter.dates.date.texts.txtTwo}>{fromDateFilter.toDateString()}</Text>
              <DatePicker
                modal
                mode="date"
                minimumDate={LAUNCH}
                maximumDate={toDateFilter > TODAY ? toDateFilter : TODAY}
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
            style={styles.complaints.filter.dates.date}
            onPress={() => setToDateFilterOpen(true)}
          >
            <IconFontAwesome5
              name="calendar-alt"
              size={30}
              color={"#228693"}
            />
            <View style={styles.complaints.filter.dates.date.texts}>
              <Text style={styles.complaints.filter.dates.date.texts.txtOne}>To</Text>
              <Text style={styles.complaints.filter.dates.date.texts.txtTwo}>{toDateFilter.toDateString()}</Text>
              <DatePicker
                modal
                mode="date"
                minimumDate={LAUNCH < fromDateFilter ? LAUNCH : fromDateFilter}
                maximumDate={TODAY}
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
        <View style={styles.complaints.filter.last}>
          <Button
            type="solid"
            size='sm'
            color={'#228693'}
            buttonStyle={{borderRadius: 5, width: Responsive(20, WIDTH),}}
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
      <View style={styles.complaints.table.last.paginationContainer}>
        <IconFontAwesome
          name="arrow-left"
          size={15}
          color={activePage === 1 ? "#BFDDDE" : "#228693"}
          onPress={() => setActivePage(activePage === 1 ? activePage : activePage - 1)}
          style={styles.complaints.table.last.paginationContainer.arrowLeft}
        />
        {
          activePage - 1 > 0 && <TouchableOpacity
            style={styles.complaints.table.last.paginationContainer.prevPageNo}
            onPress={() => setActivePage(activePage - 1)}
          ><Text>{activePage - 1}</Text>
          </TouchableOpacity>
        }
        <Text style={styles.complaints.table.last.paginationContainer.pageNo}>{activePage}</Text>
        {
          activePage + 1 <= pageCount && <TouchableOpacity
            style={styles.complaints.table.last.paginationContainer.prevPageNo}
            onPress={() => setActivePage(activePage + 1)}
          ><Text>{activePage + 1}</Text>
          </TouchableOpacity>
        }
        <IconFontAwesome
          name="arrow-right"
          size={15}
          color={activePage < pageCount ? "#228693" : "#BFDDDE"}
          onPress={() => setActivePage(activePage === pageCount ? activePage : activePage + 1)}
          style={styles.complaints.table.last.paginationContainer.arrowRight}
        />
      </View>
    );
  }

  const CreateComplaintModal = () => {
    return (
      <Dialog
        isVisible={createComplaintModalOpen}
        onBackdropPress={() => setCreateComplaintModalOpen(false)}
        style={styles.complaints.createComplaintModal}
      >
        <View style={styles.complaints.createComplaintModal.title}>
          <Text style={styles.complaints.createComplaintModal.title.txt}>File a Complaint</Text>
        </View>
        <View style={styles.complaints.createComplaintModal.imageContainer}>
          <Image source={FileComplaintImg} style={styles.complaints.createComplaintModal.imageContainer.img}/>
        </View>
        <View style={styles.complaints.createComplaintModal.content}>
          <View style={styles.complaints.createComplaintModal.content.inputSet}>
            <Text style={styles.complaints.createComplaintModal.content.inputSet.label}>Complaint Category</Text>
            <SelectDropdown
              data={["Garbage hub", "NFC tags", "Mobile app", "Other"]}
              defaultValue="Other"
              defaultButtonText="Complaint type"
              onSelect={(selectedItem) => setNewComplaintCategory(selectedItem)}
              buttonTextAfterSelection={(selectedItem) => selectedItem}
              rowTextForSelection={(item) => item}
              buttonStyle={{
                width: '100%',
                height: Responsive(5, HEIGHT),
                borderWidth: 2,
                borderColor: '#E8F5F6',
                borderRadius: 10,
                marginVertical: 3,
                backgroundColor: 'white',
              }}
              buttonTextStyle={{fontSize: 12, color: '#707070', backgroundColor: 'white',}}
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
          {(newComplaintCategory === "Garbage hub" || newComplaintCategory === "NFC tags") && <View
            style={styles.complaints.createComplaintModal.content.inputSet}
          >
            <Text style={styles.complaints.createComplaintModal.content.inputSet.label}>Hub / NFC ID</Text>
            <TextInput
              style={styles.complaints.createComplaintModal.content.inputSet.txtInput}
              onChangeText={(txt) => setNewComplaintHubNFCId(txt)}
              value={newComplaintHubNFCId}
              keyboardType="text"
            />
          </View>}
          <View style={styles.complaints.createComplaintModal.content.inputSet}>
            <Text style={styles.complaints.createComplaintModal.content.inputSet.label}>Your Complaint</Text>
            <TextInput
              style={styles.complaints.createComplaintModal.content.inputSet.txtInput}
              onChangeText={(txt) => setNewComplaintDescription(txt)}
              value={newComplaintDescription}
              keyboardType="text"
            />
          </View>
          <View style={styles.complaints.createComplaintModal.content.inputSet}>
            <Text style={styles.complaints.createComplaintModal.content.inputSet.label}>Upload images</Text>
            <TouchableOpacity
              style={styles.complaints.createComplaintModal.content.inputSet.imgInput}
              onPress={() => openGallery()}
            >
              {newComplaintImages !== '' ? <>
                <Image
                  source={{uri: newComplaintImages.uri}}
                  style={{width: Responsive(14, HEIGHT), height: Responsive(14, HEIGHT),}}
                />
              </> : <>
                <FontAwesome5
                  name={'file-upload'}
                  size={18}
                  color={'#228693'}
                  style={styles.complaints.createComplaintModal.content.inputSet.imgInput.img}
                />
                <Text
                  style={styles.complaints.createComplaintModal.content.inputSet.imgInput.txt1}
                >Browse files</Text>
                <Text
                  style={styles.complaints.createComplaintModal.content.inputSet.imgInput.txt2}
                >Support JPEG and PNG files</Text>
              </>}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.complaints.createComplaintModal.last}>
          <TouchableOpacity
            style={styles.complaints.createComplaintModal.last.btn1}
            onPress={() => handleOnCreateComplaint()}
          >
            <Text style={styles.complaints.createComplaintModal.last.btn1.txt}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.complaints.createComplaintModal.last.btn2}>
            <Text style={styles.complaints.createComplaintModal.last.btn2.txt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    );
  }

  const ViewComplaintModal = () => {
    return (
      <Dialog
        isVisible={viewComplaintModalOpen}
        onBackdropPress={() => setViewComplaintModalOpen(false)}
        style={styles.complaints.viewComplaintModal}
      >
        <View style={styles.complaints.viewComplaintModal.cancelBtnContainer}>
          <AntDesign
            name={'closecircle'}
            size={15}
            color='#7CB6B8'
            onPress={() => setViewComplaintModalOpen(false)}
          />
        </View>
        <View style={styles.complaints.viewComplaintModal.imgContainer}>
          <Image source={ViewComplaintImg} style={styles.complaints.viewComplaintModal.imgContainer.img} />
        </View>
        <View style={styles.complaints.viewComplaintModal.dataFields}>
          <View style={styles.complaints.viewComplaintModal.dataFields.inputSet}>
            <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.label}>Complaint ID</Text>
            <View
              style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput}
            >
              <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput.txt}>
                {viewedComplaint.id}
              </Text>
            </View>
          </View>
          <View style={styles.complaints.viewComplaintModal.dataFields.inputSet}>
            <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.label}>Complaint Category</Text>
            <View
              style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput}
            >
              <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput.txt}>
                {viewedComplaint.category}
              </Text>
            </View>
          </View>
          <View style={styles.complaints.viewComplaintModal.dataFields.inputSet}>
            <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.label}>Complaint Status</Text>
            <View
              style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput}
            >
              <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput.txt}>
                {viewedComplaint.status}
              </Text>
            </View>
          </View>
          <View style={styles.complaints.viewComplaintModal.dataFields.inputSet}>
            <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.label}>Complaint Date</Text>
            <View
              style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput}
            >
              <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput.txt}>
                {viewedComplaint.date}
              </Text>
            </View>
          </View>
          <View style={styles.complaints.viewComplaintModal.dataFields.inputSet}>
            <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.label}>Complaint Description</Text>
            <View
              style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput2}
            >
              <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput.txt}>
                {viewedComplaint.description}
              </Text>
            </View>
          </View>
          <View style={styles.complaints.viewComplaintModal.dataFields.inputSet}>
            <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.label}>Uploaded Files</Text>
            <View style={styles.complaints.viewComplaintModal.dataFields.inputSet.imgContainer}>
              <TouchableOpacity
                style={styles.complaints.viewComplaintModal.dataFields.inputSet.imgContainer.btn}
                onPress={() => setViewImagesModalOpen(true)}
              >
                <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.imgContainer.btn.txt}>Open</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.complaints.viewComplaintModal.dataFields.inputSet}>
            <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.label}>Remarks</Text>
            <View
              style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput2}
            >
              <Text style={styles.complaints.viewComplaintModal.dataFields.inputSet.txtInput.txt}>
                {viewedComplaint.remarks}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.complaints.viewComplaintModal.last}>
          <TouchableOpacity style={styles.complaints.viewComplaintModal.last.btn}>
            <Text style={styles.complaints.viewComplaintModal.last.btn.txt}>Remove the complaint</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    );
  }

  const ViewImagesModal = () => {
    return (
      <Dialog
        isVisible={viewImagesModalOpen}
        onBackdropPress={() => setViewImagesModalOpen(false)}
        style={styles.complaints.viewImagesModal}
      >
        <View style={styles.complaints.viewImagesModal.top}>
          <Text style={styles.complaints.viewImagesModal.top.txt}>View images</Text>
          <AntDesign name='closecircle' color='#7CB6B8' size={15} onPress={() => setViewImagesModalOpen(false)} />
        </View>
        <View style={styles.complaints.viewImagesModal.body}>
          <View style={styles.complaints.viewImagesModal.body.btn}>
            <AntDesign name='caretleft' color='#7CB6B8' size={15} onPress={() => setViewImagesModalOpen(false)} />
          </View>
          <View style={styles.complaints.viewImagesModal.body.imgContainer}>
            <Image source={ViewComplaintImg} style={styles.complaints.viewImagesModal.body.imgContainer.img} />
          </View>
          <View style={styles.complaints.viewImagesModal.body.btn}>
            <AntDesign name='caretright' color='#7CB6B8' size={15} onPress={() => setViewImagesModalOpen(false)} />
          </View>
        </View>
      </Dialog>
    );
  }

  return (
    <View style={styles.complaints}>
      {Filter()}
      {ViewComplaintModal()}
      {CreateComplaintModal()}
      {ViewImagesModal()}
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
            <TouchableOpacity
              style={styles.complaints.table.last.buttonContainer.btn}
              onPress={() => setCreateComplaintModalOpen(true)}
            >
              <Image source={CreateImg} style={styles.complaints.table.last.buttonContainer.btn.icon}/>
              <Text style={styles.complaints.table.last.buttonContainer.btn.txt}>New Complaint</Text>
            </TouchableOpacity>
          </View>
          {Paginator()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  complaints: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      paddingLeft: 10,
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      txt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#042434',
      },
    },
    statistics: {
      paddingVertical: 5,
      paddingLeft: 20,
      flex: 4,
      display: 'flex',
      flexDirection: 'row',
      section1: {
        flex: 5,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        card: {
          backgroundColor: '#EDFBFC',
          borderRadius: 5,
          width: Responsive(18.5, WIDTH),
          height: Responsive(11, HEIGHT),
          display: 'flex',
          title: {
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 7,
      },
    },
    table: {
      padding: 5,
      flex: 8,
      paddingHorizontal: 23,
      display: 'flex',
      flexDirection: 'column',
      title: {
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
        flex: 8.5,
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
      last: {
        flex: 1.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        buttonContainer: {
          height: '80%',
          btn: {
            backgroundColor: '#228693',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 5,
            paddingHorizontal: 10,
            height: '100%',
            icon: {
              width: 16,
              height: 16,
            },
            txt: {
              color: 'white',
              fontWeight: '700',
              fontSize: 12,
              marginLeft: 10,
            },
          },
        },
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
    },
    filter: {
      title: {
        txt: {
          color: '#042434',
          fontSize: 15,
          fontWeight: '600',
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
    viewComplaintModal: {
      cancelBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      imgContainer: {
        display: 'flex',
        alignItems: 'center',
        img: {
          width: Responsive(25, WIDTH),
          height: Responsive(25, WIDTH),
        },
      },
      dataFields: {
        inputSet: {
          paddingVertical: 5,
          padding: 0,
          label: {
            color: '#042434',
            fontSize: 12,
          },
          txtInput: {
            borderWidth: 2,
            borderColor: '#E8F5F6',
            borderRadius: 10,
            height: Responsive(4, HEIGHT),
            color: '#707070',
            paddingLeft: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            txt: {
              fontSize: 10,
            },
          },
          txtInput2: {
            borderWidth: 2,
            borderColor: '#E8F5F6',
            borderRadius: 10,
            height: Responsive(8, HEIGHT),
            color: '#707070',
            paddingHorizontal: 10,
            paddingVertical: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            txt: {
              fontSize: 10,
            },
          },
          imgContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            btn: {
              backgroundColor: '#228693',
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 5,
              txt: {
                color: 'white',
                fontSize: 12,
              },
            },
          },
        },
      },
      last: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 10,
        btn: {
          backgroundColor: 'lightpink',
          paddingVertical: 3,
          paddingHorizontal: 6,
          borderRadius: 5,
          txt: {
            color: 'red',
          },
        },
      },
    },
    createComplaintModal: {
      title: {
        txt: {
          color: '#042434',
          fontWeight: '700',
          fontSize: 18,
        },
      },
      imageContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 10,
        img: {
          width: Responsive(30, WIDTH),
          height: Responsive(20, WIDTH),
        },
      },
      content: {
        inputSet: {
          paddingVertical: 5,
          padding: 0,
          label: {
            color: '#042434',
          },
          txtInput: {
            borderWidth: 2,
            borderColor: '#E8F5F6',
            borderRadius: 10,
            height: Responsive(6, HEIGHT),
            color: '#707070',
            paddingLeft: 10,
          },
          imgInput: {
            borderWidth: 2,
            borderColor: '#7CB6B8',
            borderStyle: 'dashed',
            borderRadius: 10,
            height: Responsive(15, HEIGHT),
            color: '#707070',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            img: {
              padding: 10,
              backgroundColor: '#E8F5F6',
              borderRadius: 100,
            },
            txt1: {
              color: '#228693',
              fontWeight: 'bold',
            },
            txt2: {
              fontSize: 10,
            },
          },
        },
      },
      last: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        btn1: {
          marginRight: 10,
          borderRadius: 5,
          paddingHorizontal: 20,
          paddingVertical: 8,
          backgroundColor: '#228693',
          txt: {
            color: 'white',
            fontWeight: 'bold',
          },
        },
        btn2: {
          borderWidth: 1,
          borderColor: '#E9E8EF',
          borderRadius: 5,
          paddingHorizontal: 20,
          paddingVertical: 8,
          txt: {
            color: '#228693',
            fontWeight: 'bold',
          },
        }
      },
    },
    viewImagesModal: {
      top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        txt: {
          color: '#042434',
        },
      },
      body: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        btn: {
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        imgContainer: {
          flex: 10,
          height: Responsive(30, HEIGHT),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          img: {
            width: Responsive(30, HEIGHT),
            height: Responsive(30, HEIGHT),
          },
        },
      },
    },
  },
});

export default Complaints;
