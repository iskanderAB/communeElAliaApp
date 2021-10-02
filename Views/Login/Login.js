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
import greenColor from '../../colors/Colors';
// import Loader from '../../Components/Loader/Loader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login(props) {
  const [email, setEmail] = useState('');
  const [focus, setFocus] = useState(false);
  const [pwd, setPwd] = useState('');

  const onChangeEmail = value => {
    setEmail(value);
  };

  const onChangePwd = value => {
    setPwd(value);
  };

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
          <Image
            style={focus ? styles.smallImg : styles.bigImg}
            source={require('../../Assets/signin_img.png')}
          />
          <View style={styles.viewTextInputsSignIn}>
            <View style={styles.viewTextSignIn}>
              <Text style={styles.textSignIn}>تسجيل الدخول</Text>
            </View>
            <View style={styles.viewInputsTouchables}>
              <View style={styles.viewInputs}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeEmail}
                  value={email}
                  placeholder="البريد الإلكتروني"
                  onFocus={() => setFocus(true)}
                />
                <TextInput
                  style={styles.input}
                  onChangeText={onChangePwd}
                  value={pwd}
                  placeholder="كلمه السر"
                  onFocus={() => setFocus(true)}
                />
              </View>
              <View style={styles.viewTouchablesSignin}>
                <TouchableOpacity
                  style={styles.TouchableSignIn}
                  onPress={() => props.navigation.navigate('Language')}>
                  <Text style={styles.TouchableTextSignIn}> تسجيل الدخول</Text>
                </TouchableOpacity>
                <View style={styles.viewSignUp}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('Signup')}>
                    <Text style={styles.textSignUp}> تسجيل</Text>
                  </TouchableOpacity>
                  <Text style={styles.textCompte}>لديك حساب؟</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <ActivityIndicator size="large" style={styles.loader} /> */}
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
    // backgroundColor:'red',
  },
  smallImg: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: windowWidth * 0.7,
    height: windowHeight * 0.3,
    top: 10,
  },
  viewTextInputsSignIn: {
    flex: 1,
    // backgroundColor: 'red',
  },
  viewTextSignIn: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  TouchableSignIn: {
    width: windowWidth * 0.5,
    height: 50,
    backgroundColor: greenColor,
    justifyContent: 'center',
  },
  viewInputsTouchables: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  viewInputs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'yellow',
  },
  viewTouchablesSignin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: '10%',
    // backgroundColor: 'red',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: windowWidth * 0.7,
    color: 'black',
  },
  textSignIn: {
    alignSelf: 'center',
    color: greenColor,
    fontSize: 25,
    fontWeight: 'bold',
  },
  loader: {
    position: 'absolute',
    top: windowHeight * 0.72,
    alignSelf: 'center',
  },
  textSignUp: {
    fontWeight: 'bold',
    fontSize: 16,
    color: greenColor,
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
  TouchableTextSignIn: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
  viewSignUp: {
    flex: 4,
    flexDirection: 'row',
    alignSelf: 'center',
    top: 15,
    // backgroundColor: 'red',
  },
});

export default Login;
