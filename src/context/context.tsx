import {createContext, Dispatch, PropsWithChildren, SetStateAction, useState} from "react";

export const StructreeContext = createContext<[string, Dispatch<SetStateAction<string>>]>(null as never)

export function StructreeProvider(props: PropsWithChildren) {
  const [rawTree, setRawTree] = useState('');

  return (
    <StructreeContext.Provider value={[rawTree, setRawTree]}>
      {props.children}
    </StructreeContext.Provider>
  )
}