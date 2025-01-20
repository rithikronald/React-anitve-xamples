import React, {useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';

const images = [
  'https://images.pexels.com/photos/30282849/pexels-photo-30282849/free-photo-of-serene-mountain-lake-landscape-with-lush-forests.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/27629386/pexels-photo-27629386/free-photo-of-a-view-of-a-valley-with-rice-fields-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/28975774/pexels-photo-28975774/free-photo-of-rural-african-landscape-with-acacia-tree-and-bikers.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

const {width} = Dimensions.get('window');

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(offset / slideSize);
    setActiveIndex(activeIndex);
  };
  return (
    <View className="flex w-full h-[200px] rounded-xl p-10">
      <ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        // onScroll={handleScroll}
        className="bg-red-300">
        {images.map((item, index) => {
          //   console.log('ITEM', item);
          return (
            <Image
              key={index}
              resizeMode="cover"
              source={{uri: item}}
              className="h-[200px]"
              style={styles.imageStyle}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: width-30,
  },
});
