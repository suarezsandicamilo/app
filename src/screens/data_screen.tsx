//

import { useState } from 'react';

import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import { AppButton, AppHeader, CodeView } from '../components';

import { useEffectAsync } from '../hooks';

import { getColor } from '../colors';

const DataScreen = ({ navigation }: any) => {
  const [lines, setLines] = useState('');

  useEffectAsync(async () => {
    setLines(JSON.stringify({}, null, 2));
  }, []);

  const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 20,
    },
    container: {
      backgroundColor: getColor('body_bg'),
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={getColor('primary')} />
      <AppHeader
        text="Datos"
        leftIcon="arrow-back"
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <AppButton
            text="Registrar"
            onPress={() => {
              console.log(lines);

              (async () => await Clipboard.setStringAsync(lines))();
            }}
          />
        </View>
        <CodeView text={lines} />
      </View>
    </SafeAreaView>
  );
};

export { DataScreen };
