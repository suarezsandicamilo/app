//

import { Appearance, StyleSheet, Text, View } from 'react-native';

import { Button, Card } from '@rneui/base';

import { SectionType } from '../models/section_type';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();

const baseStyles = StyleSheet.create({
  button: {
    backgroundColor: colors[scheme].primary_bg_subtle,
    borderRadius: 4,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  buttonText: {
    color: colors[scheme].black,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  container: {
    backgroundColor: colors[scheme].body_bg,
    borderRadius: 4,
  },
  text: {
    color: colors[scheme].body_color,
  },
});

const progressStyles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].primary_bg_subtle,
    borderRadius: 4,
  },
  button: {
    backgroundColor: colors[scheme].primary,
    borderRadius: 4,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  buttonText: {
    color: colors[scheme].white,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  text: {
    color: colors[scheme].body_color,
  },
});

const SectionCard = (section: SectionType) => {
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
