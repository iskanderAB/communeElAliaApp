import React, {useState, useEffect} from 'react';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Linking,
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import moment from 'moment';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
// import greenColor from '../../colors/Colors';
const greenColor = '#019875'
const Notif = ({temp, description, date, num,setVisible}) => {
  return (
    <Card style={styles.post} onPress={() => 0}>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 15,
          paddingRight: '3%',
          marginBottom: '3%',
          color: 'black',
          fontWeight: 'bold',
          justifyContent: 'center',

        }}>
        {' جاوبوك على المطلب نومرو 10 '}
      </Text>
      <Card.Content style={{paddingHorizontal: 5 , justifyContent :'space-between' ,flexDirection:'row'}}>
            <Ionicons 
              name='ellipsis-vertical-outline' 
              style={{marginTop : -12}}  size={25}  
              color={'gray'} 
              onPress={()=> setVisible(true)}
              />
            <Text> 12/02/2030 </Text>
      </Card.Content>

    </Card>
  );
};

const styles = StyleSheet.create({
  post: {
    marginTop: 10,
    color: 'black',
    paddingVertical: '3%',
    backgroundColor : '#ECEBEB',
    borderRadius : 20
  },
  button: {
    padding: 6,
    paddingHorizontal: 8,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#50aeff',
  },
  text: {
    color: '#33A8FF',
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
export default Notif;
