import React, {useReducer} from 'react';
import {Text, View} from 'react-native';
import CustomButton from './CustomButton';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Inc':
      return {count: state.count + 1};
    case 'Dec':
      return {count: state.count - 1};
  }
};

export const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>{state?.count}</Text>
      <CustomButton onPress={() => dispatch({type: 'Inc'})} text={'Click'} />
    </View>
  );
};
