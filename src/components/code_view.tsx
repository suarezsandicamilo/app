//

import { ScrollView, StyleSheet, Text } from 'react-native';

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
      margin: 20,
      padding: 20,
    },
    codeText: {
      color: getColor('white'),
      fontFamily: 'monospace',
      fontSize: 10,
    },
    indexText: {
      color: getColor('gray'),
      fontFamily: 'monospace',
      fontSize: 10,
    },
  });

  const lines = text.split('\n').concat(new Array(2).fill(''));

  return (
    <ScrollView style={styles.container}>
      {lines.map((line, index) => {
        return (
          <Text key={index} numberOfLines={1}>
            <Text style={styles.indexText}>
              {index < lines.length - 2 ? `${index + 1}`.padEnd(3, ' ') : ''}
            </Text>
            <Text style={styles.codeText}>{` ${line}`}</Text>
          </Text>
        );
      })}
    </ScrollView>
  );
};

export { CodeView };
