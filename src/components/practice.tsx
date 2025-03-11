import {createContext, useContext, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';

export const withLoader = Component => {
  return function (props) {
    if (props?.isLoading) {
      return <ActivityIndicator />;
    }
    return <Component {...props} />;
  };
};

const UserComponent = () => {
  return <Text>USerName</Text>;
};

const ComponentWithLoader = withLoader(UserComponent);

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
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

const ChildComponent = () => {
  const {theme, themeToggle} = useContext(ThemeContext);
  return <Text>asasda</Text>;
};

const SampleContext = () => {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
};
