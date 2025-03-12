import Image from "next/image"
import Link from "next/link"
import { CalendarClock, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DetailsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-8">Wedding Details</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-2 flex items-center justify-center">
                <CalendarClock className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-center text-2xl">Ceremony</CardTitle>
              <CardDescription className="text-center">Saturday, June 15, 2025</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p>
                <Clock className="inline mr-2 h-4 w-4" />
                4:00 PM
              </p>
              <p>
                <MapPin className="inline mr-2 h-4 w-4" />
                St. Mark's Church
                <br />
                1111 O'Farrell St
                <br />
                San Francisco, CA 94109
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                The ceremony will last approximately 45 minutes. Please arrive 15-30 minutes early to be seated.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Reception"
                  className="text-primary"
                />
              </div>
              <CardTitle className="text-center text-2xl">Reception</CardTitle>
              <CardDescription className="text-center">Saturday, June 15, 2025</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p>
                <Clock className="inline mr-2 h-4 w-4" />
                6:00 PM - 11:00 PM
              </p>
              <p>
                <MapPin className="inline mr-2 h-4 w-4" />
                The Grand Ballroom
                <br />
                555 Market St
                <br />
                San Francisco, CA 94105
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Cocktail hour begins at 6:00 PM, followed by dinner and dancing. Dress code is formal attire.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-serif text-center mb-6">Wedding Day Schedule</h2>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 font-medium">3:30 PM</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Guest Arrival</h3>
                    <p className="text-muted-foreground">St. Mark's Church</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 font-medium">4:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Ceremony Begins</h3>
                    <p className="text-muted-foreground">St. Mark's Church</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 font-medium">5:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Ceremony Concludes</h3>
                    <p className="text-muted-foreground">Travel to reception venue</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 font-medium">6:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Cocktail Hour</h3>
                    <p className="text-muted-foreground">The Grand Ballroom</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 font-medium">7:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Dinner Service</h3>
                    <p className="text-muted-foreground">The Grand Ballroom</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 font-medium">8:30 PM</div>
                  <div className="flex-1">
                    <h3 className="font-medium">First Dance & Toasts</h3>
                    <p className="text-muted-foreground">The Grand Ballroom</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 font-medium">9:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Dancing Begins</h3>
                    <p className="text-muted-foreground">The Grand Ballroom</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 font-medium">11:00 PM</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Farewell</h3>
                    <p className="text-muted-foreground">The Grand Ballroom</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">Have questions about the wedding day?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/rsvp">RSVP Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

