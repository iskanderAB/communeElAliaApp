import React  from 'react' ;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../Home/Home';
import Login from '../Login/Login';
import About from '../About/About';
import Notifications from '../Notifications/Notifications';
import InstructionRequest from '../SendRequest/InstructionsRequest';

const Tab = createBottomTabNavigator();

const TabScreens = (props) => {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'md-home'
                    } else if (route.name === 'Chat') {
                        iconName = 'ios-chatbubbles';
                    }
                    else if (route.name === 'Profile'){
                        iconName = 'logo-ionitron';
                    }
                    else if (route.name === 'Add') {
                        return <AntDesign name="plussquare" size={25} color={color} />
                    }
                    else if (route.name === 'About') {
                        return <FontAwesome5 name="exclamation" size={25} color={color} />
                    }
                    else if (route.name === 'Notif') {
                        return <MaterialIcons name="notifications-active" size={25} color={color} />
                    }else if (route.name === 'Settings') {
                        return <Entypo name="dots-three-vertical" size={30} color={color} />
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={25}  color={color} />;
                },
                headerShown: false,
                tabBarInactiveTintColor : 'gray',
                tabBarActiveTintColor : '#119219',
                tabBarShowLabel : false,
            })
            }>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Login} />
            <Tab.Screen name="Add" component={InstructionRequest} />
            <Tab.Screen name="Notif" component={Notifications} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    )
}
export default TabScreens;