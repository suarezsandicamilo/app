//

import { useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { FAB, Header, Icon } from '@rneui/base';

import { SectionType } from '../models/section_type';

import { ThemeContext, getColor } from '../colors';

type Props = {
  navigation: any;
  route: any;
};

const SectionScreen = ({ navigation, route }: Props) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const { section } = route.params as {
    section: SectionType;
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor(theme, 'body_bg'),
      flex: 1,
    },
    fab: {
      marginTop: 20,
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
        navigation.goBack();
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

  const headerText = <Text style={styles.headerText}>{section.name}</Text>;

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
        <FlatList
          data={section.lessons}
          renderItem={({ item }) => {
            return (
              <FAB color={getColor(theme, 'primary')} style={styles.fab}>
                <Icon name="star" color={getColor(theme, 'white')} />
              </FAB>
            );
          }}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { SectionScreen };
