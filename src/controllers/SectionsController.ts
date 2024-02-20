//

import { Section } from '../models/section';

import { firestore, db } from './../firebase';

const { collection, doc, getDocs, orderBy, query, setDoc } = firestore;

class SectionsController {
  static async all() {
    const ref = collection(db, 'sections');

    const q = query(ref, orderBy('pathIndex', 'asc'));

    const sections = await getDocs(q);

    return sections.docs.map((doc) => doc.data()) as Section[];
  }

  static async add(section: Pick<Section, 'name' | 'description'>) {
    const sections = await SectionsController.all();

    const ref = collection(db, 'sections');

    const docRef = doc(ref);

    await setDoc(docRef, {
      id: docRef.id,
      name: section.name,
      description: section.description,
      pathIndex: sections.length,
      progress: 0,
    });
  }
}

export { SectionsController };
