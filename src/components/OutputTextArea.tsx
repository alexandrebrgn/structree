import useStructree from "../hooks/hooks.tsx";
import {Copy} from "lucide-react";

export default function OutputTextArea() {
  const {finalTree} = useStructree()

  function CopyButton() {
    return (
      <div className="flex items-center justify-center rounded-md h-8 w-8 absolute top-2 right-2 hover:bg-gray-200">
        <button className="hover:cursor-pointer" title="Copy to clipboard" onClick={() => {
          navigator.clipboard.writeText(finalTree).then()
        }}><Copy className="h-4"/></button>
      </div>
    )
  }

  return (
    <div className="relative">
      <textarea
        value={finalTree}
        className="w-150 h-96 p-4 border-none rounded-lg font-mono text-sm
                   bg-gray-100 border-gray-300 resize-none shadow-sm focus:border-none"
        disabled
        style={{whiteSpace: 'pre'}}
      />
      <CopyButton/>
    </div>
  )
}