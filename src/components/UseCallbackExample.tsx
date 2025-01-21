import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useCallback, useState} from 'react';

const ChildComponent = memo(({value, onPress}) => {
  console.log('Child Rendered');
  return (
    <View>
      <Text>Child Component</Text>
      <Text>Value {value}</Text>
      <TouchableOpacity
        onPress={onPress}
        className="h-10 p-2 rounded-lg bg-orange-400">
        <Text>Child Click Me</Text>
      </TouchableOpacity>
    </View>
  );
});

export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [childState, setChildState] = useState(0);
  const handlePress = () => {
    setCount(prev => prev + 1);
  };
  const onChildPress = useCallback(() => {
    setChildState(prev => prev + 1);
  }, [childState]);
  return (
    <View>
      <Text>UseCallbackExample</Text>
      <Text>Count Value {count}</Text>
      <TouchableOpacity
        onPress={handlePress}
        className="h-10 p-2 rounded-lg bg-orange-400">
        <Text>Click Me</Text>
      </TouchableOpacity>
      <ChildComponent value={childState} onPress={onChildPress} />
    </View>
  );
};
