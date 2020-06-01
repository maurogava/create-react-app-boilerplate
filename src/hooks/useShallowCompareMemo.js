import { useRef } from 'react';
import { shallowEqualObjects } from 'shallow-equal';

function useShallowCompareMemo(value) {
  const ref = useRef();

  if (!shallowEqualObjects(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

export default useShallowCompareMemo;
