//

import { useEffect, useState } from 'react';

import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import { AppButton } from '../components/app_button';

import { AppHeader } from '../components/app_header';

import { CodeView } from '../components/code_view';

import { ThemeContext, getColor } from '../colors';

const DataScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [lines, setLines] = useState('');

  useEffect(() => {
    (async () => {
      setLines(JSON.stringify({}, null, 2));
    })();
  }, []);

  const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 20,
    },
    container: {
      backgroundColor: getColor(theme, 'body_bg'),
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
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
        <View style={styles.contentContainer}>
          <View style={styles.buttonContainer}>
            <AppButton
              text="Registrar"
              onPress={() => {
                console.log(lines);

                (async () => {
                  await Clipboard.setStringAsync(lines);
                })();
              }}
            />
          </View>
          <CodeView text={lines} />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { DataScreen };
