//

import { SectionType } from '../models/section_type';

import { DataController } from './data_controller';

class SectionsController {
  static async read() {
    const contents = await DataController.read();

    return JSON.parse(contents).sections as SectionType[];
  }

  static async write(sections: SectionType[]) {
    const contents = await DataController.read();

    const data = JSON.parse(contents);

    data.sections = sections;

    await DataController.write(JSON.stringify(data));
  }
}

export { SectionsController };
