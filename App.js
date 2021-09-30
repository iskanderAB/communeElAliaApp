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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Splash from './Views/Splash/Splash';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.main}>
      <Splash />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 50,
    width: windowWidth / 2.5,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textTouchable: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
