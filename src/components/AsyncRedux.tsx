import React, {useEffect} from 'react';
import {fetchPosts} from '../state/Counter/AsyncSlice';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import {store} from '../state/store';

export const AsyncRedux = () => {
  const dispatch = useDispatch();
  const {loading, posts, error} = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()); // Dispatch the fetchPosts thunk
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View className='m-10'>
      <Text>Posts</Text>
      <View>
        {posts.map(post => (
          <View key={post.id}>
            <Text>{post.title}</Text>
            <Text>{post.body}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
