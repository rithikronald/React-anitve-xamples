import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';

const ChildComponent = memo(() => {
  console.log('Child Rendered');
  return (
    <View>
      <Text>Child Component</Text>
    </View>
  );
});

export const MemoExample = () => {
  const [countOne, setCountOne] = useState(0);

  const handlePress = () => {
    setCountOne(prev => prev + 1);
  };
  return (
    <View>
      <Text>MemoExample</Text>
      <Text>Count Value {countOne}</Text>
      <TouchableOpacity
        onPress={handlePress}
        className="h-10 p-2 rounded-lg bg-orange-400">
        <Text>Click Me</Text>
      </TouchableOpacity>
      <ChildComponent />
    </View>
  );
};
