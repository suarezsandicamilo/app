//

import { Text } from 'react-native';

import { TheoryTask } from '../models';

import { GraphemeAndPhonemeTheory } from './grapheme_and_phoneme_theory';

type Props = {
  task: TheoryTask;
};

const Theory = ({ task }: Props) => {
  if (task.category === 'grapheme_and_phoneme') {
    return <GraphemeAndPhonemeTheory task={task} />;
  }
};

export { Theory };
