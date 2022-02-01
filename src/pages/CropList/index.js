import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import '../../locales';
import CropCard from '../../components/CropCard';

const CropList = () => {
  const cropData = [
    {
      image: 'https://picsum.photos/200/300',
      name: 'Wheat',
      audio: require('../../assets/sample.aac'),
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Rice',
      audio: require('../../assets/demoaudio.aac'),
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Ragi',
      audio: require('../../assets/audio.mp3'),
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Corn',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      image: 'https://picsum.photos/200/300',
      name: 'Jowar',
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={cropData}
        renderItem={({item}) => {
          return <CropCard data={item} />;
        }}
        keyExtractor={(item, index) => item.name + index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
});

export default CropList;
