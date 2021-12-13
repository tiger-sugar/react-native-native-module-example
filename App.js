/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NativeModules, TouchableOpacity, Text} from 'react-native';
const App = () => {
  // const onPress = () => {
  //   console.log('We will invoke the native module here!');
  // };
  const {CalendarModule} = NativeModules;

  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };
  return (
    <TouchableOpacity
      style={{marginTop: 200, alignSelf: 'center'}}
      onPress={onPress}>
      <Text>Click to invoke your native module!</Text>
    </TouchableOpacity>
  );
};

export default App;
