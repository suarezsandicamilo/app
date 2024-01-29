//

import { Appearance, StyleSheet, Text, View } from 'react-native';

import { Icon } from '@rneui/base';

// Data
import colors from './../colors.json';

const scheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].primary,
    flexDirection: 'row',
    height: 60,
  },
  iconContainer: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 8,
    justifyContent: 'center',
  },
  title: {
    color: colors[scheme].white,
    fontSize: 21,
  },
});

type Props = {
  leftIcon?: string;
  leftIconColor?: string;
  rightIcon?: string;
  rightIconColor?: string;
};

const TopAppBar = (props: Props) => {
  let leftIcon = <></>;

  if (!Object.is(props.leftIcon, null)) {
    leftIcon = <Icon name={props.leftIcon} />;

    if (!Object.is(props.leftIconColor, null)) {
      leftIcon = <Icon name={props.leftIcon} color={props.leftIconColor} />;
    }
  }

  let rightIcon = <></>;

  if (!Object.is(props.rightIcon, null)) {
    rightIcon = <Icon name={props.rightIcon} />;

    if (!Object.is(props.rightIconColor, null)) {
      rightIcon = <Icon name={props.rightIcon} color={props.rightIconColor} />;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{leftIcon}</View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Aplicación</Text>
      </View>
      <View style={styles.iconContainer}>{rightIcon}</View>
    </View>
  );
};

export { TopAppBar };
