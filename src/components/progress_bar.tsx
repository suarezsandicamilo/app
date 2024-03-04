//

import { StyleSheet, View } from 'react-native';

import { getColor } from '../colors';

type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    progressBarContainer: {
      backgroundColor: getColor('primary_bg_subtle'),
      borderRadius: 8,
      height: 20,
    },
    progressContainer: {
      backgroundColor: getColor('primary'),
      borderRadius: 8,
      width: `${progress * 100}%`,
      height: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressContainer}></View>
      </View>
    </View>
  );
};

export { ProgressBar };
