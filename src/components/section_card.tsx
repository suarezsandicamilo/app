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
    color: colors[scheme].secondary,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  container: {
    backgroundColor:
      scheme === 'light'
        ? colors[scheme].body_bg
        : colors[scheme].dark_bg_subtle,
    borderWidth: 0,
    marginBottom: 1,
  },
  text: {
    color: colors[scheme].body_color,
  },
});

const progressStyles = StyleSheet.create({
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
  container: {
    backgroundColor:
      scheme === 'light'
        ? colors[scheme].primary_bg_subtle
        : colors[scheme].secondary_bg,
    borderWidth: 0,
    marginBottom: 1,
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
