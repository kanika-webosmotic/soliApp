import * as React from 'react';
import {AppRegistry, View, Text} from 'react-native';
// import {Provider as PaperProvider} from 'react-native-paper';
// import TrackPlayer from 'react-native-track-player';
// import App from './App';
import {name as appName} from './app.json';
// import 'react-native-gesture-handler';

export default function Main() {
  return (
    // <PaperProvider>
    //   {/* <App /> */}
    // </PaperProvider>
    <View>
      <Text>Hi</Text>
    </View>
  );
}

AppRegistry.registerComponent(appName, () => Main);
// TrackPlayer.registerPlaybackService(() => require('./service'));
