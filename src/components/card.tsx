//

import {
  Appearance,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].body_bg,
    borderRadius: 2,
    borderWidth: 0,
    color: colors[scheme].body_color,
    elevation: 2,
    margin: 10,
    padding: 20,
  },
});

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Card = (props: Props) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export { Card };
