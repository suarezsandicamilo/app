//

import { useState } from 'react';

import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Lesson, Task } from '../models';

import { TasksController } from '../controllers';

import { AppButton, ProgressBar } from '../components';

import { useEffectAsync } from '../hooks';

import { getColor } from '../colors';

type Props = {
  navigation: any;
  route: any;
};

const LessonScreen = ({ navigation, route }: Props) => {
  const [progress, setProgress] = useState(1);

  const [tasks, setTasks] = useState<Task[]>([]);

  const { lesson } = route.params as {
    lesson: Lesson;
  };

  const styles = StyleSheet.create({
    buttonContainer: {
      marginVertical: 10,
    },
    textContainer: {
      alignItems: 'center',
      marginBottom: 10,
    },
  });

  useEffectAsync(async () => setTasks(await TasksController.allOf(lesson)), []);

  let progressBar = <ProgressBar progress={0} />;

  if (tasks.length > 0) {
    progressBar = <ProgressBar progress={progress / tasks.length} />;
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={getColor('primary')} />
      {progressBar}
      <View style={styles.textContainer}>
        <Text>{progress}</Text>
        <Text>{tasks[progress - 1]?.id}</Text>
        <Text>{tasks[progress - 1]?.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          text=">"
          onPress={() => setProgress((p) => Math.min(p + 1, tasks.length))}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          text="<"
          onPress={() => setProgress((p) => Math.max(p - 1, 1))}
        />
      </View>
    </SafeAreaView>
  );
};

export { LessonScreen };
