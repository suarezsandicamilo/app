//

import { FlatList, StyleSheet, Text, View } from 'react-native';

import { LessonType } from '../models/lesson_type';

import { Task } from './task';

import * as colors from '../colors';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.getColor('primary'),
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
    padding: 20,
    paddingBottom: 10,
  },
  text: {
    marginBottom: 20,
  },
});

const Lesson = (lesson: LessonType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{lesson.name}</Text>
      <FlatList
        data={lesson.tasks}
        renderItem={({ item }) => {
          return <Task key={item.id} {...item} />;
        }}
      />
    </View>
  );
};

export { Lesson };
