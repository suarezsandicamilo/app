//

import { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { Header, Icon } from '@rneui/base';

import { LessonType } from '../models/lesson_type';

import { SectionType } from '../models/section_type';

import { TaskType } from '../models/task_type';

import { CodeView } from '../components/code_view';

import { SectionsController } from '../controllers/sections_controller';

import { ThemeContext, getColor } from '../colors';

const AdminScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const [lines, setLines] = useState('');

  const [sections, setSections] = useState<SectionType[]>([]);

  const [lessons, setLessons] = useState<LessonType[]>([]);

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [selectedSection, setSelectedSection] = useState<SectionType>();

  const [selectedLesson, setSelectedLesson] = useState<LessonType>();

  const [selectedTask, setSelectedTask] = useState<TaskType>();

  useEffect(() => {
    (async () => {
      let sections = await SectionsController.read();

      setLines(JSON.stringify(sections, null, 2));

      setSections(sections);
    })();
  }, []);

  useEffect(() => {
    if (selectedSection != null) {
      setLessons(selectedSection.lessons);
    }
  }, [selectedSection]);

  useEffect(() => {
    if (selectedLesson != null) {
      setTasks(selectedLesson.tasks);
    }
  }, [selectedLesson]);

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
    pickerContainer: {
      marginHorizontal: 20,
      marginVertical: 0,
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
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedSection}
              onValueChange={(section) => {
                setSelectedSection(section);
              }}
            >
              {sections.map((section) => {
                return (
                  <Picker.Item
                    key={section.id}
                    label={section.name}
                    value={section}
                  />
                );
              })}
            </Picker>
          </View>
          <Text style={styles.title}>Lecciones</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedLesson}
              onValueChange={(lesson) => {
                setSelectedLesson(lesson);
              }}
            >
              {lessons.map((lesson) => {
                return (
                  <Picker.Item
                    key={lesson.id}
                    label={lesson.name}
                    value={lesson}
                  />
                );
              })}
            </Picker>
          </View>
          <Text style={styles.title}>Tareas</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedTask}
              onValueChange={(task) => {
                setSelectedTask(task);
              }}
            >
              {tasks.map((task) => {
                return (
                  <Picker.Item key={task.id} label={task.name} value={task} />
                );
              })}
            </Picker>
          </View>
          <Text style={styles.title}>Datos</Text>
          <CodeView text={lines} />
        </ScrollView>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { AdminScreen };
