//

import { useEffect, useState } from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Audio } from 'expo-av';

import { MaterialIcons as Icon } from '@expo/vector-icons';

import { TheoryTask } from '../models';

import { getColor } from '../colors';

import { sounds } from '../sounds';

type Props = {
  task: TheoryTask;
};

const GraphemeAndPhonemeTheory = ({ task }: Props) => {
  const [sound, setSound] = useState<Audio.Sound>();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(sounds[task.phoneme]);

    setSound(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
      <Pressable style={styles.button} onPress={playSound}>
        <Icon name="volume-up" color={getColor('white')} size={42} />
      </Pressable>
    </View>
  );
};

export { GraphemeAndPhonemeTheory };
