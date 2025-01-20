import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';

const ResponsiveImage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);

  return (
    <View style={{flex: 1, backgroundColor: 'blue', flexDirection: 'row'}}>
      <View style={{backgroundColor: 'red', width: 50}} />
      {isLoading ? <ActivityIndicator /> : null}
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/29726451/pexels-photo-29726451/free-photo-of-aerial-view-of-dense-forest-canopy-in-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }}
        style={{flex: 1}}
        onLoadEnd={() => {
          console.log('Image Loaded');
          setIsLoading(false);
        }}
      />
      <View style={{backgroundColor: 'red', width: 50}} />
    </View>
  );
};

export default ResponsiveImage;
