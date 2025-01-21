import React, {createContext, useContext, useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton from './CustomButton';

interface ThemeContextType {
  theme: string;
  themeToggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{theme, themeToggle}}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const {theme, themeToggle} = useContext<ThemeContextType>(ThemeContext);
  return (
    <View
      className={`flex flex-1 justify-center items-center  ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
      <Text>{theme}</Text>
      <CustomButton onPress={themeToggle} text={'Click Me'} />
    </View>
  );
};

export const Theming = () => {
  return (
    <ThemeProvider>
      <View className="m-10 flex flex-1">
        <Text>Theming</Text>
        <ThemedComponent />
      </View>
    </ThemeProvider>
  );
};
