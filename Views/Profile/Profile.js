/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import greenColor from '../../colors/Colors';
import LinearGradient from 'react-native-linear-gradient';
// import Loader from '../../Components/Loader/Loader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Profile(props) {
  // useEffect(() => {
  //   console.log('props.route.name => ', props.route.name);
  //   setFocus(false);
  //   setEmail('');
  //   setPwd('');
  // }, [props.route.name]);
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle={'dark-content'} />
        <View style={styles.main}>
          <LinearGradient
            colors={[greenColor, 'green', '#3CFF33']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}>
            <Image
              style={{
                // borderWidth: 2,
                width: windowWidth / 3,
                height: windowWidth / 3,
                borderRadius: windowWidth / 3,
                alignSelf: 'center',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                top: '60%',
                borderColor: greenColor,
                shadowOpacity: 50,
                backgroundColor: 'white',
                borderWidth: 1,
              }}
              source={require('../../Assets/users.png')}
            />
          </LinearGradient>

          {/* <Image
            style={focus ? styles.smallImg : styles.bigImg}
            source={require('../../Assets/signin_img.png')}
          /> */}
          {/* <ActivityIndicator size="large" style={styles.loader} /> */}
          <View
            style={{
              top: '20%',
              padding: 1,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 10,
              elevation: 3,
              width: '95%',
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: 'white',
              opacity: 0.8,
              //   backgroundColor: 'red'
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth - 50,
                alignSelf: 'center',
              }}>
              <View
                style={{
                  height: 50,
                  flex: 1,
                  //   width: windowWidth / 2,
                  justifyContent: 'center',

                  // alignSelf: 'flex-start',
                  //   right: 0,
                  //   alignItems: 'flex-start',
                }}>
                <Text>أمين</Text>
              </View>
              <View
                style={{
                  //   backgroundColor: 'red',
                  height: 50,
                  width: windowWidth / 2,
                  justifyContent: 'center',
                  flex: 1,
                  //   alignSelf: 'flex-start',
                  //   right: 0,
                  // alignItems: 'flex-start',
                }}>
                <Text>الإسم</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth - 50,
                alignSelf: 'center',
              }}>
              <View
                style={{
                  //   backgroundColor: 'red',
                  height: 50,
                  width: windowWidth / 2,
                  justifyContent: 'center',
                  flex: 1,
                  //   alignSel
                  //   alignSelf: 'flex-start',
                  //   right: 0,
                  // alignItems: 'flex-start',
                }}>
                <Text>الفقير</Text>
              </View>
              <View
                style={{
                  //   backgroundColor: 'red',
                  height: 50,
                  width: windowWidth / 2,
                  justifyContent: 'center',
                  flex: 1,
                  //   alignSel
                  //   alignSelf: 'flex-start',
                  //   right: 0,
                  // alignItems: 'flex-start',
                }}>
                <Text>اللقب</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth - 50,
                alignSelf: 'center',
              }}>
              <View
                style={{
                  //   backgroundColor: 'red',
                  height: 50,
                  width: windowWidth / 2,
                  justifyContent: 'center',
                  flex: 1,
                  //   alignSel
                  //   alignSelf: 'flex-start',
                  //   right: 0,
                  // alignItems: 'flex-start',
                }}>
                <Text>نهج الخوارزمي عدد 2</Text>
              </View>
              <View
                style={{
                  //   backgroundColor: 'red',
                  height: 50,
                  width: windowWidth / 2,
                  justifyContent: 'center',
                  flex: 1,
                  //   alignSel
                  //   alignSelf: 'flex-start',
                  //   right: 0,
                  // alignItems: 'flex-start',
                }}>
                <Text>العنوان</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth - 50,
                alignSelf: 'center',
              }}>
              <View
                style={{
                  //   backgroundColor: 'red',
                  height: 50,
                  width: windowWidth / 2,
                  justifyContent: 'center',
                  flex: 1,
                  //   alignSel
                  //   alignSelf: 'flex-start',
                  //   right: 0,
                  // alignItems: 'flex-start',
                }}>
                <Text>aminefkaier@gmail.com</Text>
              </View>
              <View
                style={{
                  //   backgroundColor: 'red',
                  height: 50,
                  width: windowWidth / 2,
                  justifyContent: 'center',
                  flex: 1,
                  //   alignSel
                  //   alignSelf: 'flex-start',
                  //   right: 0,
                  // alignItems: 'flex-start',
                }}>
                <Text>العنوان الإلكتروني</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', top: '60%'}}>
            <TouchableOpacity
              style={styles.TouchableNextPageArrowReturn}
              onPress={() => props.navigation.navigate('Home')}>
              <View style={styles.viewNextPageArrow}>
                <View style={styles.viewNextPage}>
                  <Text style={styles.textNextPage}>رجوع</Text>
                </View>
                <View style={styles.viewArrow}>
                  <Icon
                    name="arrow-right-circle"
                    size={30}
                    color={'white'}
                    style={styles.arrow}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableNextPageArrow}
              //   onPress={() => props.navigation.navigate('FormatInfos')}
            >
              <View style={styles.viewNextPageArrow}>
                <View style={styles.viewArrow}>
                  <Icon
                    name="settings"
                    size={30}
                    color={'white'}
                    style={styles.arrow}
                  />
                </View>
                <View style={styles.viewNextPageSettings}>
                  <Text style={styles.textNextPage}>تغيير</Text>
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
  bigImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: windowWidth * 0.7,
    height: windowHeight * 0.5,
    top: 10,
  },
  TouchableNextPageArrow: {
    backgroundColor: greenColor,
    width: '30%',
    height: 60,
    borderTopStartRadius: 25,
    borderBottomStartRadius: 25,
    // alignSelf: 'flex-start',
    left: '40%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '15%',

    // justifyContent: 'flex-end',
  },
  TouchableNextPageArrowReturn: {
    backgroundColor: greenColor,
    width: '30%',
    height: 60,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: '15%',
  },
  viewNextPageArrow: {
    flex: 1,
    flexDirection: 'row',
  },
  viewArrow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewNextPage: {
    flex: 1,
    justifyContent: 'center',
    // right: '50%',
    alignSelf: 'center',
    left: 10,
  },
  viewNextPageSettings: {
    flex: 1,
    justifyContent: 'center',
    // right: '50%',
    alignSelf: 'center',
    right: 10,
  },
  textNextPage: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default Profile;
