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
  Image,
} from 'react-native';
import {Avatar, Paragraph, Searchbar} from 'react-native-paper';
import greenColor from '../../colors/Colors';

import Post from '../../Components/Post/Post';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({item}) => <Item title={item.title} />;

const About = () => {
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
          style={{padding: '2%'}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              style={{height: '100%', backgroundColor: 'red'}}
            />
          }>
          <Image
            style={{width: '100%', height: 300}}
            source={require('../../Assets/paladia.jpg')}
          />
          <Text style={{...styles.text, textAlign: 'center', marginTop: '5%'}}>
            {' '}
            مقر بلدية العالية{' '}
          </Text>
          <Paragraph style={{textAlign: 'right', lineHeight: 40}}>
            العنوان : شارع الحبيب بورقيبة العالية 7016
            {'\n'}
            الهاتف : 72.442.525
            {'\n'}
            الفاكس : 72.442.010
            {'\n'}
            http://www.commune-elalia.gov.tn : موقع الواب
            {'\n'}
            المساحة : (2019): 7445 هك
            {'\n'}
            عدد السكان : (2019): 30 ألف نسم
            {'\n'}
            المعرف الجبائي 280593w
            {'\n'}
            CCP Tunis 02 : 17002.000000006.264.888 : الحساب البريدي لمحتسب بلدية
            العالية
            {'\n'}
            المجلس البلدي
            {'\n'}
            عدد أعضاء المجلس البلدي : 24
            {'\n'}
            الإدارة العدد الجملي للأعوان : 56
            {'\n'}
            الكتابة العامة
            {'\n'}
            الإدارة الفرعية
            {'\n'}
            للشؤون الإدارية والمالية
            {'\n'}
            الإدارة الفرعية الفنية
            {'\n'}
            مصلحة الحالة المدنية
            {'\n'}
            الدوائر: 1{'\n'}
            الدائرة البلدية بالخيتمين : تاريخ الإحداث: 12 مارس 2019 قرار الإحداث
            {'\n'}
            العنوان : الخيتمين على مستوى مفترق طريق تونس بنزرت منزل بورقيبة (مقر
            المجلس القروي القديم)
            {'\n'}
            المستودع: 1{'\n'}
            العنوان : شارع فرحات حشاد العالية 7016 المغازة النظافة الورشة
            الإعتناء (بناء-تنوير-دهن...) الحجز والإيداع
          </Paragraph>
          <Paragraph
            style={{
              textAlign: 'right',
              fontSize: 16,
              lineHeight: 40,
              paddingHorizontal: 4,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                color: 'red',
              }}>
              {' '}
              لمحة حول النفاذ الى المعلومة :{' '}
            </Text>
            {'\n'}
            في إطار تكريس مبدأي الشّفافية و المساءلة ومن أجل ضمان تحسين جودة
            المرافق العمومية 
            
           
            <Text style={{ color :'red' , fontWeight : 'bold'}}>
              ودعم مشاركة العموم
            
            </Text>
            
             في وضع السياسات العمومية ومتابعة
            تنفيذها وتقييمها بما من شأنه أن يؤسس لعلاقة ثقة بين الهياكل الخاضعة
            لأحكام القانون والأشخاص الطبيعيين والمعنويين ومنظمات المجتمع المدني

            <Text  style={{ color :'red' , fontWeight : 'bold'}}>
            . أقر الدستور التونسي صلب فصله 32 الحق في النّفاذ الى المعلومة كحق
            دستوري وجعل الدّولة الضّامنة لممارسة هذا الحق. وقد تولّى القانون
            الأساسي عدد 22 لسنة 2016 المؤرّخ في 24 مارس 2016 إبراز كيفية ممارسة
            هذا الحق واجراءاته.
            </Text>
            {"\n"}
             ويكون النّفاذ الى المعلومة إما من خلال نشر
            المعلومة بمبادرة من الهياكل الخاضعة طبقا لأحكام القانون (الفصول
            6و7و8 من القانون ) أو بطلب من قبل كل شخص طبيعي أو معنوي بموجب مطلب
            كتابي في الغرض طبقا للأنموذج التالي الذي يمكن تحميله (مطلب نفاذ إلى
            المعلومة). ويتولى المكلّف بالنّفاذ إلى المعلومة تلقّي مطالب النّفاذ
            إلى المعلومة ومعالجتها والردّ عليها في الآجال التي حددها القانون.
            ويمكن لطالب النّفاذ عند رفض القرار المتّخذ بخصوص مطلبه التظلّم لدى
            رئيس هذا الهيكل في أجل أقصاه العشرين (20) يوما التي تلي الإعلام
            بالقرار ويتعيّن على رئيس الهيكل الردّ في أقرب الآجال الممكنة على أن
            لا يتجاوز ذلك أجلا أقصاه عشرة (10) أيام من تاريخ إيداع مطلب
            التّظلّم. ويعتبر عدم رد رئيس الهيكل المعني خلال هذا الأجل، رفضا
            ضمنيا. كما يمكن لطالب النّفاذ الطعن مباشرة في قرار الهيكل المعني لدى
            هيئة النّفاذ الى المعلومة.
          </Paragraph>

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
  img: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '100%',
    height: '65%',
    // backgroundColor:'red',
  },
});

export default About;
