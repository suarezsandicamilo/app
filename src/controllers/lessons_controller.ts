//

import { Lesson, Section } from '../models';

import { firestore, db } from '../firebase';

const { collection, doc, getDocs, orderBy, query, setDoc, where } = firestore;

class LessonsController {
  static async all() {
    const ref = collection(db, 'lessons');

    const q = query(ref, orderBy('sectionIndex', 'asc'));

    const sections = await getDocs(q);

    return sections.docs.map((doc) => doc.data()) as Lesson[];
  }

  static async allOf(section: Section) {
    const ref = collection(db, 'lessons');

    const q = query(
      ref,
      orderBy('sectionIndex', 'asc'),
      where('sectionId', '==', section.id)
    );

    const sections = await getDocs(q);

    return sections.docs.map((doc) => doc.data()) as Lesson[];
  }

  static async add(
    section: Section,
    lesson: Pick<Lesson, 'name' | 'description'>
  ) {
    const lessons = await LessonsController.allOf(section);

    const ref = collection(db, 'lessons');

    const docRef = doc(ref);

    await setDoc(docRef, {
      id: docRef.id,
      name: lesson.name,
      description: lesson.description,
      sectionIndex: lessons.length,
      progress: 0,
      sectionId: section.id,
    });
  }
}

export { LessonsController };
