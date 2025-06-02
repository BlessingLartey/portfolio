import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 flex">
      <Sidebar />
      <MainContent />
    </div>
  )
}
