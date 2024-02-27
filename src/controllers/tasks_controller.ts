//

import { Lesson, Task } from '../models';

import { firestore, db } from '../firebase';

const { collection, doc, getDocs, orderBy, query, setDoc, where } = firestore;

class TasksController {
  static async all() {
    const ref = collection(db, 'tasks');

    const q = query(ref, orderBy('lessonIndex', 'asc'));

    const tasks = await getDocs(q);

    return tasks.docs.map((doc) => doc.data()) as Task[];
  }

  static async allOf(lesson: Lesson) {
    const ref = collection(db, 'tasks');

    const q = query(
      ref,
      orderBy('lessonIndex', 'asc'),
      where('lessonId', '==', lesson.id)
    );

    const lessons = await getDocs(q);

    return lessons.docs.map((doc) => doc.data()) as Task[];
  }

  static async add(lesson: Lesson, task: Pick<Task, 'name' | 'description'>) {
    const tasks = await TasksController.allOf(lesson);

    const ref = collection(db, 'tasks');

    const docRef = doc(ref);

    await setDoc(docRef, {
      id: docRef.id,
      name: task.name,
      description: task.description,
      lessonIndex: tasks.length,
      progress: 0,
      lessonId: lesson.id,
    });
  }
}

export { TasksController };
