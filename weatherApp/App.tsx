import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Main from './screens/Main';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

export default App;
