//

import * as Crypto from 'expo-crypto';

import { SectionType } from '../models/section_type';

import { DataController } from './data_controller';

class SectionsController {
  static async read() {
    return await DataController.read<SectionType[]>('sections');
  }

  static async write(sections: SectionType[]) {
    await DataController.write('sections', sections);
  }

  static async create(name: string, description: string) {
    const sections = await this.read();

    const pathIndex = sections.length;

    const section = {
      id: Crypto.randomUUID(),
      name,
      description,
      pathIndex,
      progress: 0,
      lessons: [],
    };

    sections.push(section);

    this.write(sections);

    return section;
  }
}

export { SectionsController };
