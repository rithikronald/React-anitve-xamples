import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
import {fetchData} from './practiceStore/PracticeCounter/practiceAsyncSlice';
import {
  decrement,
  increment,
  incrementByAmount,
} from './practiceStore/PracticeCounter/PractivceCounterSclice';
import {
  AppDispatch,
  practiceStore,
  RootState,
} from './practiceStore/practiceStore';

const expensiveCalc = count => {
  //   for (let i = 0; i < 100000000; i++) {}
  console.log('HEavy Computation');
  return count ** 2;
};

const PracticeMemo = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const result = useMemo(() => expensiveCalc(count), [count]);
  return (
    <View>
      <Text>{otherCount}</Text>
      <Text>{result}</Text>
      <CustomButton onPress={() => setCount(prev => prev + 1)} text={'Click'} />
      <CustomButton
        onPress={() => setOtherCount(prev => prev + 1)}
        text={'Other Click'}
      />
    </View>
  );
};

const PracticeUseCallback = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, [count]);

  return (
    <View>
      <Text>{otherCount}</Text>
      <CustomButton
        onPress={() => setOtherCount(prev => prev + 1)}
        text={'Click'}
      />
      <ChildrenComponent count={count} onPress={handleClick} />
    </View>
  );
};

const ChildrenComponent = memo(({count, onPress}) => {
  console.log('Child rendered');
  return (
    <View>
      <Text>{count}</Text>
      <CustomButton text={'Child Button'} onPress={onPress} />
    </View>
  );
});

const withLoader = Component => {
  return props => {
    if (props.isLoading) {
      return <Text>....Loading</Text>;
    }
    return <Component {...props} />;
  };
};

const HOC = () => {
  const LoaderCompoent = withLoader(ChildrenComponent);

  return <LoaderCompoent isLoading={false} count={0} onPress={() => {}} />;
};

function Input({render}) {
  const [value, setValue] = useState('');

  return (
    <>
      <TextInput
        value={value}
        onChangeText={e => setValue(e)}
        placeholder="Temp in °C"
      />
      {render(value)}
    </>
  );
}

function Kelvin({value = 0}) {
  return <Text className="temp">{value + 273.15}K</Text>;
}

function Fahrenheit({value = 0}) {
  return <Text className="temp">{(value * 9) / 5 + 32}°F</Text>;
}

const RenderPropPattern = () => {
  return (
    <View className="App">
      <Text>☃️ Temperature Converter 🌞</Text>

      <Input
        render={data => {
          return (
            <>
              <Kelvin value={data} />

              <Fahrenheit value={data} />
            </>
          );
        }}
      />
    </View>
  );
};

const useDebounce = (val: string, delay: number) => {
  const [debounceText, setDebounceText] = useState(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(val);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [val, delay]);

  return debounceText;
};

const DebounceSearch = () => {
  const [value, setValue] = useState('');

  const debouncedText = useDebounce(value, 1000);

  useEffect(() => {
    console.log('DebouncedText', debouncedText);
  }, [debouncedText]);

  return (
    <View>
      <TextInput
        className="w-[200px] h-12 border"
        value={value}
        onChangeText={val => setValue(val)}
      />
    </View>
  );
};

const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };
    case 'decrement':
      if (state.count > 0) {
        return {
          count: state.count - 1,
        };
      }
      return state;
    default:
      return state;
  }
};

const ReducerPractice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>{state.count}</Text>
      <View className="flex flex-row gap-x-3">
        <CustomButton
          text={'Increment'}
          onPress={() => dispatch({type: 'increment'})}
        />
        <CustomButton
          text={'Decrement'}
          onPress={() => dispatch({type: 'decrement'})}
        />
      </View>
    </View>
  );
};

const ReduxTookitExample = () => {
  const count = useSelector((state: RootState) => state.practiceCounter.count);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View>
      <Text>{count}</Text>
      <CustomButton
        onPress={() => {
          dispatch(increment());
        }}
        text={'Increment'}
      />
      <CustomButton
        onPress={() => {
          dispatch(incrementByAmount(10));
        }}
        text={'IncrementBy10'}
      />
      <CustomButton
        onPress={() => {
          dispatch(decrement());
        }}
        text={'Decrement'}
      />
    </View>
  );
};

const AsyncReduxExample = () => {
  const {data, loading, error} = useSelector(
    (state: RootState) => state.practiceAsync,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('1'));
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <Text>User: {data.name}</Text>
      ) : (
        <Text>Error: {error}</Text>
      )}
      <CustomButton
        text={'Click Me'}
        onPress={() => dispatch(fetchData('1'))}
      />
    </View>
  );
};

export const PracticeCode = () => {
  return (
    <Provider store={practiceStore}>
      <View>
        {/* <ReduxTookitExample /> */}
        <AsyncReduxExample />
        {/* <PracticeMemo /> */}
        {/* <PracticeUseCallback /> */}
        {/* <HOC /> */}
        {/* <RenderPropPattern /> */}
        {/* <DebounceSearch /> */}
        {/* <ReducerPractice /> */}
        {/* <InfiniteScrollList /> */}
      </View>
    </Provider>
  );
};
