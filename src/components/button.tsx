//

import {
  Appearance,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();

const primaryStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors[scheme].primary,
    borderRadius: 4,
    padding: 20,
  },
  text: {
    color: colors[scheme].white,
    fontSize: 17,
    textTransform: 'uppercase',
  },
});

const secondaryStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors[scheme].primary_bg_subtle,
    borderRadius: 4,
    padding: 20,
  },
  text: {
    color: colors[scheme].body_color,
    fontSize: 17,
    textTransform: 'uppercase',
  },
});

type Props = {
  fontSize?: number;
  style?: StyleProp<ViewStyle>;
  text?: string;
  type?: 'primary' | 'secondary';
  onPress?: () => void;
};

const Button = (props: Props) => {
  const type = props.type ?? 'primary';

  let styles = primaryStyles;

  if (type === 'secondary') {
    styles = secondaryStyles;
  }

  return (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
      <Text
        style={[
          styles.text,
          {
            fontSize: props.fontSize,
          },
        ]}
      >
        {props.text}
      </Text>
    </Pressable>
  );
};

export { Button };
