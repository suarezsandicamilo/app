//

import { Appearance, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { Button } from '../components/button';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].body_bg,
    flex: 1,
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors[scheme].primary} />
      <Button
        text="Entrar"
        onPress={() => {
          navigation.navigate('Path');
        }}
        style={{
          margin: 80,
        }}
      />
    </SafeAreaView>
  );
};

export { HomeScreen };
