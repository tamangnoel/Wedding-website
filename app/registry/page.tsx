import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RegistryPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-4">Registry</h1>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've
          created registries at the following stores.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <RegistryCard
            name="Crate & Barrel"
            image="/placeholder.svg?height=200&width=200&text=C+%26+B"
            description="Home decor, furniture, and kitchen essentials"
            url="https://www.crateandbarrel.com"
          />

          <RegistryCard
            name="Williams-Sonoma"
            image="/placeholder.svg?height=200&width=200&text=W+S"
            description="Kitchen and cooking items for our new home"
            url="https://www.williams-sonoma.com"
          />

          <RegistryCard
            name="Pottery Barn"
            image="/placeholder.svg?height=200&width=200&text=PB"
            description="Furniture and home accessories"
            url="https://www.potterybarn.com"
          />

          <RegistryCard
            name="REI"
            image="/placeholder.svg?height=200&width=200&text=REI"
            description="Outdoor gear for our adventures together"
            url="https://www.rei.com"
          />

          <RegistryCard
            name="Honeymoon Fund"
            image="/placeholder.svg?height=200&width=200&text=%E2%9C%88%EF%B8%8F"
            description="Contribute to our dream honeymoon in Italy"
            url="https://www.honeyfund.com"
          />

          <RegistryCard
            name="Charity Donation"
            image="/placeholder.svg?height=200&width=200&text=%E2%9D%A4%EF%B8%8F"
            description="Donate to causes we care about in our name"
            url="https://www.charitynavigator.org"
          />
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="font-serif text-2xl text-center mb-4">Registry FAQ</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">When will we receive registry gifts?</h3>
              <p className="text-muted-foreground">
                Gifts purchased through our registries can either be sent directly to our home before the wedding or
                brought to the reception. Each registry has shipping options available during checkout.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Do you ship internationally?</h3>
              <p className="text-muted-foreground">
                Each store has different policies regarding international shipping. Please check with the specific
                retailer for international shipping options and costs.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Can I purchase a gift not on your registry?</h3>
              <p className="text-muted-foreground">
                While we've selected items we'd love for our new home, we appreciate any gift you choose to give. The
                most important gift is your presence at our wedding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RegistryCard({
  name,
  image,
  description,
  url,
}: {
  name: string
  image: string
  description: string
  url: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <Image src={image || "/placeholder.svg"} fill alt={name} className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            View Registry
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

