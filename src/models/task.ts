//

class Task {
  id: string;
  name: string;
  description: string;
  lessonIndex: number;
  progress: number;
  lessonId: string;
  type: 'theory' | 'practice';
}

class TheoryTask extends Task {
  category:
    | 'grapheme_and_phoneme'
    | 'grapheme_and_picture'
    | 'phoneme_and_picture';
  grapheme?: string;
  phoneme?: string;
  picture?: string;
}

class PracticeTask extends Task {
  //
}

export { Task, TheoryTask, PracticeTask };
