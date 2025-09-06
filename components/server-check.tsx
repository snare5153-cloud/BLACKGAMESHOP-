"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw, Wifi, WifiOff, Clock } from "lucide-react"

interface ServerStatus {
  id: string
  name: string
  region: string
  status: "online" | "offline" | "maintenance"
  ping: number
  lastChecked: Date
}

const initialServers: ServerStatus[] = [
  { id: "sea", name: "Southeast Asia", region: "SEA", status: "online", ping: 45, lastChecked: new Date() },
  { id: "na", name: "North America", region: "NA", status: "online", ping: 120, lastChecked: new Date() },
  { id: "eu", name: "Europe", region: "EU", status: "online", ping: 85, lastChecked: new Date() },
  { id: "kr", name: "Korea", region: "KR", status: "maintenance", ping: 0, lastChecked: new Date() },
  { id: "jp", name: "Japan", region: "JP", status: "online", ping: 65, lastChecked: new Date() },
  { id: "br", name: "Brazil", region: "BR", status: "offline", ping: 0, lastChecked: new Date() },
]

export function ServerCheck() {
  const [servers, setServers] = useState<ServerStatus[]>(initialServers)
  const [isChecking, setIsChecking] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "offline":
        return "bg-red-500"
      case "maintenance":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "အွန်လိုင်း"
      case "offline":
        return "အော့ဖ်လိုင်း"
      case "maintenance":
        return "ပြုပြင်နေ"
      default:
        return "မသိ"
    }
  }

  const getPingColor = (ping: number) => {
    if (ping === 0) return "text-gray-400"
    if (ping < 50) return "text-green-400"
    if (ping < 100) return "text-yellow-400"
    return "text-red-400"
  }

  const checkServers = async () => {
    setIsChecking(true)

    // Simulate server checking with random delays and status changes
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const updatedServers = servers.map((server) => ({
      ...server,
      status:
        Math.random() > 0.1
          ? "online"
          : ((Math.random() > 0.5 ? "maintenance" : "offline") as "online" | "offline" | "maintenance"),
      ping: server.status === "online" ? Math.floor(Math.random() * 150) + 20 : 0,
      lastChecked: new Date(),
    }))

    setServers(updatedServers)
    setLastUpdate(new Date())
    setIsChecking(false)
  }

  useEffect(() => {
    // Auto-refresh every 30 seconds
    const interval = setInterval(checkServers, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-white text-xl">Game Server Status</CardTitle>
            <p className="text-blue-200 text-sm mt-1">ဂိမ်းဆာဗာအခြေအနေ</p>
          </div>
          <Button
            onClick={checkServers}
            disabled={isChecking}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isChecking ? "animate-spin" : ""}`} />
            {isChecking ? "စစ်နေ..." : "ပြန်စစ်"}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servers.map((server) => (
              <Card key={server.id} className="bg-white/5 border-white/10">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-white">{server.name}</h3>
                      <p className="text-sm text-blue-200">{server.region}</p>
                    </div>
                    <Badge className={`${getStatusColor(server.status)} text-white border-0`}>
                      {getStatusText(server.status)}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-300">
                        {server.status === "online" ? (
                          <Wifi className="w-4 h-4 mr-1 text-green-400" />
                        ) : (
                          <WifiOff className="w-4 h-4 mr-1 text-red-400" />
                        )}
                        Ping:
                      </div>
                      <span className={`text-sm font-mono ${getPingColor(server.ping)}`}>
                        {server.ping > 0 ? `${server.ping}ms` : "N/A"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-1" />
                        Last Check:
                      </div>
                      <span className="text-xs text-gray-400">{server.lastChecked.toLocaleTimeString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-blue-200">နောက်ဆုံးအပ်ဒိတ်: {lastUpdate.toLocaleString("my-MM")}</p>
            <p className="text-xs text-gray-400 mt-1">ဆာဗာအခြေအနေများကို ၃၀ စက္ကန့်တိုင်း အလိုအလျောက်စစ်ဆေးပါသည်</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
