//

import { useEffect, useState } from 'react';

import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { SectionType } from '../models/section_type';

import { AppHeader } from '../components/app_header';

import { SectionCard } from '../components/section_card';

import { SectionsController } from '../controllers/sections_controller';

import { ThemeContext, getColor } from '../colors';

const PathScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [sections, setSections] = useState<SectionType[]>([]);

  useEffect(() => {
    (async () => {
      setSections(await SectionsController.read());
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
          text="Aplicación"
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          onRightIconPress={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
        <FlatList
          data={sections}
          renderItem={({ item }) => {
            return (
              <SectionCard
                key={item.id}
                section={item}
                navigation={navigation}
              />
            );
          }}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { PathScreen };
