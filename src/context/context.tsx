import {createContext, Dispatch, PropsWithChildren, SetStateAction, useState} from "react";

export const MyStructreeContext = createContext<[string, Dispatch<SetStateAction<string>>]>(null as never)

export function MyStructreeProvider(props: PropsWithChildren) {
  const [rawTree, setRawTree] = useState('');

  return (
    <MyStructreeContext.Provider value={[rawTree, setRawTree]}>
      {props.children}
    </MyStructreeContext.Provider>
  )
}