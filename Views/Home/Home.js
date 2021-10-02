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
  FlatList,
} from 'react-native';
import {FAB} from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({item}) => <Item title={item.title} />;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const DATA = [
    {
      id: '0',
      title: 'First Item',
    },
    {
      id: '1',
      title: 'Second Item',
    },
    {
      id: '2',
      title: 'Third Item',
    },
    {
      id: '3',
      title: 'First Item',
    },
    {
      id: '4',
      title: 'Second Item',
    },
    {
      id: '5',
      title: 'Third Item',
    },
    {
      id: '6',
      title: 'First Item',
    },
    {
      id: '7',
      title: 'Second Item',
    },
    {
      id: '8',
      title: 'Third Item',
    },
    {
      id: '9',
      title: 'First Item',
    },
    {
      id: '10',
      title: 'Second Item',
    },
    {
      id: '11',
      title: 'Third Item',
    },
    {
      id: '12',
      title: 'First Item',
    },
    {
      id: '13',
      title: 'Second Item',
    },
    {
      id: '14',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 32,
    // paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default App;
