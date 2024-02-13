//

import { useEffect, useState } from 'react';

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

import { SectionsController } from '../controllers/sections_controller';

import { ThemeContext, getColor } from '../colors';

const PathScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [sections, setSections] = useState<SectionType[]>([]);

  useEffect(() => {
    (async () => {
      setSections(await SectionsController.read());
    })();
  }, []);

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
            return (
              <SectionCard
                key={item.id}
                section={item}
                navigation={navigation}
              />
            );
          }}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { PathScreen };
