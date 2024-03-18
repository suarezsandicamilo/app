//

import { TheoryTask } from '../models';

import { GraphemeAndPhonemeTheory } from './grapheme_and_phoneme_theory';

import { GraphemeAndPictureTheory } from './grapheme_and_picture_theory';

type Props = {
  task: TheoryTask;
};

const Theory = ({ task }: Props) => {
  if (task.category === 'grapheme_and_phoneme') {
    return <GraphemeAndPhonemeTheory task={task} />;
  }

  if (task.category === 'grapheme_and_picture') {
    return <GraphemeAndPictureTheory task={task} />;
  }

  return <></>;
};

export { Theory };
