//

import { StyleSheet, Text, View } from 'react-native';

import { Button, Card } from '@rneui/base';

import { Section } from '../models/section';

import { getColor } from '../colors';

type Props = {
  section: Section;
  navigation: any;
};

const SectionCard = ({ section, navigation }: Props) => {
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
      backgroundColor: getColor('body_bg'),
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
      backgroundColor: getColor('primary_bg_subtle'),
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
        <Button
          buttonStyle={styles.button}
          onPress={() =>
            navigation.navigate('Section', {
              section,
            })
          }
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Button>
      </View>
    </Card>
  );
};

export { SectionCard };
