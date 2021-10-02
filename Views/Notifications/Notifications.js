/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {Avatar, Searchbar} from 'react-native-paper';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import greenColor from '../../colors/Colors';
import Notif from '../../Components/Notif/Notif';
import Post from '../../Components/Post/Post';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({item}) => <Item title={item.title} />;

const Notifications = () => {
  const [refreshing, setRefreshing] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const [searchQuery, setSearchQuery] = React.useState('');
  const [focus, setFocus] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const onChangeSearch = query => setSearchQuery(query);
  const onRefresh = React.useCallback(() => {
    setRefreshing(false);
    //alert(token)
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={
            !focus
              ? {
                  flexDirection: 'row',
                  width: '100%',
                  paddingHorizontal: '2%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: '2%',
                }
              : {flexDirection: 'row', width: '100%'}
          }>
          {!focus ? (
            <Avatar.Icon size={35} backgroundColor={greenColor} icon="face" />
          ) : null}
          <Searchbar
            placeholder="البحث عن مطلب ..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={
              !focus
                ? {
                    height: '80%',
                    width: '85%',
                    borderRadius: 50,
                    textAlign: 'right',
                  }
                : {
                    height: '100%',
                    width: '100%',
                    textAlign: 'right',
                  }
            }
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={true}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              style={{height: '100%', backgroundColor: 'red'}}
            />
          }>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              minHeight: windowHeight,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              padding: '5%',
            }}>
            <Notif setVisible={setVisible} />
          </View>
          <Text
            style={{
              padding: '10%',
              textAlign: 'center',
              width: '75%',
              alignSelf: 'center',
            }}>
            Copy Right Iskandr and Amine created with ♥
          </Text>
        </ScrollView>
      </View>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Content>
          <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => setVisible(false)}>
              <View style={{flexDirection : 'row-reverse' ,justifyContent :'space-between' , alignItems:'center'}}>
                <Text style={styles.itemsAlert}>    نحي الاشعارات   </Text>
                <Ionicons name={'notifications-off'} size={25}  color={'black'} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => setVisible(false)}>
              <View style={{flexDirection : 'row-reverse' ,justifyContent :'space-between' , alignItems:'center'}}>
                <Text style={styles.itemsAlert}>    افسخها  </Text>
                <Ionicons name={'trash'} size={25}  color={'black'} />
              </View>
            </TouchableHighlight>
          </Dialog.Content>
          {/* <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Done</Button>
          </Dialog.Actions> */}
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F4F4',
    width: '100%',
    height: '100%',
    paddingHorizontal: 0,
  },
  header: {
    //backgroundColor : 'red',
    height: 50,
    width: '100%',
    marginTop: 50,
    paddingHorizontal: 10,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  line: {
    top: 3,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    marginLeft: 5,
  },
  itemsAlert : {
      paddingVertical : 20 , 
      fontSize : 20,
  }
});

export default Notifications;
