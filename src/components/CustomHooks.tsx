import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (e) {
      console.log('Error', e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {data, loading, error, reftch: getData};
};

export const CustomHooks = () => {
  const {data, loading, error} = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );
  useEffect(() => {
    console.log('Data', data);
  }, [data]);

  useEffect(() => {
    console.log('Error', error);
  }, [error]);

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }
  return <Text>Data Fetched</Text>;
};
