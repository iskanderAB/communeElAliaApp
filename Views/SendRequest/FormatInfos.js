/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import SweetAlert from 'react-native-sweet-alert';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  VirtualizedList,
  ToastAndroid,
} from 'react-native';
import greenColor from '../../colors/Colors';
import StepIndicator from 'react-native-step-indicator';
import {RadioButton, Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
// import Loader from '../../Components/Loader/Loader';
// import CheckBox from '@react-native-community/checkbox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const labels = ['', '', '', ''];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: greenColor,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: greenColor,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: greenColor,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: greenColor,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: greenColor,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: greenColor,
};

function RequestInfos(props) {
  const [readInfos, setReadInfo] = useState(false);
  const [copyPaper, setCopyPaper] = useState(false);
  const [copyNumeric, setCopyNumeric] = useState(false);
  const [getSomeInfos, setGetSomeInfos] = useState(false);

  const displayFinallyToast = () => {
    if (readInfos || copyPaper || copyNumeric || getSomeInfos) {
      SweetAlert.showAlertWithOptions(
        {
          title: 'لقد تم تسجيل مطلبك بنجاح',
          subTitle: '',
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#000',
          otherButtonTitle: 'Cancel',
          otherButtonColor: '#dedede',
          style: 'success',
          cancellable: true,
        },
        callback => console.log('callback'),
      );
    } else {
      ToastAndroid.showWithGravity(
        'الرجاء اختيار خيار واحد على الأقل',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle={'dark-content'} />
        <View style={styles.main}>
          <View style={styles.viewInstructions}>
            <Text style={styles.textRequest}>
              صيغة النفاذ إلى المعلومة المطلوب النفاذ إليها :{' '}
            </Text>
          </View>
          <View style={styles.viewStepIndicator}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={2}
              labels={labels}
              stepCount={4}
            />
          </View>
          <View style={styles.viewInputs}>
            <View style={styles.viewTextCheckbox}>
              <View style={{justifyContent: 'center'}}>
                <Checkbox
                  status={readInfos ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setReadInfo(!readInfos);
                  }}
                  color={greenColor}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text>الاطلاع على المعلومة على عين المكان</Text>
              </View>
            </View>
            <View style={styles.viewTextCheckbox}>
              <View style={{justifyContent: 'center'}}>
                <Checkbox
                  status={copyPaper ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCopyPaper(!copyPaper);
                  }}
                  color={greenColor}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text>الحصول على نسخة ورقية من المعلومة</Text>
              </View>
            </View>
            <View style={styles.viewTextCheckbox}>
              <View style={{justifyContent: 'center'}}>
                <Checkbox
                  status={copyNumeric ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCopyNumeric(!copyNumeric);
                  }}
                  color={greenColor}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text>الحصول على نسخة إلكترونية من المعلومة</Text>
              </View>
            </View>
            <View style={styles.viewTextCheckbox}>
              <View style={{justifyContent: 'center'}}>
                <Checkbox
                  status={getSomeInfos ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setGetSomeInfos(!getSomeInfos);
                  }}
                  color={greenColor}
                />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text>الحصول على مقتطفات من المعلومة</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableNextPageArrow}
              onPress={() => displayFinallyToast()}>
              <View style={styles.viewNextPageArrow}>
                <View style={styles.viewArrow}>
                  <Icon
                    name="arrow-left-circle"
                    size={30}
                    color={'white'}
                    style={styles.arrow}
                  />
                </View>
                <View style={styles.viewNextPage}>
                  <Text style={styles.textNextPage}>انهاء</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
  },
  viewInstructions: {
    flex: 1,
    // backgroundColor: 'yellow',
    padding: 20,
  },
  viewStepIndicator: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  textRequest: {
    fontSize: 25,
  },
  viewCheckBoxs: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  viewCheckBox: {
    // flex: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {},
  textCheckbox: {
    fontSize: 18,
    textAlign: 'center',
    top: 4,
    right: 5,
  },
  viewInputs: {
    flex: 5,
    width: windowWidth,
    justifyContent: 'flex-start',
    // backgroundColor: 'yellow',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    // padding: 20,
    // paddingBottom: '20%',
  },
  TouchableNextPageArrow: {
    backgroundColor: greenColor,
    width: '50%',
    height: 60,
    borderRadius: 10,
    alignSelf: 'flex-end',
    top: 30,
    justifyContent: 'center',
    flexDirection: 'row',

    // justifyContent: 'flex-end',
  },
  viewNextPageArrow: {
    flex: 1,
    flexDirection: 'row',
  },
  viewNextPage: {
    flex: 1,
    justifyContent: 'center',
    right: '50%',
  },
  textNextPage: {
    fontSize: 18,
    color: 'white',
  },
  viewArrow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {},
  viewTextCheckbox: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: windowWidth - 30,
    alignContent: 'center',
    // backgroundColor: 'red',
  },
});

export default RequestInfos;
