import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
