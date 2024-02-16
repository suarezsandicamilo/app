//

import { useState } from 'react';

import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { SectionType } from '../models/section_type';

import { AppHeader } from '../components/app_header';

import { LessonFab } from '../components/lesson_fab';

import { ThemeContext, getColor } from '../colors';

type Props = {
  navigation: any;
  route: any;
};

const SectionScreen = ({ navigation, route }: Props) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const { section } = route.params as {
    section: SectionType;
  };

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
          data={section.lessons}
          renderItem={({ item }) => {
            return <LessonFab lesson={item} navigation={navigation} />;
          }}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { SectionScreen };
