//

import { TaskType } from './task_type';

class LessonType {
  id: string;
  name: string;
  description: string;
  sectionIndex: number;
  progress: number;
  tasks: TaskType[] = [];
}

export { LessonType };
