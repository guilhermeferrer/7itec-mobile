import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { setNavigator } from './src/services/navigation';

import { setDropDownAlert } from './src/services/alert';
import DropdownAlert from 'react-native-dropdownalert';

import Routes from './src/routes';

export default function App() {

  return (
    <NavigationContainer ref={setNavigator} >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
      <DropdownAlert ref={setDropDownAlert} updateStatusBar={false} translucent />
    </NavigationContainer>
  );
}