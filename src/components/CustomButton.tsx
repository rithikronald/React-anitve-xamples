import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton = ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex h-10 rounded-lg bg-orange-300 p-2">
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
