import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourseContentList from '../pages/CourseContentList';
import CourseContentDetails from '../pages/CourseContentDetails';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CourseContent" component={CourseContentList} />
        <Stack.Screen name="CourseDetails" component={CourseContentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
