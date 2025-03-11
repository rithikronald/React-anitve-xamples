import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

function withLoader(Component: React.ComponentType<{isLoading: boolean}>) {
  return function ({isLoading, ...props}) {
    if (!isLoading) {
      return <ActivityIndicator size={'large'} />;
    }
    return <Component isLoading={isLoading} {...props} />;
  };
}

const DisplayName: React.FC<{data: string; isLoading: boolean}> = ({
  data,
  ...props
}) => {
  return (
    <View>
      {props.isLoading ? <ActivityIndicator size={'large'} /> : null}
      <Text>{data}</Text>
    </View>
  );
};

export const HOC = () => {
  const WrappedComponent = withLoader(DisplayName);
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text>HOC</Text>
      <WrappedComponent isLoading={true} data={'HI there'} />
    </View>
  );
};
