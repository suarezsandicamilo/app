//

import { Pressable, StyleSheet, Text } from 'react-native';

import { getColor } from '../colors';

type Props = {
  text?: string;
  onPress?: () => void;
};

const AppButton = ({ text, onPress }: Props) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor('primary'),
      borderRadius: 4,
      marginHorizontal: 80,
      padding: 10,
    },
    text: {
      color: getColor('white'),
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  });

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text ?? ''}</Text>
    </Pressable>
  );
};

export { AppButton };
