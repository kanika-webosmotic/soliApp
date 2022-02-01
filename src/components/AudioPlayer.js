import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AudioPlayer = props => {
  const [isPlayed, setIsPlayed] = useState(false);
  const {audio, id} = props;

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: id,
      url: audio,
      title: 'Track Title',
      artist: 'Track Artist',
    });
  };

  return (
    <TouchableOpacity
      onPress={async () => {
        await setupPlayer();
        if (!isPlayed) {
          TrackPlayer.play();
        } else {
          TrackPlayer.stop();
        }
        setIsPlayed(!isPlayed);
      }}>
      <MaterialCommunityIcons
        name={isPlayed ? 'stop-circle' : 'ear-hearing'}
        size={25}
      />
    </TouchableOpacity>
  );
};

export default AudioPlayer;
