import useStructree from "../hooks/hooks.tsx";

export default function OutputTextArea() {
  const {finalTree} = useStructree()

  return (
    <div className="relative">
      <textarea
        value={finalTree}
        className="w-150 h-96 p-4 border-none rounded-lg font-mono text-sm
                   bg-gray-100 border-gray-300 resize-none shadow-sm focus:border-none"
        disabled
        style={{whiteSpace: 'pre'}}
      />
    </div>
  )
}