const Title = ({children}) => {
  return (
    <View className="flex flex-1 justify-center items-center">
      {children('Hi There')}
    </View>
  );
};
const TextComponent = ({data}) => {
  return <Text>{data}</Text>;
};

const Input = ({render}) => {
  const [temp, setTemp] = useState('');
  return (
    <View>
      <TextInput
        className="w-[200px] h-10 border border-black rounded-lg"
        value={temp}
        onChangeText={val => {
          setTemp(val);
        }}
      />
      {render(temp)}
    </View>
  );
};

function Kelvin({value = 0}) {
  return <Text>{value + 273.15}K</Text>;
}

function Fahrenheit({value = 0}) {
  return <Text>{(value * 9) / 5 + 32}°F</Text>;
}
