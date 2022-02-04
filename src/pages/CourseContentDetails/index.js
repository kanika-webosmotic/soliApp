import React, {useEffect, useCallback} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AudioPlayer from '../../components/AudioPlayer';
import {useScreenDimensions} from '../../customHooks/useScreenDimensions';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {getLesson} from '../../services/api';
import {lessonSelector} from '../../store/reducers/courseContentReducer';

const CourseContentDetails = props => {
  const data = props.route.params;
  const {height, width} = useScreenDimensions();
  const videoHeight = height * 0.35;
  const dispatch = useDispatch();
  const lesson = useSelector(lessonSelector);

  const getData = useCallback(async () => {
    const response = await getLesson(data.id);
    dispatch({
      type: 'SET_LESSON',
      payload: response.data,
    });
  }, [dispatch, data.id]);

  useEffect(() => {
    getData();
  }, [getData]);

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
          {lesson.video ? (
            <VideoPlayer
              video={{
                uri: lesson.video,
              }}
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
          ) : (
            <Image
              style={{
                height: videoHeight,
                width,
              }}
              source={{
                uri: lesson.image,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          )}
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
          <AudioPlayer audio={lesson.audio} id="videoTitle" />
        </View>

        <Text style={styles.titleText}>{lesson.name}</Text>
        <Text style={styles.descriptionText}>{lesson.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  textContainer: {
    padding: 10,
  },
  titleText: {fontSize: 20, fontWeight: 'bold'},
});

export default CourseContentDetails;
