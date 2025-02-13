import {useContext} from "react";
import {StructreeContext} from "../context/context.tsx";
import TreeBranch from "../types/types.ts";

export default function useStructree() {
  const {rawTree, setRawTree, finalTree, setFinalTree} = useContext(StructreeContext)

  const parseTree = () => {
    // console.log('parseTree()')
    const branches = rawTree.split('\n');
    // console.log('parseTree() - splited', branches)
    if (branches.length === 0) return;

    // Création de la racine
    const root: TreeBranch = {
      name: branches[0].trim(),
      children: [],
      isLastChild: false,
      parentBranch: null,
    };

    const stack: TreeBranch[] = [root];
    const indentPerLevel = 2;

    for (let i = 1; i < branches.length; i++) {
      const line = branches[i];
      let leadingSpaces = 0;

      // Comptage des espaces initiaux
      while (line[leadingSpaces] === ' ') leadingSpaces++;
      const depth = Math.floor(leadingSpaces / indentPerLevel);

      // Ajustement de la pile
      while (stack.length > depth) {
        stack.pop();
      }

      const parent = stack[stack.length - 1];
      const newNode: TreeBranch = {
        name: line.trim(),
        children: [],
        isLastChild: false,
        parentBranch: parent,
      };

      parent.children!.push(newNode);
      stack.push(newNode);
    }

    // Génération de l'arbre formaté
    const lines: string[] = [root.name!];

    const buildTreeLines = (node: TreeBranch, prefix: string): void => {
      // console.log('parseTree() - buildTreeLines()')
      const children = node.children || []
      children.forEach((child, index) => {
        const isLastChild = index === children.length - 1
        const connector = isLastChild ? '└── ' : '├── '
        lines.push(`${prefix}${connector}${child.name}`)

        const newPrefix = prefix + (isLastChild ? '    ' : '│   ')
        buildTreeLines(child, newPrefix)
      })
    }

    buildTreeLines(root, '')
    setFinalTree(lines.join('\n'))
    console.log("finalTree : \n", finalTree)
  };

  return ({
    rawTree,
    setRawTree,
    finalTree,
    parseTree,
  })
}