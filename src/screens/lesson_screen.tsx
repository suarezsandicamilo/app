//

import { SafeAreaView, StatusBar } from 'react-native';

import { Lesson } from '../models';

import { getColor } from '../colors';

type Props = {
  navigation: any;
  route: any;
};

const LessonScreen = ({ navigation, route }: Props) => {
  const { lesson } = route.params as {
    lesson: Lesson;
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={getColor('primary')} />
    </SafeAreaView>
  );
};

export { LessonScreen };
