//

import { Appearance, StyleSheet, Text, View } from 'react-native';

import { TaskType } from '../models/task_type';

import colors from './../colors.json';

const scheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    borderColor: colors[scheme].primary,
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
