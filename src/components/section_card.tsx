//

import { StyleSheet, Text, View } from 'react-native';

import { Button, Card } from '@rneui/base';

import { SectionType } from '../models/section_type';

import { useTheme } from '../colors';

const SectionCard = (section: SectionType) => {
  const { getColor, getEitherColor } = useTheme();

  const baseStyles = StyleSheet.create({
    button: {
      backgroundColor: getColor('primary_bg_subtle'),
      borderRadius: 4,
    },
    buttonContainer: {
      alignItems: 'flex-end',
    },
    buttonText: {
      color: getColor('secondary'),
      fontSize: 12,
      textTransform: 'uppercase',
    },
    container: {
      backgroundColor: getEitherColor('body_bg', 'dark_bg_subtle'),
      borderWidth: 0,
      marginBottom: 1,
    },
    text: {
      color: getColor('body_color'),
    },
  });

  const progressStyles = StyleSheet.create({
    button: {
      backgroundColor: getColor('primary'),
      borderRadius: 4,
    },
    buttonContainer: {
      alignItems: 'flex-end',
    },
    buttonText: {
      color: getColor('white'),
      fontSize: 12,
      textTransform: 'uppercase',
    },
    container: {
      backgroundColor: getEitherColor('primary_bg_subtle', 'secondary_bg'),
      borderWidth: 0,
      marginBottom: 1,
    },
    text: {
      color: getColor('body_color'),
    },
  });

  let styles = baseStyles;
  let buttonText = 'Avanzar';

  if (section.progress > 0) {
    styles = progressStyles;
    buttonText = 'Continuar';
  }

  return (
    <Card containerStyle={styles.container}>
      <Text style={styles.text}>{section.name}</Text>
      <View style={styles.buttonContainer}>
        <Button buttonStyle={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Button>
      </View>
    </Card>
  );
};

export { SectionCard };
