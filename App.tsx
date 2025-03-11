import React from 'react';
import {View} from 'react-native';
import './global.css';
import {PracticeCode} from './src/practice/PracticeCode';

function App(): React.JSX.Element {
  return (
    <View className="flex flex-1 justify-center items-center">
      {/* <ListRender /> */}
      {/* <ImageCarousel /> */}
      {/* <HOC /> */}
      {/* <PropPattern /> */}
      {/* <Provider store={store}>
        <AsyncRedux />
      </Provider> */}
      {/* <MemoExample /> */}
      {/* <UseMemoExample /> */}
      {/* <UseCallbackExample /> */}
      {/* <CustomHooks /> */}
      {/* <Theming /> */}
      {/* <RenderingQuestions /> */}
      {/* <ReducerExample /> */}
      <PracticeCode />
      {/* <CompountComponent /> */}
      {/* <ImageOptimization /> */}
    </View>
  );
}

export default App;
