//

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { TheoryTask } from '../models';

import { getColor } from '../colors';

type Props = {
  task: TheoryTask;
};

const GraphemeAndPictureTheory = ({ task }: Props) => {
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
      justifyContent: 'center',
    },
    image: {
      borderRadius: 16,
      height: 200,
      width: 200,
    },
    imageContainer: {
      margin: 20,
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
      <View style={styles.imageContainer}>
        <Image style={styles.image} src="https://placehold.co/200x200/png" />
      </View>
    </View>
  );
};

export { GraphemeAndPictureTheory };
