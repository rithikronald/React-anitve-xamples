import React from 'react';
import {View, Text} from 'react-native';
import './global.css';
import {ListRender} from './src/components/ListRender';
import ImageCarousel from './src/components/ImageCarousel';

function App(): React.JSX.Element {
  return (
    <View className="flex flex-1">
      {/* <ListRender /> */}
      <ImageCarousel />
    </View>
  );
}

export default App;
