//

import { SectionType } from '../models/section_type';

import { DataController } from './data_controller';

class SectionsController {
  static async read() {
    return await DataController.read<SectionType[]>('sections');
  }

  static async write(sections: SectionType[]) {
    await DataController.write('sections', sections);
  }
}

export { SectionsController };
