//

import { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { Header, Icon } from '@rneui/base';

import { CodeView } from '../components/code_view';

import { DataController } from '../controllers/data_controller';

import { ThemeContext, getColor } from '../colors';

const AdminScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      let data = await DataController.read('sections');

      data = JSON.stringify(data, null, 2);

      setData(data);
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
    title: {
      borderBottomColor: getColor(theme, 'border_color'),
      borderBottomWidth: 1,
      color: getColor(theme, 'body_color'),
      fontSize: 20,
      marginHorizontal: 20,
      marginVertical: 10,
      paddingHorizontal: 0,
      paddingVertical: 10,
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

  const headerText = <Text style={styles.headerText}>Administrador</Text>;

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
        <ScrollView>
          <Text style={styles.title}>Secciones</Text>
          <Text style={styles.title}>Lecciones</Text>
          <Text style={styles.title}>Tareas</Text>
          <Text style={styles.title}>Datos</Text>
          <CodeView text={data} />
        </ScrollView>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { AdminScreen };
