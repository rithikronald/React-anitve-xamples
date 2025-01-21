import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';

interface ParentElementInterface {
  ChildComponentOne: ReactNode;
  ChildComponentTwo: ReactNode;
  ChildComponentThree: ReactNode;
}

function ParentElement({
  ChildComponentOne,
  ChildComponentTwo,
  ChildComponentThree,
  children,
}: ParentElementInterface) {
  return (
    <View className="m-10">
      <Text>Hi</Text>
      {/* <View>{props.ChildComponentOne}</View> */}
      <ChildComponentOne />
      <View>{ChildComponentTwo}</View>
      <View>{ChildComponentThree}</View>
      {children}
    </View>
  );
}

function ChildComponentOne() {
  return (
    <View>
      <Text>Child 1</Text>
    </View>
  );
}

function ChildComponentTwo() {
  return (
    <View>
      <Text>Child 2</Text>
    </View>
  );
}

function ChildComponentThree() {
  return (
    <View>
      <Text>Child 3</Text>
    </View>
  );
}

function ChildComponentFour() {
  return (
    <View>
      <Text>Child 4</Text>
    </View>
  );
}

export const PropPattern = () => {
  return (
    <ParentElement
      ChildComponentOne={ChildComponentOne}
      ChildComponentTwo={ChildComponentTwo()}
      ChildComponentThree={<ChildComponentThree />}>
      <ChildComponentFour />
    </ParentElement>
  );
};
