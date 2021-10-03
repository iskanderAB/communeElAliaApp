/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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
} from 'react-native';
import greenColor from '../../colors/Colors';
import StepIndicator from 'react-native-step-indicator';
import {RadioButton} from 'react-native-paper';
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

function InstructionRequest(props) {
  const [naturalPerson, setNaturalPerson] = useState(true);
  const [moralPerson, setMoralPerson] = useState(false);

  const [NameLastName, setNameLastName] = useState('');
  const [adress, setAdress] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');

  const [SocialName, setSocialName] = useState('');
  const [fax, setFax] = useState('');

  //  const [fullname,setFullname] = useState('');
  const selectMoral = () => {
    setMoralPerson(true);
    setNaturalPerson(false);
  };

  const selectNatural = () => {
    setMoralPerson(false);
    setNaturalPerson(true);
  };

  const moveToNextPage = () => {
    props.navigation.navigate('RequestInfos');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle={'dark-content'} />
        <View style={styles.main}>
          <View style={styles.viewInstructions}>
            <Text style={styles.textRequest}>
              إرشادات خاصة بطالب النفاذ إلى المعلومة :{' '}
            </Text>
          </View>
          <View style={styles.viewStepIndicator}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={0}
              labels={labels}
              stepCount={3}
            />
          </View>
          <View style={styles.viewCheckBoxs}>
            <View style={styles.viewCheckBox}>
              <Text style={styles.textCheckbox}> شخص معنوي</Text>
              <RadioButton
                value="first"
                status={moralPerson ? 'checked' : 'unchecked'}
                onPress={() => selectMoral()}
              />
            </View>
            <View style={styles.viewCheckBox}>
              <Text style={styles.textCheckbox}>شخص طبيعي </Text>
              <RadioButton
                value="first"
                status={naturalPerson ? 'checked' : 'unchecked'}
                onPress={() => selectNatural()}
              />
            </View>
          </View>
          {!moralPerson ? (
            <View style={styles.viewInputs}>
              <TextInput
                style={styles.input}
                onChangeText={setNameLastName}
                value={NameLastName}
                placeholder="الاسم و اللقب"
                placeholderTextColor="gray" 
              />
              <TextInput
                style={styles.input}
                onChangeText={setAdress}
                value={adress}
                placeholder="العنوان"
                placeholderTextColor="gray" 
              />
              <TextInput
                style={styles.input}
                onChangeText={setNum}
                value={num}
                placeholder="الهاتف"
                keyboardType="numeric"
                placeholderTextColor="gray" 
              />
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="العنوان الالكتروني"
                placeholderTextColor="gray" 
              />

            </View>
          ) : (
            <View style={styles.viewInputs}>
              <TextInput
                style={styles.input}
                onChangeText={setNameLastName}
                value={NameLastName}
                placeholder="التسمية الإجتماعية"
                placeholderTextColor ={'#9B9999'}
              />
              <TextInput
                style={styles.input}
                onChangeText={setAdress}
                value={adress}
                placeholder="عنوان المقر الإجتماعي"
                placeholderTextColor ={'#9B9999'}
              />
              <TextInput
                style={styles.input}
                onChangeText={setNum}
                value={num}
                placeholder="الهاتف"
                keyboardType="numeric"
                placeholderTextColor ={'#9B9999'}
              />
              <TextInput
                style={styles.input}
                onChangeText={setFax}
                value={fax}
                placeholder="الفاكس"
                keyboardType="numeric"
                placeholderTextColor ={'#9B9999'}
              />
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="العنوان الالكتروني"
                placeholderTextColor ={'#9B9999'}
              />
            </View>
          )}
          <TouchableOpacity style={styles.TouchableNextPageArrow} 
                            onPress={()=> props.navigation.navigate('RequestInfos', {NameLastName, fax, email , num, adress,moralPerson,naturalPerson})}
          >
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
                    <Text style={styles.textNextPage}>التالي</Text>
                  </View>
                </View>
              </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
    color : 'black'
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
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding : '2%'
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
    flex: 3,
    justifyContent: 'flex-start',
    color : 'black',
    padding : 1 ,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    width : '95%',
    alignSelf : 'center',
    borderRadius : 10,
    backgroundColor: 'white',
    opacity : 0.8
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    color : 'black',
    borderWidth : 1,
    borderColor : 'gray',
    borderRadius : 10
    // padding: 20,
    // paddingBottom: '20%',
  },
  TouchableNextPageArrow: {
    backgroundColor: greenColor,
    width: '50%',
    height: 60,
    borderTopStartRadius : 25 ,
    borderBottomStartRadius : 25 ,
    alignSelf: 'flex-end',
    top: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom : '15%'
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
});

export default InstructionRequest;
