import React, {useEffect, useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CourseContentCard from './CourseCard';
import {useDispatch, useSelector} from 'react-redux';
import {getCourseContent} from '../../services/api';
import {courseContentSelector} from '../../store/reducers/courseContentReducer';

const CourseContentList = () => {
  const cropData = useSelector(courseContentSelector);
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    const response = await getCourseContent(111);
    dispatch({
      type: 'COURSE_CONTENT_LIST',
      payload: response.data,
    });
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={cropData}
        renderItem={({item}) => <CourseContentCard data={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
  },
});

export default CourseContentList;
