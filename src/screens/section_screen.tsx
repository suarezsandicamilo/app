//

import { useEffect, useState } from 'react';

import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { Section } from '../models/section';

import { Lesson } from '../models/lesson';

import { AppHeader } from '../components/app_header';

import { LessonFab } from '../components/lesson_fab';

import { ThemeContext, getColor } from '../colors';

import { firestore, db } from './../firebase';

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
      const query = firestore.query(
        firestore.collection(db, 'lessons'),
        firestore.where('sectionId', '==', section.id)
      );

      const lessons = await firestore.getDocs(query);

      setLessons(lessons.docs.map((doc) => doc.data()) as Lesson[]);
    })();
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor(theme, 'body_bg'),
      flex: 1,
    },
  });

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
        <FlatList
          data={lessons}
          renderItem={({ item }) => {
            return <LessonFab lesson={item} navigation={navigation} />;
          }}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { SectionScreen };
