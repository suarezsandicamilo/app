//

import { useState } from 'react';

import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

import { Header, Icon } from '@rneui/base';

import { ThemeContext, getColor } from '../colors';

const CreateTaskScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor(theme, 'body_bg'),
      flex: 1,
    },
    header: {
      backgroundColor: getColor(theme, 'primary'),
      borderColor: getColor(theme, 'primary'),
      height: 80,
      justifyContent: 'center',
    },
    headerIcon: {
      height: '100%',
      justifyContent: 'center',
    },
    headerText: {
      color: getColor(theme, 'white'),
      fontSize: 20,
    },
  });

  const headerIcon = (
    <Icon
      name="arrow-back"
      color={getColor(theme, 'white')}
      style={styles.headerIcon}
      onPress={() => {
        navigation.navigate('Admin');
      }}
    />
  );

  const rightIcon = (
    <Icon
      name="star"
      color={getColor(theme, 'white')}
      style={styles.headerIcon}
      onPress={() => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }}
    />
  );

  const headerText = <Text style={styles.headerText}>Aplicación</Text>;

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={getColor(theme, 'primary')} />
        <Header
          containerStyle={styles.header}
          statusBarProps={{
            backgroundColor: getColor(theme, 'primary'),
          }}
          leftComponent={headerIcon}
          centerComponent={headerText}
          rightComponent={rightIcon}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { CreateTaskScreen };
