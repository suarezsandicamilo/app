//

import { LessonType } from './lesson_type';

class SectionType {
  id: string;
  name: string;
  description: string;
  pathIndex: number;
  progress: number;
  lessons: LessonType[] = [];
}

export { SectionType };
