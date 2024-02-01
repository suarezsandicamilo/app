//

import {
  Appearance,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { SectionType } from '../models/section_type';

import { TopAppBar } from '../components/top_app_bar';

import { SectionCard } from '../components/section_card';

import data from '../../data/data.json';

import colors from '../colors.json';

const scheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[scheme].body_bg,
    flex: 1,
  },
});

const PathScreen = ({ navigation }: any) => {
  const sections = data.sections as SectionType[];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors[scheme].primary} />
      <TopAppBar
        title="Aplicación"
        leftIcon="menu"
        leftIconColor={colors[scheme].white}
        onLeftIconPress={() => {
          navigation.navigate('Home');
        }}
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
