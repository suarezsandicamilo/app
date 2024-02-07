//

import { StyleSheet, Text, View } from 'react-native';

import { TaskType } from '../models/task_type';

import { useTheme } from '../colors';

const Task = (task: TaskType) => {
  const { getColor } = useTheme();

  const styles = StyleSheet.create({
    container: {
      borderColor: getColor('primary'),
      borderRadius: 8,
      borderWidth: 1,
      marginBottom: 20,
      padding: 20,
    },
    text: {},
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.name}</Text>
    </View>
  );
};

export { Task };
