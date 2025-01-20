import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const pageLimit = 10;
export function ListRender() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const getListData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_start=${pageNumber}&_limit=${pageLimit}`,
      );
      // console.log('Response', res.data);
      setData(prev => [...prev, ...res.data]);
      setIsFetching(false)
    } catch (err) {
      console.log('Error', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('page Number', pageNumber);
    getListData();
  }, [pageNumber]);

  const renderItem = ({item}) => {
    return (
      <View className="flex h-10 bg-red-300 rounded-xl mt-2">
        <Text>{item?.title}</Text>
      </View>
    );
  };

  const footer = () => <ActivityIndicator size={'large'} />;
  const loadMore = () => {
    if (!isFetching) {
      setIsFetching(true);
      setPageNumber(prev => prev + 1);
    }
  };
  return (
    <View className="flex flex-1">
      <Text>List Data</Text>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
          ListFooterComponent={footer}
        />
      )}
    </View>
  );
}
