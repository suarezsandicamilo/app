//

import { useEffect, useState } from 'react';

import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';

import { AppHeader } from '../components/app_header';

import { CodeView } from '../components/code_view';

import { SectionsController } from '../controllers/sections_controller';

import { ThemeContext, getColor } from '../colors';

const DataScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [lines, setLines] = useState('');

  useEffect(() => {
    (async () => {
      setLines(JSON.stringify(await SectionsController.read(), null, 2));
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
          text="Datos"
          leftIcon="arrow-back"
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          onRightIconPress={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
        <ScrollView>
          <CodeView text={lines} />
        </ScrollView>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { DataScreen };