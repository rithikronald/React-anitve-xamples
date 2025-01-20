import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';

// List of image URLs
const imageUrls = [
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/2/200/300',
  'https://picsum.photos/id/3/200/300',
  'https://picsum.photos/id/4/200/300',
  'https://picsum.photos/id/5/200/300',
  'https://picsum.photos/id/6/200/300',
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/2/200/300',
  'https://picsum.photos/id/3/200/300',
  'https://picsum.photos/id/4/200/300',
  'https://picsum.photos/id/5/200/300',
  'https://picsum.photos/id/6/200/300',
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/2/200/300',
  'https://picsum.photos/id/3/200/300',
  'https://picsum.photos/id/4/200/300',
  'https://picsum.photos/id/5/200/300',
  'https://picsum.photos/id/6/200/300',
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/2/200/300',
  'https://picsum.photos/id/3/200/300',
  'https://picsum.photos/id/4/200/300',
  'https://picsum.photos/id/5/200/300',
  'https://picsum.photos/id/6/200/300',
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/2/200/300',
  'https://picsum.photos/id/3/200/300',
  'https://picsum.photos/id/4/200/300',
  'https://picsum.photos/id/5/200/300',
  'https://picsum.photos/id/6/200/300',
];

const RNImageComponent = () => {
  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image
        source={{uri: item}}
        style={styles.image}
        resizeMode="cover"
        loadingIndicatorSource={
          <ActivityIndicator size="small" color="#0000ff" />
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native Image</Text>
      <FlatList
        data={imageUrls}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

// FastImage Component Example
const FastImageComponent = () => {
  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <FastImage
        style={styles.image}
        source={{
          uri: item,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
        // defaultSource={<ActivityIndicator size="small" color="#0000ff" />} // Placeholder
        fallback
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FastImage</Text>
      <FlatList
        data={imageUrls}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export const ImageOptimization = () => {
  const [showFastImage, setShowFastImage] = useState(false);

  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowFastImage(!showFastImage)}>
        <Text style={styles.toggleButton}>
          {showFastImage
            ? 'Switch to React Native Image'
            : 'Switch to FastImage'}
        </Text>
      </TouchableOpacity>
      {!showFastImage ? <FastImageComponent /> : <RNImageComponent />}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 10,
    backgroundColor: 'grey',
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  toggleButton: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  button: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});
