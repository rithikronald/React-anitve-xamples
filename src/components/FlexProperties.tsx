import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';

export const AlignItems = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 200,
        backgroundColor: 'gray',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
    </View>
  );
};

const {width: screenWidth} = Dimensions.get('window');

export const FlexProperties = () => {
  const numColumns = screenWidth > 600 ? 4 : 3.5; // Change number of columns based on screen width
  const itemWidth = `${100 / numColumns}%`;
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   let timeout;
  //   if (progress <= 200) {
  //     timeout = setTimeout(() => {
  //       console.log('Timeout', progress);
  //       setProgress(prev => prev + 10);
  //     }, 1000);
  //   }
  //   () => {
  //     clearTimeout(timeout);
  //   };
  // }, [progress]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 150,
          borderRadius: 100,
          height: 60,
          borderColor: 'red',
          borderWidth: 5,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            width: `${progress}%`,
          }}></View>
      </View>
    </View>
  );
};
