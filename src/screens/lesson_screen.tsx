//

import { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { Lesson, Task, TheoryTask } from '../models';

import { TasksController } from '../controllers';

import { If, ProgressBar, Theory } from '../components';

import { useEffectAsync } from '../hooks';

import { getColor } from '../colors';

type Props = {
  navigation: any;
  route: any;
};

const LessonScreen = ({ navigation, route }: Props) => {
  const [progress, setProgress] = useState(0);

  const [tasks, setTasks] = useState<Task[]>([]);

  const { lesson } = route.params as {
    lesson: Lesson;
  };

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: getColor('primary'),
      borderRadius: 16,
      justifyContent: 'center',
      height: 50,
      width: 50,
    },
    buttonsContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    container: {
      height: '100%',
    },
    image: {
      borderRadius: 16,
      height: 150,
      width: 150,
    },
    imageContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    progressBarContainer: {
      height: 60,
    },
    textContainer: {
      alignItems: 'center',
      marginBottom: 10,
    },
  });

  useEffectAsync(async () => setTasks(await TasksController.allOf(lesson)), []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={getColor('primary')} />
      <View style={styles.container}>
        <View style={styles.progressBarContainer}>
          <If
            condition={tasks.length > 0}
            then={<ProgressBar progress={progress / (tasks.length - 1)} />}
            else={<ProgressBar progress={0} />}
          />
        </View>
        <If
          condition={tasks[progress]?.type === 'theory'}
          then={<Theory task={tasks[progress] as TheoryTask} />}
          else={<></>}
        ></If>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setProgress((p) => Math.max(p - 1, 0))}
          >
            <Icon name="arrow-left" color={getColor('white')} size={40} />
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() =>
              setProgress((p) => Math.min(p + 1, tasks.length - 1))
            }
          >
            <Icon name="arrow-right" color={getColor('white')} size={40} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { LessonScreen };
