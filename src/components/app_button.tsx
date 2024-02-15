//

import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../colors';

type Props = {
  text?: string;
};

const AppButton = ({ text }: Props) => {
  const { getColor } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor('primary'),
      borderRadius: 4,
      marginHorizontal: 80,
      padding: 10,
    },
    text: {
      color: getColor('white'),
      textTransform: 'uppercase',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text ?? ''}</Text>
    </View>
  );
};

export { AppButton };
