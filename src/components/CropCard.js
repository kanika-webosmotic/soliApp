import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AudioPlayer from './AudioPlayer';

const CropCard = props => {
  const {data} = props;
  return (
    <View style={styles.mainContainer}>
      {/* <Image source={{uri: data?.image}} style={{height: 200, width: 200}} /> */}
      <Text>{data?.name}</Text>
      <AudioPlayer audio={data?.audio} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
});

export default CropCard;
