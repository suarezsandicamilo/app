//

import { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { Section } from '../models/section';

import { Lesson } from '../models/lesson';

import { LessonsController } from '../controllers/lessons_controller';

import { AppHeader } from '../components/app_header';

import { LessonFab } from '../components/lesson_fab';

import { ThemeContext, getColor } from '../colors';

type Props = {
  navigation: any;
  route: any;
};

const SectionScreen = ({ navigation, route }: Props) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [lessons, setLessons] = useState<Lesson[]>([]);

  const { section } = route.params as {
    section: Section;
  };

  useEffect(() => {
    (async () => {
      setLessons(await LessonsController.allOf(section));
    })();
  }, []);

  const styles = StyleSheet.create({
    activityIndicator: {
      margin: 20,
    },
    container: {
      backgroundColor: getColor(theme, 'body_bg'),
      flex: 1,
    },
  });

  let components = (
    <View style={styles.activityIndicator}>
      <ActivityIndicator color={getColor(theme, 'primary')} size="large" />
    </View>
  );

  if (lessons.length > 0) {
    components = (
      <FlatList
        data={lessons}
        renderItem={({ item }) => {
          return <LessonFab lesson={item} navigation={navigation} />;
        }}
      />
    );
  }

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={getColor(theme, 'primary')} />
        <AppHeader
          text={section.name}
          leftIcon="arrow-back"
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          onRightIconPress={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
        {components}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { SectionScreen };
