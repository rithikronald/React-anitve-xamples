import React from 'react';
import {View} from 'react-native';
import './global.css';
import {Provider} from 'react-redux';
import {ReduxTodo} from './component/ReduxTodo';
import {store2} from './state/store2';

function App(): React.JSX.Element {
  return (
    <View className="flex flex-1 justify-center items-center p-4">
      <Provider store={store2}>
        <ReduxTodo />
      </Provider>
    </View>
  );
}

export default App;
