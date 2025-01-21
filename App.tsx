import React from 'react';
import {View} from 'react-native';
import './global.css';
import {HOC} from './src/components/HOC';
import {PropPattern} from './src/components/PropPattern';
import {AsyncRedux} from './src/components/AsyncRedux';
import {Provider} from 'react-redux';
import {store} from './src/state/store';
import {MemoExample} from './src/components/MemoExample';
import {UseMemoExample} from './src/components/UseMemoExample';
import {UseCallbackExample} from './src/components/UseCallbackExample';

function App(): React.JSX.Element {
  return (
    <View className="flex flex-1">
      {/* <ListRender /> */}
      {/* <ImageCarousel /> */}
      {/* <HOC /> */}
      {/* <PropPattern /> */}
      {/* <Provider store={store}>
        <AsyncRedux />
      </Provider> */}
      {/* <MemoExample /> */}
      {/* <UseMemoExample /> */}
      <UseCallbackExample />
    </View>
  );
}

export default App;
