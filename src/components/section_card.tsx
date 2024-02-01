//

import { Appearance, StyleSheet, Text, View } from 'react-native';

import { SectionType } from '../models/section_type';

import { Button } from './button';

import { Card } from './card';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();
// const scheme = 'dark';

const baseStyles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].body_bg,
  },
  button: {
    marginTop: 20,
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  text: {
    color: colors[scheme].body_color,
  },
});

const progressStyles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].primary_bg_subtle,
  },
  button: {
    marginTop: 20,
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  text: {
    color: colors[scheme].body_color,
  },
});

const SectionCard = (section: SectionType) => {
  let styles = baseStyles;
  let buttonType = 'secondary' as any;
  let buttonText = 'Avanzar';

  if (section.progress > 0) {
    styles = progressStyles;
    buttonType = 'primary';
    buttonText = 'Continuar';
  }

  return (
    <Card style={styles.container}>
      <Text style={styles.text}>{section.name}</Text>
      <View style={styles.buttonContainer}>
        <Button
          fontSize={12}
          style={styles.button}
          text={buttonText}
          type={buttonType}
        />
      </View>
    </Card>
  );
};

export { SectionCard };
