import React from 'react';
import {Text, View} from 'react-native';
import {CustomButton} from './CustomButton';

export const CounterComponent = ({
  count,
  onStartPress,
  onPausePress,
  onResetPress,
}) => {
  return (
    <View>
      <Text>{count}</Text>
      <View>
        <CustomButton onPress={onStartPress} title={'Start'} />
        <CustomButton onPress={onPausePress} title={'Pause'} />
        <CustomButton onPress={onResetPress} title={'Reset'} />
      </View>
    </View>
  );
};
