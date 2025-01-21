import {View, Text, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from 'react';

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);

  const expensiveOperation = () => {
    console.log('Expensive Operation Started');
    for (let i = 0; i < 100000000; i++) {
      //
    }
    console.log('Expensive Operation Ended');

    return 'Done';
  };

  const result = useMemo(() => {
    return expensiveOperation();
  }, []);

  const handlePress = () => {
    setCount(prev => prev + 1);
  };

  return (
    <View>
      <Text>UseMemoExample</Text>
      <Text>Count Value {count}</Text>
      <TouchableOpacity
        onPress={handlePress}
        className="h-10 p-2 rounded-lg bg-orange-400">
        <Text>Click Me</Text>
      </TouchableOpacity>
      <Text>Expensive Result {result}</Text>
    </View>
  );
};
