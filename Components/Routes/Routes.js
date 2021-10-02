// In App.js in a new project

import * as React from 'react';
import Start from '../../Views/Start/Start';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Views/Login/Login';

const Stack = createNativeStackNavigator();
// const Tab = cre

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
