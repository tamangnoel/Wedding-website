import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl mb-4">Esther & Noel</h2>
        <p className="text-muted-foreground mb-6">June 15, 2025 • San Francisco, CA</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link href="/details" className="text-sm text-muted-foreground hover:text-foreground">
            Details
          </Link>
          <Link href="/our-story" className="text-sm text-muted-foreground hover:text-foreground">
            Our Story
          </Link>
          <Link href="/travel" className="text-sm text-muted-foreground hover:text-foreground">
            Travel
          </Link>
          <Link href="/registry" className="text-sm text-muted-foreground hover:text-foreground">
            Registry
          </Link>
          <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
            FAQ
          </Link>
          <Link href="/rsvp" className="text-sm text-muted-foreground hover:text-foreground">
            RSVP
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">&copy; {currentYear} Esther & Noel. All rights reserved.</p>
      </div>
    </footer>
  )
}

