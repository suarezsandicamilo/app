//

import { Pressable, StyleSheet, View } from 'react-native';

import { Icon } from '@rneui/base';

import { Lesson } from '../models/lesson';

import { useTheme } from '../colors';

type GenericProps = {
  lesson: Lesson;
  navigation: any;
  fabBackgroundColor: string;
  iconColor: string;
  icon: string;
  iconColorDark?: string;
  iconFontSize?: number;
};

type Props = {
  lesson: Lesson;
  navigation: any;
};

const GenericLessonFab = ({
  lesson,
  fabBackgroundColor,
  iconColor,
  icon,
  iconColorDark,
  iconFontSize,
}: GenericProps) => {
  const { getColor, getEitherColor } = useTheme();

  const frequency = (Math.PI * 2) / 8;

  const styles = StyleSheet.create({
    container: {
      borderRadius: 100,
      alignItems: 'center',
    },
    fab: {
      alignItems: 'center',
      backgroundColor: getColor(fabBackgroundColor as any),
      borderRadius: 40,
      elevation: 4,
      height: 80,
      justifyContent: 'center',
      marginTop: 20,
      right: Math.sin(lesson.sectionIndex * frequency) * 64,
      width: 80,
    },
    icon: {
      color: getEitherColor(
        iconColor as any,
        iconColorDark ?? (iconColor as any)
      ),
      fontSize: iconFontSize ?? 23,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.fab}>
        <Icon name={icon} iconStyle={styles.icon} />
      </Pressable>
    </View>
  );
};

const LessonFab = (props: Props) => {
  if (props.lesson.progress === 0) {
    return (
      <GenericLessonFab
        {...props}
        fabBackgroundColor="secondary_bg_subtle"
        iconColor="primary"
        icon="star"
      />
    );
  }

  if (props.lesson.progress === 1) {
    return (
      <GenericLessonFab
        {...props}
        fabBackgroundColor="primary"
        iconColor="secondary_bg_subtle"
        icon="star"
        iconColorDark="white"
      />
    );
  }

  if (props.lesson.progress === 2) {
    return (
      <GenericLessonFab
        {...props}
        fabBackgroundColor="primary"
        iconColor="secondary_bg_subtle"
        icon="check"
        iconColorDark="white"
        iconFontSize={34}
      />
    );
  }
};

export { LessonFab };
