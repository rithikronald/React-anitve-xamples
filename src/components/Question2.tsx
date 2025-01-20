const Question2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const interval1 = useRef(null);
  const interval2 = useRef(null);

  const startHandler = (intervalRef: any, countType: number) => {
    intervalRef.current = setInterval(() => {
      countType == 1
        ? setCount1(prev => prev + 1)
        : setCount2(prev => prev + 1);
    }, 1000);
  };
  const pauseHandler = (intervalRef: any) => {
    clearInterval(intervalRef.current);
  };
  const resetHandler = (intervalRef: any, countType: number) => {
    clearInterval(intervalRef.current);
    countType == 1 ? setCount1(0) : setCount2(0);
  };

  return (
    <View className="flex flex-1  justify-center items-center space-y-10">
      <CounterComponent
        count={count1}
        onStartPress={() => startHandler(interval1, 1)}
        onPausePress={() => pauseHandler(interval1)}
        onResetPress={() => resetHandler(interval1, 1)}
      />
      <CounterComponent
        count={count2}
        onStartPress={() => startHandler(interval2, 2)}
        onPausePress={() => pauseHandler(interval2)}
        onResetPress={() => resetHandler(interval2, 2)}
      />
    </View>
  );
};
