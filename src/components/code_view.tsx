//

import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../colors';

type Props = {
  text: string;
};

const CodeView = ({ text }: Props) => {
  const { getColor } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor('dark'),
      borderRadius: 16,
      elevation: 4,
      margin: 10,
      padding: 10,
    },
    text: {
      color: getColor('white'),
      fontFamily: 'monospace',
      fontSize: 10,
    },
  });

  const lines = text.split('\n');

  return (
    <View style={styles.container}>
      {lines.map((line, index) => {
        return (
          <Text numberOfLines={1} style={styles.text}>
            {`${index + 1}`.padEnd(3, ' ') + ` ${line}`}
          </Text>
        );
      })}
    </View>
  );
};

export { CodeView };
