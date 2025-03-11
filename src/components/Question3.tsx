const Question3 = () => {
  const [count, setCount] = useState(0);
  const [lapList, setLapList] = useState([]);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const handleOnPress = (action: string) => {
    switch (action) {
      case 'start':
        clearInterval(interval.current);
        interval.current = setInterval(() => {
          setCount(prev => prev + 1);
        }, 1000);
        break;
      case 'pause':
        clearInterval(interval.current);
        break;
      case 'reset':
        clearInterval(interval.current);
        setCount(0);
        setLapList([]);
        break;
      case 'lap':
        setLapList(prev => [...prev, count]);
        break;
    }
  };

  useEffect(() => {
    handleOnPress('start');
  }, []);

  // useEffect(() => {
  //   if (count == 0) {
  //     clearInterval(interval.current);
  //   }
  // }, [count]);

  return (
    <View className="flex flex-1  justify-center items-center">
      <Text>{count}</Text>
      <View>
        <CustomButton onPress={() => handleOnPress('start')} title={'Start'} />
        <CustomButton onPress={() => handleOnPress('pause')} title={'Pause'} />
        <CustomButton onPress={() => handleOnPress('reset')} title={'Reset'} />
        <CustomButton onPress={() => handleOnPress('lap')} title={'Lap'} />
      </View>
      <View className="flex flex-row mt-4 gap-x-3">
        {lapList?.map((item, index) => {
          return (
            <View className="flex p-3  rounded-full bg-orange-600" key={index}>
              <Text className="text-white">{item}</Text>
            </View>
          );
        })}
      </View>
      <View className="flex relative rounded-full w-[80%] h-10 bg-red-50 border container">
        <View
          style={{width: `${count >= 100 ? 100 : count}%`}}
          className={'flex rounded-full bg-red-500 h-full relative'}
        />
        <View className="flex w-full justify-center items-center absolute h-full">
          <Text>{count}%</Text>
        </View>
      </View>
    </View>
  );
};
