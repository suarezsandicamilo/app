//

import { Pressable, StyleSheet, Text, View } from 'react-native';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { TheoryTask } from '../models';

type Props = {
  task: TheoryTask;
};

import { getColor } from '../colors';

const GraphemeAndPhonemeTheory = ({ task }: Props) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: getColor('primary'),
      borderRadius: 16,
      elevation: 4,
      height: 100,
      justifyContent: 'center',
      margin: 20,
      width: 100,
    },
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    grapheme: {
      color: getColor('white'),
      fontSize: 42,
      includeFontPadding: false,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.grapheme}>{task.grapheme}</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Icon name="volume-up" color={getColor('white')} size={42} />
      </Pressable>
    </View>
  );
};

export { GraphemeAndPhonemeTheory };
