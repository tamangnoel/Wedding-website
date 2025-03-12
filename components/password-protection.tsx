"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HeartIcon } from "lucide-react"

export default function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if already authenticated
    const authenticated = localStorage.getItem("wedding-authenticated")
    if (authenticated === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // This is where you'd normally check against the correct password
    // For demo purposes, we're using "wedding2025" as the password
    const correctPassword = "wedding2025"

    if (password === correctPassword) {
      localStorage.setItem("wedding-authenticated", "true")
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect password. Please try again.")
    }
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <HeartIcon className="h-12 w-12 mx-auto mb-4 text-primary animate-pulse" />
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md p-6 rounded-lg border border-border bg-card">
          <div className="text-center mb-6">
            <HeartIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="font-serif text-2xl font-semibold mb-2">Esther & Noel&apos;s Wedding</h1>
            <p className="text-muted-foreground">Please enter the password to view our wedding website.</p>
            <p className="text-xs text-muted-foreground mt-2">Hint: The password is included in your invitation</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="off"
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <p className="text-xs text-muted-foreground">For demo purposes, use: &quot;wedding2025&quot;</p>
              </div>
              <Button type="submit" className="w-full">
                Enter
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

