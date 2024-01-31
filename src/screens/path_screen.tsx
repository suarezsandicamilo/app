//

import {
  Appearance,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { SectionType } from '../models/section_type';

import { Section } from '../components/section';

import { TopAppBar } from '../components/top_app_bar';

import data from '../../data/data.json';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].body_bg,
    flex: 1,
  },
});

const PathScreen = () => {
  const sections = data.sections as SectionType[];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors[scheme].primary} />
      <TopAppBar
        title="Aplicación"
        leftIcon="menu"
        leftIconColor={colors[scheme].white}
      />
      <FlatList
        data={sections}
        renderItem={({ item }) => {
          return <Section key={item.id} {...item} />;
        }}
      />
    </SafeAreaView>
  );
};

export { PathScreen };
