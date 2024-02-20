//

import { Section } from '../models/section';

import { firestore, db } from './../firebase';

class SectionsController {
  static async all() {
    const ref = firestore.collection(db, 'sections');

    const sections = await firestore.getDocs(ref);

    return sections.docs.map((doc) => doc.data()) as Section[];
  }

  static async add(section: Pick<Section, 'name' | 'description'>) {
    const sections = await SectionsController.all();

    const ref = firestore.collection(db, 'sections');

    const docRef = firestore.doc(ref);

    await firestore.setDoc(docRef, {
      id: docRef.id,
      name: section.name,
      description: section.description,
      pathIndex: sections.length,
      progress: 0,
    });
  }
}

export { SectionsController };
