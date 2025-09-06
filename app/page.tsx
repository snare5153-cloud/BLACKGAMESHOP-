import { ServerCheck } from "@/components/server-check"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Mobile Legends Diamond Shop</h1>
          <p className="text-blue-200">မိုဘိုင်းလီဂျင်းဒိုင်မွန်းဆိုင်</p>
        </div>

        <ServerCheck />
      </div>
    </main>
  )
}
