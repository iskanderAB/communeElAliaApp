// In App.js in a new project

import * as React from 'react';
import Start from '../../Views/Start/Start';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Views/Login/Login';
import Lang from '../../Views/Langs/Lang';
import Signup from '../../Views/Signup/Signup';
import Home from '../../Views/Home/Home';
import InstructionsRequest from '../../Views/SendRequest/InstructionsRequest';
import RequestInfos from '../../Views/SendRequest/RequestInfos';
import FormatInfos from '../../Views/SendRequest/FormatInfos';

const Stack = createNativeStackNavigator();
// const Tab = cre

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Language"
          component={Lang}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InstructionsRequest"
          component={InstructionsRequest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RequestInfos"
          component={RequestInfos}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FormatInfos"
          component={FormatInfos}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const Tab = createStackNavigator();

// function App1() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Start" component={Start} />
//     </Tab.Navigator>
//   );
// }

export default App;
