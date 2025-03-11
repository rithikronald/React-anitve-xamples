import {View, Text} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import CustomButton from './CustomButton';

export const RenderingQuestion1 = () => {
  const [state, setState] = useState(0);
  console.log('Outer', state);

  useEffect(() => {
    console.log('Inside first');
    setState(state => state + 1);
  }, []);

  useEffect(() => {
    console.log('Inside second');
    console.log(state);
    setTimeout(() => {
      console.log('after timeout', state);
    }, 100);
  }, []);

  useEffect(() => {
    console.log('Inside third');
    console.log(state);
  }, []);
  useEffect(() => {
    console.log('Inside 4');
    console.log(state);
  }, []);
  useEffect(() => {
    console.log('Inside 5');
    console.log(state);
  }, []);
  useEffect(() => {
    console.log('Inside 6');
    console.log(state);
  }, []);

  useEffect(() => {
    console.log('Inside 7');
    console.log(state);
  }, [state]);

  return null;
};

export const RenderingQuestion2 = () => {
  const ref = useRef(null);
  const [state, setState] = useState(1);

  useEffect(() => {
    setState(2);
  }, []);

  console.log(ref.current);
  return (
    <View>
      <Text ref={state === 1 ? ref : null}>Rithik</Text>
      <Text ref={state === 2 ? ref : null}>Ronald</Text>
    </View>
  );
};

export const RenderingQuestion3 = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setTimeout(() => {
      setState(state + 1);
    }, 1000);
  };
  console.log(state);

  return (
    <View>
      <CustomButton onPress={increment} text={'Click me'} />
    </View>
  );
};

function _B() {
  console.log('B');
  return null;
}

const B = memo(_B);

function _A({children}) {
  console.log('A');
  return children;
}

const A = memo(_A);

export const RenderingQuestion4 = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState(state + 1);
  };

  return (
    <View>
      <CustomButton onPress={increment} text={'Click me'} />
      <A>
        <B />
        {/* B is passed as new child(OBJ) on every rerender */}
      </A>
    </View>
  );
};

export const RenderingQuestion5 = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    console.log('handler');
    setState(state => state + 1);
    console.log('handler ' + state);
  };
  console.log('render ' + state);

  return (
    <View>
      <CustomButton onPress={increment} text={'Click me'} />
    </View>
  );
};

export const RenderingQuestion6 = () => {
  const [state1, setState1] = useState(1);

  const [state2] = useState(() => {
    console.log(2);
    return 2;
  });

  console.log(state1);

  useEffect(() => {
    setState1(3);
  }, []);

  return null;
};

export const RenderingQuestions = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <RenderingQuestion6 />
    </View>
  );
};
