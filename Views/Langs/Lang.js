import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import greenColor from '../../colors/Colors';
import {RadioButton, Text} from 'react-native-paper';

const Lang = () => {
  const [value, setValue] = React.useState('AR');
  
  return (
    <View style={styles.main}>
      <View style={{...styles.icon, left: '45%', top: '10%'}} />
      <View style={{...styles.icon, left: '55%', top: '15%'}} />
      <Text
        style={{
          ...styles.text,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop : '10%'
        }}>
        اختار اللغة
      </Text>
      <Text style={{...styles.text, textAlign: 'center', fontSize: 16}}>
        {' '}
        تعمل مزية اختار لغة{' '}
      </Text>
      <View style={{flex: 1, 
                    paddingHorizontal : '5%',
                    alignContent: 'center',
                    paddingTop : '10%'
                    }}>
        <View >
          <RadioButton.Group
          onValueChange={newValue => setValue(newValue)} 
          value={value}
          >
          <View style={styles.radio}>
            <RadioButton value="AR" color={greenColor}  />
            <Text style={styles.textLang}>الدارجة العربية  </Text>
          </View>
          <View style={styles.radio}>
            <RadioButton value="FR"  color={greenColor}  />
            <Text style={styles.textLang} > Francais </Text>
          </View>
          <View style={styles.radio}>
            <RadioButton value="EN" color={greenColor}  />
            <Text style={styles.textLang} > English </Text>
          </View>
        </RadioButton.Group>
        </View>
        <TouchableOpacity
            style={styles.button}
            // onPress={onPress}
          >
            <Text style={styles.textTouchable}>إبدأ الان</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: '40%',
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 15,
    borderColor: '#bebcbc',
    marginBottom: 20,
    color: 'black',
  },
  text: {
    marginVertical: 5,
    marginLeft: 8,
    color: '#606060',
  },
  icon: {
    width: 30,
    height: 70,
    position: 'absolute',
    backgroundColor: greenColor,
    borderRadius: 50,
    elevation: 5,
  },
  radio: {
    flexDirection : 'row',
    justifyContent: 'space-between',
    borderBottomWidth : 2 ,
    borderBottomColor : '#E6E6E6',
    paddingHorizontal : 4,
    padding: '3%',
    marginTop: '3%'

  },
  textLang: {
    fontSize : 15 ,
    fontWeight : '100'
  },
  button: {
    backgroundColor: greenColor,
    borderRadius: 50,
    width: '50%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop : '20%'
  },
  textTouchable: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Lang;
