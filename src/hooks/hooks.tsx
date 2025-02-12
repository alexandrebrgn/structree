import {useContext} from "react";
import {StructreeContext} from "../context/context.tsx";

export default function useStructree() {
  const [rawTree, setRawTree] = useContext(StructreeContext)

  return ({
    rawTree,
    setRawTree
  })
}