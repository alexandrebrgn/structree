import useStructree from "../hooks/hooks.tsx";
import {ChangeEvent} from "react";

export default function InputTextArea() {
  const {rawTree, setRawTree, parseTree} = useStructree()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRawTree(e.target.value);
    parseTree()
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const { selectionStart, selectionEnd, value } = e.currentTarget;

    if (e.key === "Tab") {
      e.preventDefault();
      const newValue = value.substring(0, selectionStart) + "  " + value.substring(selectionEnd);
      setRawTree(newValue);
      // setTimeout(() => e.currentTarget.selectionStart = e.currentTarget.selectionEnd = selectionStart + 4, 0);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const beforeCursor = value.substring(0, selectionStart);
      const afterCursor = value.substring(selectionEnd);

      // Récupération de l'indentation de la ligne en cours
      const match = beforeCursor.match(/(^|\n)(\s*)[^\n]*$/);
      const indentation = match ? match[2] : "";

      const newValue = beforeCursor + "\n" + indentation + afterCursor;
      setRawTree(newValue);
      // setTimeout(() => e.currentTarget.selectionStart = e.currentTarget.selectionEnd = selectionStart + indentation.length + 1, 0);
    }
  };

  return (
    <textarea
      value={rawTree}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="w-150 h-96 p-4 border rounded-lg font-mono text-sm
                 border-gray-300 resize-none shadow-sm"
      style={{whiteSpace: 'pre'}}
    />
  )
}