//

import { StyleSheet, Text } from 'react-native';

import { Header, Icon } from '@rneui/base';

import { useTheme } from '../colors';

type Props = {
  text?: string;
  leftIcon?: string;
  rightIcon?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
};

const AppHeader = (props: Props) => {
  const { getColor } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor('primary'),
      borderColor: getColor('primary'),
      height: 80,
      justifyContent: 'center',
    },
    text: {
      color: getColor('white'),
      fontSize: 20,
    },
    icon: {
      height: '100%',
      justifyContent: 'center',
    },
  });

  const leftIcon = (
    <Icon
      name={props.leftIcon ?? 'menu'}
      color={getColor('white')}
      style={styles.icon}
      onPress={props.onLeftIconPress}
    />
  );

  const rightIcon = (
    <Icon
      name={props.leftIcon ?? 'star'}
      color={getColor('white')}
      style={styles.icon}
      onPress={props.onRightIconPress}
    />
  );

  const text = <Text style={styles.text}>{props.text ?? ''}</Text>;

  return (
    <Header
      containerStyle={styles.container}
      statusBarProps={{
        backgroundColor: getColor('primary'),
      }}
      leftComponent={leftIcon}
      centerComponent={text}
      rightComponent={rightIcon}
    />
  );
};

export { AppHeader };
