/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
} from 'react-native';
import greenColor from '../../colors/Colors';
// import Loader from '../../Components/Loader/Loader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Start(props) {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.main}>
        <Image
          style={styles.img}
          source={require('../../Assets/start_img.png')}
        />
        <View style={styles.viewText}>
          <Text style={styles.text}>
            الآن أصبح من السهل الحصول على المعلومات
          </Text>
        </View>
        <ActivityIndicator size="large" style={styles.loader} />
        {/* <Loader active={true} /> */}
        <View style={styles.viewTouchableStart}>
          <TouchableOpacity
            style={styles.touchableStartNow}
            onPress={() => props.navigation.navigate('Language')}>
            <Text style={styles.textTouchableStartNow}>إبدأ الان</Text>
          </TouchableOpacity>
          <View style={styles.viewSignin}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.textSignin}> تسجيل الدخول</Text>
            </TouchableOpacity>
            <Text style={styles.textAccount}>لديك حساب؟</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowHeight,
  },
  img: {
    top: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
    width: windowWidth * 0.6,
    height: windowHeight * 0.6,
    // backgroundColor: 'blue',
  },
  viewText: {
    flex: 0.5,
    top: 20,
    // backgroundColor: 'yellow',
    justifyContent: 'flex-start',
  },
  text: {
    alignSelf: 'center',
  },
  loader: {
    position: 'absolute',
    top: windowHeight * 0.7,
    alignSelf: 'center',
  },
  viewTouchableStart: {
    flex: 1,
    // backgroundColor: 'red',
    top: '10%',
  },
  touchableStartNow: {
    // flex: 1,
    backgroundColor: greenColor,
    borderRadius: 50,
    width: windowWidth / 2,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textTouchableStartNow: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  viewSignin: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
    // backgroundColor: 'green',
  },
  textSignin: {
    fontWeight: 'bold',
    color: greenColor,
    fontSize: 16,
  },
  textAccount: {
    fontSize: 16,
  },
});

export default Start;
