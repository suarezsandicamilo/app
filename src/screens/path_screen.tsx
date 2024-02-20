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

import { SectionsController } from '../controllers/SectionsController';

import { AppHeader } from '../components/app_header';

import { SectionCard } from '../components/section_card';

import { ThemeContext, getColor } from '../colors';

const PathScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    (async () => {
      setSections(await SectionsController.all());
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

  if (sections.length > 0) {
    components = (
      <FlatList
        data={sections}
        renderItem={({ item }) => {
          return (
            <SectionCard key={item.id} section={item} navigation={navigation} />
          );
        }}
      />
    );
  }

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={getColor(theme, 'primary')} />
        <AppHeader
          text="Aplicación"
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

export { PathScreen };
