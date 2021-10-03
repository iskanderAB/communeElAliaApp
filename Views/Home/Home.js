/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState ,useEffect} from 'react';
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
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Searchbar} from 'react-native-paper';
import greenColor from '../../colors/Colors';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import axios from 'axios';


import Post from '../../Components/Post/Post';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({item}) => <Item title={item.title} />;

const Home = props => {
  const [refreshing, setRefreshing] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const [searchQuery, setSearchQuery] = React.useState('');

  const [focus , setFocus] = useState(false);
  const [data, setData] = useState([]);


  const onChangeSearch = query => setSearchQuery(query);

  const onRefresh = React.useCallback(async() => {
    await axios.get('http://192.168.1.210:8000/api/demands.json').then(res => {
      setData(res.data)
    })
    .catch(e=> {
      alert(JSON.stringify(e.message))
    }) ;
    setRefreshing(false);
    //alert(token)
  }, []);

  useEffect(()=> {
      console.log('succes =>',data)
  },[data])

  useEffect(async () => {
      await axios.get('http://192.168.1.210:8000/api/demands.json').then(res => {
        setData(res.data)
      })
      .catch(e=> {
        alert(JSON.stringify(e.message))
      }) ;
 
  }, [])

  async function deletePost(id) {
    await axios.delete(`http://192.168.1.210:8000/api/demands/`+id)
                .then(res=> {
                  Alert.alert( 
                    'بلدية العالية '
                    , 
                    " تم محو المطلب عدد  " +id 
                  )
                  const newData = data.filter(v => v.id != id)
                  setData(newData);
                })
                .catch(e => {
                  alert("هناك مشكل اتصل بل البلدية ♥ ")
                  console.log('errro' , e)
                })
  }

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
            <TouchableOpacity
              onPress={() =>
                Alert.alert(' ', 'هل تريد الخروج حقاً ؟ ', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => props.navigation.navigate('Login'),
                  },
                ])
              }>
              <Icon
                name="logout"
                size={25}
                color={greenColor}
                // style={styles.arrow}
              />
            </TouchableOpacity>
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

          {data && 
            data.filter(v => v.description.includes(searchQuery) || v.fullname.includes(searchQuery)).map(v => {
              return <Post deletePost={() => {
                deletePost(v.id);

              }
                } key={v.id}  num={v.id} date={v.createdAt} formula={v.formula}  fullname={v.fullname} description={v.description} status={v.status}/>
            })
          }
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
});

export default Home;
