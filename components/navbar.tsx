"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-40 w-full border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl md:text-2xl">
          E & N
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink href="/details" onClick={closeMenu}>
            Details
          </NavLink>
          <NavLink href="/our-story" onClick={closeMenu}>
            Our Story
          </NavLink>
          <NavLink href="/travel" onClick={closeMenu}>
            Travel
          </NavLink>
          <NavLink href="/registry" onClick={closeMenu}>
            Registry
          </NavLink>
          <NavLink href="/faq" onClick={closeMenu}>
            FAQ
          </NavLink>
          <Button asChild size="sm">
            <Link href="/rsvp">RSVP</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("fixed inset-0 z-50 bg-background pt-16 px-4", isOpen ? "flex flex-col" : "hidden")}>
        <div className="flex flex-col space-y-4">
          <NavLink href="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink href="/details" onClick={closeMenu}>
            Details
          </NavLink>
          <NavLink href="/our-story" onClick={closeMenu}>
            Our Story
          </NavLink>
          <NavLink href="/travel" onClick={closeMenu}>
            Travel
          </NavLink>
          <NavLink href="/registry" onClick={closeMenu}>
            Registry
          </NavLink>
          <NavLink href="/faq" onClick={closeMenu}>
            FAQ
          </NavLink>
          <Button asChild>
            <Link href="/rsvp" onClick={closeMenu}>
              RSVP
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link href={href} className="text-foreground/70 hover:text-foreground transition-colors py-2" onClick={onClick}>
      {children}
    </Link>
  )
}

