import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function OurStoryPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-8">Our Story</h1>

        <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-xl overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=1600" fill alt="Esther and Noel" className="object-cover" />
        </div>

        <div className="space-y-12">
          {/* How We Met */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-6">How We Met</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="mb-4">
                      Our story began on a rainy Saturday afternoon in April 2020. We both happened to join the same
                      virtual cooking class during lockdown. Esther was attempting to make pasta from scratch while
                      Noel somehow managed to set off his smoke alarm trying to make a "simple" tomato sauce.
                    </p>
                    <p>
                      After the class, Noel sent Esther a direct message complimenting her pasta-making skills and
                      asking for some cooking tips. What started as culinary advice quickly turned into daily
                      conversations, virtual coffee dates, and eventually meeting in person once restrictions eased.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg?height=500&width=500" fill alt="How we met" className="object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Our First Date */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-6">Our First Date</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-last">
                    <p className="mb-4">
                      After months of virtual dates, we finally met in person at Golden Gate Park in September 2020. We
                      packed a picnic (Esther made the food, of course) and spent the entire day talking, laughing, and
                      exploring the park.
                    </p>
                    <p>
                      We ended the evening watching the sunset at Ocean Beach, and Noel finally worked up the courage
                      to hold Esther's hand. We both knew that day that we had found something special.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      fill
                      alt="Our first date"
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* The Proposal */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-6">The Proposal</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="mb-4">
                      After three wonderful years together, Noel planned a surprise weekend getaway to Napa Valley.
                      On a private vineyard tour, he suggested they take a walk through the vines to "see the view from
                      the hill."
                    </p>
                    <p className="mb-4">
                      At the top of the hill was a beautiful setup with flowers, champagne, and a small table. As the
                      sun began to set over the valley, Noel got down on one knee and asked Esther to marry him.
                      Through happy tears, she said yes!
                    </p>
                    <p>
                      Noel had arranged for a private dinner at the vineyard's restaurant, where both of their
                      families were waiting to surprise Esther and celebrate their engagement.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      fill
                      alt="The proposal"
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Photo Gallery */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Photo+${num}`}
                  fill
                  alt={`Photo ${num}`}
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

