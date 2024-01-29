//

import { FlatList, StyleSheet, Text, View } from 'react-native';

import { SectionType } from '../models/section_type';

import { Lesson } from './lesson';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
  },
  text: {
    marginBottom: 20,
  },
});

const Section = (section: SectionType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{section.name}</Text>
      <FlatList
        data={section.lessons}
        renderItem={({ item }) => {
          return <Lesson key={item.id} {...item} />;
        }}
      />
    </View>
  );
};

export { Section };
