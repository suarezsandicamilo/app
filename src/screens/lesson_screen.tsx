//

import { useState } from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons/';

import { Lesson, Task } from '../models';

import { TasksController } from '../controllers';

import { If, ProgressBar } from '../components';

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
    button: {
      alignItems: 'center',
      backgroundColor: getColor('primary'),
      borderRadius: 16,
      justifyContent: 'center',
      height: 100,
      width: 100,
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
            then={<ProgressBar progress={progress / tasks.length} />}
            else={<ProgressBar progress={0} />}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/seed/${
                tasks[progress - 1]?.id ?? ''
              }/100`,
            }}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => setProgress((p) => Math.max(p - 1, 1))}
          >
            <Icon name="arrow-left" color={getColor('white')} size={80} />
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => setProgress((p) => Math.min(p + 1, tasks.length))}
          >
            <Icon name="arrow-right" color={getColor('white')} size={80} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { LessonScreen };
