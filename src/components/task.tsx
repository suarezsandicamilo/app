//

import { StyleSheet, Text, View } from 'react-native';

import { TaskType } from '../models/task_type';

import * as colors from './../colors';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.getColor('primary'),
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
    padding: 20,
  },
  text: {},
});

const Task = (task: TaskType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.name}</Text>
    </View>
  );
};

export { Task };
