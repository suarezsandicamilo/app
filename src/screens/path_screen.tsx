//

import {
  Appearance,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Header, Icon } from '@rneui/base';

import { SectionType } from '../models/section_type';

import { SectionCard } from '../components/section_card';

import data from '../../data/data.json';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].body_bg,
    flex: 1,
  },
  header: {
    backgroundColor: colors[scheme].primary,
    height: 80,
    justifyContent: 'center',
  },
  headerIcon: {
    height: '100%',
    justifyContent: 'center',
  },
  headerText: {
    color: colors[scheme].white,
    fontSize: 20,
  },
});

const PathScreen = ({ navigation }: any) => {
  const sections = data.sections as SectionType[];

  const headerIcon = (
    <Icon
      name="menu"
      color={colors[scheme].white}
      style={styles.headerIcon}
      onPress={() => {
        navigation.navigate('Home');
      }}
    />
  );

  const headerText = <Text style={styles.headerText}>Aplicación</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors[scheme].primary} />
      <Header
        containerStyle={styles.header}
        statusBarProps={{
          backgroundColor: colors[scheme].primary,
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
