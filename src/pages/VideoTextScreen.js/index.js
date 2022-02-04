import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AudioPlayer from '../../components/AudioPlayer';
import {useScreenDimensions} from '../../customHooks/useScreenDimensions';

const VideoTextScreen = ({video}) => {
  const {height, width} = useScreenDimensions();
  const videoHeight = height * 0.35;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: videoHeight,
          width,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}>
          <VideoPlayer
            video={require('../../assets/demo.webm')}
            videoWidth={width}
            videoHeight={videoHeight}
            style={{
              height: videoHeight,
              width,
            }}
            onVideoLoad={() => console.log('on video load')}
            onVideoLoadStart={() => console.log('on video load start')}
            thumbnail={{
              uri: 'https://i.picsum.photos/id/866/1600/900.jpg',
            }}
            resizeMode="contain"
            controls={false}
            autoplay={true}
            repeat={true}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <View
          style={[
            styles.marginBottom20,
            {
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}>
          <MaterialCommunityIcons
            name="download"
            size={28}
            style={{marginRight: 20}}
          />
          <AudioPlayer
            audio={require('../../assets/sample.aac')}
            id="videoTitle"
          />
        </View>

        <Text style={styles.titleText}>Title</Text>
        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginBottom20: {
    marginBottom: 20,
  },
  textContainer: {
    padding: 10,
  },
  titleText: {fontSize: 20, fontWeight: 'bold'},
});

export default VideoTextScreen;
