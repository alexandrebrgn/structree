// context.tsx
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

type StructreeContextType = {
  rawTree: string;
  setRawTree: Dispatch<SetStateAction<string>>;
  finalTree: string;
  setFinalTree: Dispatch<SetStateAction<string>>;
};

export const StructreeContext = createContext<StructreeContextType>({
  rawTree: '',
  setRawTree: () => {},
  finalTree: '',
  setFinalTree: () => {},
});

export function StructreeProvider({ children }: PropsWithChildren) {
  const [rawTree, setRawTree] = useState('');
  const [finalTree, setFinalTree] = useState('');

  return (
    <StructreeContext.Provider value={{
      rawTree,
      setRawTree,
      finalTree,
      setFinalTree
    }}>
      {children}
    </StructreeContext.Provider>
  );
}