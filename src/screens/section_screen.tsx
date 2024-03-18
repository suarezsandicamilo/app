//

import { useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { Lesson, Section } from '../models';

import { LessonsController } from '../controllers';

import { LessonFab } from '../components';

import { useEffectAsync } from '../hooks';

import { getColor } from '../colors';

type Props = {
  navigation: any;
  route: any;
};

const SectionScreen = ({ navigation, route }: Props) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const { section } = route.params as {
    section: Section;
  };

  useEffectAsync(async () => {
    setLessons(await LessonsController.allOf(section));
  }, []);

  const styles = StyleSheet.create({
    activityIndicator: {
      margin: 20,
    },
    container: {
      backgroundColor: getColor('body_bg'),
      flex: 1,
    },
  });

  let components = (
    <View style={styles.activityIndicator}>
      <ActivityIndicator color={getColor('primary')} size="large" />
    </View>
  );

  if (lessons.length > 0) {
    components = (
      <FlatList
        data={lessons}
        renderItem={({ item }) => (
          <LessonFab
            lesson={item}
            navigation={navigation}
            onPress={() =>
              navigation.navigate('Lesson', {
                lesson: item,
              })
            }
          />
        )}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={getColor('primary')} />
      {components}
    </SafeAreaView>
  );
};

export { SectionScreen };
