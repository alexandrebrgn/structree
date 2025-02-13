export default function Navbar() {
  return (
    <div className="w-full h-auto flex border-b font-mono p-6">
      <div className="flex items-center gap-2">
        <img src="/public/icon.png" alt="icon" className="h-7"/>
        <h1 className="text-3xl">Structree</h1>
      </div>
    </div>
  )
}