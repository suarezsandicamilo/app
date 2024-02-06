//

import {
  Appearance,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { Button } from '@rneui/base';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors[scheme].primary,
    borderRadius: 4,
    margin: 80,
    padding: 20,
  },
  buttonText: {
    color: colors[scheme].white,
    textTransform: 'uppercase',
  },
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
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate('Path');
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
};

export { HomeScreen };
