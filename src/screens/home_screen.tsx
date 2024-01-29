//

import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { SectionType } from '../models/section_type';

import data from './../../data/data.json';

import { Section } from '../components/section';

import colors from './../colors.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.bodyBackground,
    flex: 1,
  },
});

const HomeScreen = () => {
  const sections = data.sections as SectionType[];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.light.bodyBackground} />
      <FlatList
        data={sections}
        renderItem={({ item }) => {
          return <Section key={item.id} {...item} />;
        }}
      />
    </SafeAreaView>
  );
};

export { HomeScreen };
