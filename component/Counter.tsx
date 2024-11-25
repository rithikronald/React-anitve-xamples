import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../state/store';
import {decrement, increment} from '../state/counter/counterSlice';

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{count.value}</Text>
      <View>
        <TouchableOpacity onPress={() => dispatch(increment(10))}>
          <Text>Plus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(decrement(10))}>
          <Text>Minus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
