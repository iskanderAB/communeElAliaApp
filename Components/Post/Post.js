import React, {useState, useEffect} from 'react';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {Button, Dialog, Portal} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Linking,
  TouchableHighlight,
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import moment from 'moment';
// import greenColor from '../../colors/Colors';
const greenColor = '#019875'
const Post = ({temp, description, date, num,fullname,formula , status ,deletePost}) => {
  const [love, setLove] = useState(false);
  const [visible, setVisible] = React.useState(false);

  return (
    <>  
    <Card style={styles.post} onPress={() => 0} onLongPress={()=>setVisible(true)}>
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
          : {moment(date).format('ll')}
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
            {fullname}{' '}
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
            {formula}
            {' '}
          </Text>
          {status ? 
            <Ionicons name={'checkmark-done-outline'} size={30}  color={greenColor} />
            :
            <Ionicons name={'close-sharp'} size={30}  color={'red'} />
          }
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
          عندك {moment().diff(date,'days')} ايام{' '}
        </Text>
      </Card.Actions>
    </Card>
    <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Content>
          <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => setVisible(false)}>
              <View style={{flexDirection : 'row-reverse' ,justifyContent :'space-between' , alignItems:'center',paddingVertical : '5%'}}>
                <Text style={styles.itemsAlert}>     تقديم شكوى    </Text>
                <Ionicons name={'clipboard-sharp'} size={25}  color={'black'} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => {
                  deletePost();
                  setVisible(false);
              }}>
              <View style={{flexDirection : 'row-reverse' ,justifyContent :'space-between' , alignItems:'center',paddingVertical : '5%'}}>
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
    </>
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
