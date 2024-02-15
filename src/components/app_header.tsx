//

import { StyleSheet, Text } from 'react-native';

import { Header, Icon } from '@rneui/base';

import { useTheme } from '../colors';

type Props = {
  navigation: any;
  text?: string;
  theme: string;
  setTheme: (theme: string) => void;
};

const AppHeader = ({ navigation, text, theme, setTheme }: Props) => {
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
      name="arrow-back"
      color={getColor('white')}
      style={styles.icon}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  const rightIcon = (
    <Icon
      name="star"
      color={getColor('white')}
      style={styles.icon}
      onPress={() => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }}
    />
  );

  return (
    <Header
      containerStyle={styles.container}
      statusBarProps={{
        backgroundColor: getColor('primary'),
      }}
      leftComponent={leftIcon}
      centerComponent={<Text style={styles.text}>{text}</Text>}
      rightComponent={rightIcon}
    />
  );
};

export { AppHeader };
