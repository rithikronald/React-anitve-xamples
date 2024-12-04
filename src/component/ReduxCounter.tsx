import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from './Button';
import {increment} from '../state/Counter/CounterSlice';

export function ReduxCounter() {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{counter}</Text>
      <Button onPress={() => dispatch(increment(10))} />
    </View>
  );
}
