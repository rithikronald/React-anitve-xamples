import React, {useEffect, useRef, useState} from 'react';

export const Question1 = () => {
  const [count, setCount] = useState(5);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const handleOnPress = (action: string) => {
    switch (action) {
      case 'start':
        clearInterval(interval.current);
        interval.current = setInterval(() => {
          if (count == 0) {
            clearInterval(interval.current);
          } else {
            setCount(prev => prev - 1);
          }
        }, 1000);
        break;
      case 'pause':
        clearInterval(interval.current);
        break;
      case 'reset':
        clearInterval(interval.current);
        setCount(5);
        break;
    }
  };

  useEffect(() => {
    handleOnPress('start');
  }, []);

  useEffect(() => {
    if (count == 0) {
      clearInterval(interval.current);
    }
  }, [count]);

  return (
    <View className="flex flex-1  justify-center items-center">
      <Text>{count <= 0 ? `Timeout` : count}</Text>
      <View>
        <CustomButton onPress={() => handleOnPress('start')} title={'Start'} />
        <CustomButton onPress={() => handleOnPress('pause')} title={'Pause'} />
        <CustomButton onPress={() => handleOnPress('reset')} title={'Reset'} />
      </View>
    </View>
  );
};
