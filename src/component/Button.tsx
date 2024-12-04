import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const Button = ({onPress}) => {
  return (
    <TouchableOpacity className="bg-red-500 p-4 rounded-xl" onPress={onPress}>
      <Text className="text-white" onPress={onPress}>
        Click Me
      </Text>
    </TouchableOpacity>
  );
};
