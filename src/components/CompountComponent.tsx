import React, {createContext, useContext, useState} from 'react';
import {Text, View} from 'react-native';

const TabsContext = createContext();

const Tabs = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{activeTab, setActiveTab}}>
      {children}
    </TabsContext.Provider>
  );
};

const TabList = ({children}) => {
  return <View className="flex flex-row">{children}</View>;
};

const Tab = ({label}) => {
  return <Text>{label}</Text>;
};

const Panel = ({content, index}) => {
  const {activeTab} = useContext(TabsContext);
  return activeTab === index && <Text>{content}</Text>;
};

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = Panel;

export const CompountComponent = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab label={'TAb 1'} />
        <Tabs.Tab label={'TAb 2'} />
        <Tabs.Tab label={'TAb 3'} />
      </Tabs.List>
      <Tabs.Panel content={'Content 1'} index={0} />
      <Tabs.Panel content={'Content 2'} index={1} />
      <Tabs.Panel content={'Content 3'} index={2} />
    </Tabs>
  );
};
