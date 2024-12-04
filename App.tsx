import React from 'react';
import {View} from 'react-native';
import './global.css';
import {ReduxCounter} from './src/component/ReduxCounter';
import {Provider} from 'react-redux';
import {store} from './src/state/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <View className="flex justify-center items-center p-4 mt-10">
        <ReduxCounter />
      </View>
    </Provider>
  );
}

export default App;
