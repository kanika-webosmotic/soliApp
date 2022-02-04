import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

const CourseContentCard = ({data}) => {
  const mavigation = useNavigation();
  const openDetails = () => {
    mavigation.navigate('CourseDetails', data);
  };
  return (
    <TouchableOpacity onPress={openDetails} style={styles.mainContainer}>
      <Image
        style={{width: '100%', height: 200}}
        source={{
          uri: data.image,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.content}>
        <Text>{data.name}</Text>
        {data.subtitle && <Text>{data.subtitle}</Text>}
        {data.subTitle && <Text>{data.subTitle}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  content: {
    flexDirection: 'column',
  },
});

export default CourseContentCard;
