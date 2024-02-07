//

import { useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { Header, Icon } from '@rneui/base';

import { SectionType } from '../models/section_type';

import { SectionCard } from '../components/section_card';

import { ThemeContext, getColor } from '../colors';

import data from '../../data/data.json';

const PathScreen = ({ navigation }: any) => {
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

  const sections = data.sections as SectionType[];

  const headerIcon = (
    <Icon
      name="menu"
      color={getColor(theme, 'white')}
      style={styles.headerIcon}
      onPress={() => {
        navigation.navigate('Home');
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
        <FlatList
          data={sections}
          renderItem={({ item }) => {
            return <SectionCard key={item.id} {...item} />;
          }}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { PathScreen };
