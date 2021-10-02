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
      <StatusBar barStyle={'light-content'} />
      <View style={styles.main}>
        <Image style={styles.img} source={require('../../Assets/logoo.png')} />
        <View style={styles.viewTextSignIn}>
          <Text style={styles.textSignIn}>
            الآن أصبح من السهل الحصول على المعلومات
          </Text>
        </View>
        <ActivityIndicator size="large" style={styles.loader} />
        {/* <Loader active={true} /> */}
        <View style={styles.viewTouchableSignUp}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.textTouchable}>إبدأ الان</Text>
          </TouchableOpacity>
          <View style={styles.viewSignUp}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.textSignUp}> تسجيل الدخول</Text>
            </TouchableOpacity>
            <Text style={styles.textCompte}>لديك حساب؟</Text>
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
    alignSelf: 'center',
    resizeMode: 'contain',
    width: windowWidth * 0.7,
    height: windowHeight * 0.65,
    // backgroundColor:'red',
  },
  viewTextSignIn: {
    flex: 1,
    // backgroundColor: 'red',
  },
  textSignIn: {
    alignSelf: 'center',
  },
  loader: {
    position: 'absolute',
    top: windowHeight * 0.72,
    alignSelf: 'center',
  },
  viewTouchableSignUp: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  viewSignUp: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    top: 15,
  },
  textSignUp: {
    fontWeight: 'bold',
    color: greenColor,
    fontSize: 16,
  },
  button: {
    backgroundColor: greenColor,
    borderRadius: 50,
    width: windowWidth / 2,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textTouchable: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textCompte: {
    fontSize: 16,
  },
});

export default Start;
