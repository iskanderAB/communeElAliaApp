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
import {Provider ,DefaultTheme} from 'react-native-paper';
import greenColor from './colors/Colors';

import Routes from './Components/Routes/Routes';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: greenColor,
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider theme={theme}>
      <SafeAreaView style={styles.main}>
        <Routes />
      </SafeAreaView>
    </Provider>
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
