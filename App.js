import React, {useState} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/configureStore';
import AppNavigator from './src/navigations/AppNavigator';

const App = () => {
  const [showReels, setShowReels] = useState(true);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        {/* <View
          style={{
            width: '100%',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 2,
            bottom: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgrey',
              padding: 10,
            }}
            onPress={() => {
              console.log('pressed');
              setShowReels(!showReels);
            }}>
            <Text>Switch Screen</Text>
          </TouchableOpacity>
        </View>
        {showReels ? <VideoScreen /> : <VideoTextScreen />} */}
      </PersistGate>
    </Provider>
  );
};

export default App;
