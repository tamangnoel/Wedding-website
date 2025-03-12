import Link from "next/link"
import Image from "next/image"
import { CalendarHeart, MapPin, Gift, Users, MessageSquareText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Wedding couple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-4">Esther & Noel</h1>
          <p className="text-xl md:text-2xl mb-8">June 15, 2025 • San Francisco, CA</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/rsvp">RSVP Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg bg-transparent text-white border-white hover:bg-white/20"
            >
              <Link href="/details">View Details</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-4 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">We're Getting Married!</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We are so excited to celebrate our special day with you. Please explore our wedding website to find all the
            information you'll need for our celebration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Link
              href="/details"
              className="group flex flex-col items-center p-6 rounded-lg border border-border bg-card transition-all hover:shadow-md"
            >
              <CalendarHeart className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Event Details</h3>
              <p className="text-muted-foreground text-center">
                Find out when and where our special day will take place.
              </p>
            </Link>

            <Link
              href="/rsvp"
              className="group flex flex-col items-center p-6 rounded-lg border border-border bg-card transition-all hover:shadow-md"
            >
              <MessageSquareText className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">RSVP</h3>
              <p className="text-muted-foreground text-center">
                Let us know if you'll be joining us on our special day.
              </p>
            </Link>

            <Link
              href="/our-story"
              className="group flex flex-col items-center p-6 rounded-lg border border-border bg-card transition-all hover:shadow-md"
            >
              <Users className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Our Story</h3>
              <p className="text-muted-foreground text-center">Learn about our journey together and how we met.</p>
            </Link>

            <Link
              href="/travel"
              className="group flex flex-col items-center p-6 rounded-lg border border-border bg-card transition-all hover:shadow-md"
            >
              <MapPin className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Travel & Stay</h3>
              <p className="text-muted-foreground text-center">
                Information about accommodation and getting to the venue.
              </p>
            </Link>

            <Link
              href="/registry"
              className="group flex flex-col items-center p-6 rounded-lg border border-border bg-card transition-all hover:shadow-md"
            >
              <Gift className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Registry</h3>
              <p className="text-muted-foreground text-center">
                View our gift registry if you'd like to celebrate with us.
              </p>
            </Link>

            <Link
              href="/faq"
              className="group flex flex-col items-center p-6 rounded-lg border border-border bg-card transition-all hover:shadow-md"
            >
              <div className="h-10 w-10 mb-4 text-primary flex items-center justify-center text-xl font-bold">?</div>
              <h3 className="text-xl font-medium mb-2">FAQ</h3>
              <p className="text-muted-foreground text-center">Find answers to common questions about our wedding.</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

