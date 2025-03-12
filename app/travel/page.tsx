"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Plane, Bed, Train } from "lucide-react"

export default function TravelPage() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This would normally initialize a map like Google Maps
    // For the demo, we'll just show a placeholder
    const loadMap = () => {
      if (mapRef.current) {
        // Map initialization would go here
      }
    }

    loadMap()
  }, [])

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-8">Travel & Accommodations</h1>

        <Tabs defaultValue="venues" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="venues">Venues</TabsTrigger>
            <TabsTrigger value="accommodations">Accommodations</TabsTrigger>
            <TabsTrigger value="transportation">Transportation</TabsTrigger>
          </TabsList>

          <TabsContent value="venues" className="pt-6">
            <div className="space-y-8">
              <div className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="relative h-[250px]">
                  <Image
                    src="/placeholder.svg?height=500&width=1000&text=St.+Mark's+Church"
                    fill
                    alt="St. Mark's Church"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif mb-2">Ceremony: St. Mark's Church</h2>
                  <p className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    1111 O'Farrell St, San Francisco, CA 94109
                  </p>
                  <p className="mb-4">
                    Our ceremony will be held at the beautiful St. Mark's Church in the heart of San Francisco. The
                    church features stunning stained glass windows and a warm, intimate atmosphere.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-lg overflow-hidden border border-border">
                <div className="relative h-[250px]">
                  <Image
                    src="/placeholder.svg?height=500&width=1000&text=The+Grand+Ballroom"
                    fill
                    alt="The Grand Ballroom"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif mb-2">Reception: The Grand Ballroom</h2>
                  <p className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    555 Market St, San Francisco, CA 94105
                  </p>
                  <p className="mb-4">
                    Our reception will be held at The Grand Ballroom, just a 15-minute drive from the ceremony location.
                    This elegant venue features panoramic views of the city skyline and a spacious dance floor.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accommodations" className="pt-6">
            <div className="space-y-6">
              <p className="text-lg mb-6">
                We've arranged special rates at several hotels near our venues. Please mention the "Esther & Noel
                Wedding" when booking to receive the discounted rate.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Hotel San Francisco</CardTitle>
                    <CardDescription>4-star hotel, 0.5 miles from ceremony</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      1000 Pine St, San Francisco, CA
                    </p>
                    <p className="flex items-center mb-4">
                      <Bed className="h-4 w-4 mr-2" />
                      $249/night (wedding rate)
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+14155551234">Call to Book: (415) 555-1234</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Downtown Suites</CardTitle>
                    <CardDescription>Boutique hotel, 0.3 miles from reception</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      420 Market St, San Francisco, CA
                    </p>
                    <p className="flex items-center mb-4">
                      <Bed className="h-4 w-4 mr-2" />
                      $219/night (wedding rate)
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+14155555678">Call to Book: (415) 555-5678</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Bay View Inn</CardTitle>
                    <CardDescription>3-star hotel, 1 mile from reception</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      750 Howard St, San Francisco, CA
                    </p>
                    <p className="flex items-center mb-4">
                      <Bed className="h-4 w-4 mr-2" />
                      $189/night (wedding rate)
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+14155559876">Call to Book: (415) 555-9876</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Airbnb & Vacation Rentals</CardTitle>
                    <CardDescription>Various options throughout the city</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      San Francisco has many vacation rental options that may be suitable for families or guests
                      planning an extended stay.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
                        Browse Vacation Rentals
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transportation" className="pt-6">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-serif mb-4">Getting to San Francisco</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Plane className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">By Air</h3>
                      <p className="text-muted-foreground">
                        San Francisco International Airport (SFO) is the primary airport serving the area, located
                        approximately 13 miles south of downtown. Oakland International Airport (OAK) is another option,
                        located across the bay.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Train className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">By Train</h3>
                      <p className="text-muted-foreground">
                        Amtrak serves San Francisco via the Emeryville station, with connecting bus service to downtown.
                        The Capitol Corridor, Coast Starlight, and California Zephyr routes all connect to San
                        Francisco.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Car className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">By Car</h3>
                      <p className="text-muted-foreground">
                        San Francisco is accessible via Interstate 80 from the east and Highway 101 from the north and
                        south. Note that parking in the city can be limited and expensive.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif mb-4">Getting Around San Francisco</h2>
                <p className="mb-4">
                  San Francisco has excellent public transportation options, including BART (Bay Area Rapid Transit),
                  Muni buses and light rail, cable cars, and ride-sharing services.
                </p>
                <p className="mb-4">
                  We will be providing shuttle service between the ceremony and reception venues, as well as from the
                  recommended hotels to both venues. Details will be provided closer to the wedding date.
                </p>
                <div className="rounded-lg overflow-hidden border border-border">
                  <div ref={mapRef} className="h-[400px] relative">
                    <Image
                      src="/placeholder.svg?height=800&width=1200&text=Map+of+San+Francisco"
                      fill
                      alt="Map of San Francisco"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <p className="text-white text-lg font-medium">Interactive Map Placeholder</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">Have questions about travel or accommodations?</p>
          <Button asChild>
            <Link href="/faq">View our FAQ</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

