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
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Searchbar} from 'react-native-paper';
import greenColor from '../../colors/Colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

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
  const [focus, setFocus] = useState(false);

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
          <Post
            num={1}
            date={'12-02-2020'}
            description="هيئة النّفاذ إلى المعلومة هي هيئة عمومية مستقلّة تتمتّع بالشخصيّة المعنوية والاستقلالية المالية أحدثت بموجب القانون الأساسي عدد22 لسنة 2016 المؤرّخ في 24 مارس 2016 المتعلّق بالحق في النّفاذ الى المعلومة وتمّ انتخاب أعضاء مجلسها من قبل مجلس نواب الشعب في 18 جويلية 2017
            "
            temp="10"
          />
          <Post
            num={2}
            date={'12/02/2020'}
            description="هيئة النّفاذ إلى المعلومة هي هيئة عمومية مستقلّة تتمتّع بالشخصيّة المعنوية والاستقلالية المالية أحدثت بموجب القانون الأساسي عدد22 لسنة 2016 المؤرّخ في 24 مارس 2016 المتعلّق بالحق في النّفاذ الى المعلومة وتمّ انتخاب أعضاء مجلسها من قبل مجلس نواب الشعب في 18 جويلية 2017
            "
            temp="10"
          />
          <Post
            num={3}
            date={'12/02/2020'}
            description="هيئة النّفاذ إلى المعلومة هي هيئة عمومية مستقلّة تتمتّع بالشخصيّة المعنوية والاستقلالية المالية أحدثت بموجب القانون الأساسي عدد22 لسنة 2016 المؤرّخ في 24 مارس 2016 المتعلّق بالحق في النّفاذ الى المعلومة وتمّ انتخاب أعضاء مجلسها من قبل مجلس نواب الشعب في 18 جويلية 2017
            "
            temp="10"
          />
          <Post
            num={4}
            date={'12/02/2020'}
            description="هيئة النّفاذ إلى المعلومة هي هيئة عمومية مستقلّة تتمتّع بالشخصيّة المعنوية والاستقلالية المالية أحدثت بموجب القانون الأساسي عدد22 لسنة 2016 المؤرّخ في 24 مارس 2016 المتعلّق بالحق في النّفاذ الى المعلومة وتمّ انتخاب أعضاء مجلسها من قبل مجلس نواب الشعب في 18 جويلية 2017
            "
            temp="10"
          />
          <Post
            num={5}
            date={'12/02/2020'}
            description="هيئة النّفاذ إلى المعلومة هي هيئة عمومية مستقلّة تتمتّع بالشخصيّة المعنوية والاستقلالية المالية أحدثت بموجب القانون الأساسي عدد22 لسنة 2016 المؤرّخ في 24 مارس 2016 المتعلّق بالحق في النّفاذ الى المعلومة وتمّ انتخاب أعضاء مجلسها من قبل مجلس نواب الشعب في 18 جويلية 2017
            "
            temp="10"
          />
          <Post
            num={6}
            date={'12/02/2020'}
            description="هيئة النّفاذ إلى المعلومة هي هيئة عمومية مستقلّة تتمتّع بالشخصيّة المعنوية والاستقلالية المالية أحدثت بموجب القانون الأساسي عدد22 لسنة 2016 المؤرّخ في 24 مارس 2016 المتعلّق بالحق في النّفاذ الى المعلومة وتمّ انتخاب أعضاء مجلسها من قبل مجلس نواب الشعب في 18 جويلية 2017
            "
            temp="10"
          />
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
