//

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

import data from '../../data/data.json';

import * as colors from '../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.getColor('body_bg'),
    flex: 1,
  },
  header: {
    backgroundColor: colors.getColor('primary'),
    borderColor: colors.getColor('primary'),
    height: 80,
    justifyContent: 'center',
  },
  headerIcon: {
    height: '100%',
    justifyContent: 'center',
  },
  headerText: {
    color: colors.getColor('white'),
    fontSize: 20,
  },
});

const PathScreen = ({ navigation }: any) => {
  const sections = data.sections as SectionType[];

  const headerIcon = (
    <Icon
      name="menu"
      color={colors.getColor('white')}
      style={styles.headerIcon}
      onPress={() => {
        navigation.navigate('Home');
      }}
    />
  );

  const headerText = <Text style={styles.headerText}>Aplicación</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.getColor('primary')} />
      <Header
        containerStyle={styles.header}
        statusBarProps={{
          backgroundColor: colors.getColor('primary'),
        }}
        leftComponent={headerIcon}
        centerComponent={headerText}
      />
      <FlatList
        data={sections}
        renderItem={({ item }) => {
          return <SectionCard key={item.id} {...item} />;
        }}
      />
    </SafeAreaView>
  );
};

export { PathScreen };
