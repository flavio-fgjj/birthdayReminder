import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';

import HomeScreen from '../screens/Home/index'
import {RoutesName} from './routesName.routes';
import {RootStackParamList} from '.';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack: FC = () => (
  <Stack.Navigator initialRouteName={RoutesName.Home}>
    <Stack.Screen name={RoutesName.Home} component={HomeScreen} />
  </Stack.Navigator>
);

export default AppStack;