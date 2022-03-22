import { useEffect, useRef } from 'react';
import { VariableSizeList } from "react-window";

const useResetCache = (dataLength: number) => {
  const ref = useRef<VariableSizeList>(null);

  useEffect(() => {
    ref.current != null && ref.current.resetAfterIndex(0, true);
  }, [dataLength]);

  return ref;
}

export default useResetCache;
