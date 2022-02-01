import React, {useEffect, useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const VideoScreen = ({video}) => {
  const videoData = useSelector(state => state.videoReducer?.videoData) || [];
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          height: height - 20,
          width,
        }}>
        <Swiper
          horizontal={false}
          width={width}
          height={height - 20}
          loadMinimal={true}
          showsPagination={false}>
          {videoData.map((item, index) => {
            return (
              <View
                key={index.toString()}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                  }}>
                  <ActivityIndicator />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    right: 20,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3,
                  }}>
                  <MaterialCommunityIcons
                    name={'heart-outline'}
                    size={28}
                    style={styles.marginBottom20}
                  />
                  <FontAwesome
                    name={'comment-o'}
                    size={25}
                    style={styles.marginBottom20}
                  />
                  <Ionicons
                    name={'md-paper-plane-outline'}
                    size={25}
                    style={styles.marginBottom20}
                  />
                  <Entypo
                    name={'dots-three-vertical'}
                    size={25}
                    style={styles.marginBottom20}
                  />
                </View>
                <View style={{zIndex: 5}}>
                  <VideoPlayer
                    video={item?.file || {uri: item?.url}}
                    videoWidth={width}
                    videoHeight={height - 20}
                    style={{
                      height: height - 20,
                      width,
                      zIndex: 5,
                    }}
                    onVideoLoad={() => console.log('on video load')}
                    onVideoLoadStart={() => console.log('on video load start')}
                    thumbnail={{
                      uri: 'https://i.picsum.photos/id/866/1600/900.jpg',
                    }}
                    resizeMode="contain"
                    controls={false}
                    autoplay={true}
                    customStyles={{
                      controls: {
                        display: 'none',
                      },
                    }}
                    repeat={true}
                  />
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginBottom20: {marginBottom: 20},
});

export default VideoScreen;
