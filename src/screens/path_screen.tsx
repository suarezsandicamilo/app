//

import { useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { Section } from '../models';

import { SectionsController } from '../controllers';

import { AppHeader, SectionCard } from '../components';

import { useEffectAsync } from '../hooks';

import { getColor } from '../colors';

const PathScreen = ({ navigation }: any) => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffectAsync(async () => {
    setSections(await SectionsController.all());
  }, []);

  const styles = StyleSheet.create({
    activityIndicator: {
      margin: 20,
    },
    container: {
      backgroundColor: getColor('body_bg'),
      flex: 1,
    },
  });

  let components = (
    <View style={styles.activityIndicator}>
      <ActivityIndicator color={getColor('primary')} size="large" />
    </View>
  );

  if (sections.length > 0) {
    components = (
      <FlatList
        data={sections}
        renderItem={({ item }) => (
          <SectionCard key={item.id} section={item} navigation={navigation} />
        )}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={getColor('primary')} />
      <AppHeader
        text="Aplicación"
        leftIcon="arrow-back"
        onLeftIconPress={() => navigation.goBack()}
      />
      {components}
    </SafeAreaView>
  );
};

export { PathScreen };
