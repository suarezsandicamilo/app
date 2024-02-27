//

import { useEffect } from 'react';

const useEffectAsync = (
  effect: () => Promise<void>,
  deps?: React.DependencyList
) => {
  useEffect(() => {
    (async () => {
      try {
        await effect();
      } catch (e) {
        console.error(e);
      }
    })();
  }, deps);
};

export { useEffectAsync };
