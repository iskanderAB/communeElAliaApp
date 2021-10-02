import React, {useState, useEffect} from 'react';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
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
// import greenColor from '../../colors/Colors';
const greenColor = '#019875'
const Post = ({temp, description, date, num}) => {
  const [love, setLove] = useState(false);


  return (
    <Card style={styles.post} onPress={() => 0}>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 20,
          paddingRight: '3%',
          marginBottom: '3%',
          color: greenColor,
          fontWeight: 'bold',
          justifyContent: 'center',

        }}>
        {' '}
        {`  المطلب عدد° ${num}  في`}{' '}
        <Text
          style={{
            fontSize: 18,
            color: 'gray',
            fontWeight: '300',
            justifyContent: 'center',
            textShadowRadius: 1,
          }}>
          : {date}
        </Text>
      </Text>
      <Card.Content style={{paddingHorizontal: 5}}>
        <>
          <Text
            style={{
              textAlign: 'right',
              color: 'gray',
              margin: '3%',
            }}>
            {' '}
            iskander@gmail.com{' '}
          </Text>
          <Paragraph
            style={{
              textAlign: 'right',
              paddingHorizontal: '3%',
            }}>
            {' '}
            {description}{' '}
          </Paragraph>
          <Text
            style={{
              color: 'red',
              marginHorizontal: '3%',
              textDecorationLine: 'underline',
              textDecorationStyle: 'dotted',
              textDecorationColor: 'red',
            }}>
            {' '}
            نسخة ورقية{' '}
          </Text>
        </>
      </Card.Content>
      <Card.Actions
        style={{padding: 0, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text
          style={{
            paddingLeft: 0,
            color: 'gray',
            marginTop: '2%',
            textAlign: 'right',
            padding: '3%',
          }}>
          {' '}
          عندك {temp} ايام{' '}
        </Text>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  post: {
    marginTop: 10,
    color: 'black',
    paddingVertical: '3%',
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
export default Post;
