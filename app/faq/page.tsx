import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-4">Frequently Asked Questions</h1>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          We've compiled answers to common questions about our wedding. If you have any additional questions, please
          don't hesitate to contact us.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-serif mb-4">Event Details</h2>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is the dress code?</AccordionTrigger>
                    <AccordionContent>
                      The dress code for our wedding is formal attire. For men, this means a suit and tie or tuxedo. For
                      women, a formal dress or gown is appropriate. We recommend comfortable shoes as there will be
                      dancing!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I bring a plus-one?</AccordionTrigger>
                    <AccordionContent>
                      Due to venue capacity constraints, we can only accommodate the guests named on your invitation. If
                      your invitation includes "and guest," you are welcome to bring a plus-one. Please indicate this on
                      your RSVP.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Are children invited?</AccordionTrigger>
                    <AccordionContent>
                      While we love your little ones, our wedding will be an adult-only affair. We hope this gives all
                      parents a night to relax and enjoy themselves. The only exceptions are members of the wedding
                      party.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>When is the RSVP deadline?</AccordionTrigger>
                    <AccordionContent>
                      Please RSVP by May 1, 2025, either through our website or by returning the RSVP card included with
                      your invitation. If we don't hear from you by the deadline, we'll assume you're unable to attend.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">Venue & Accommodations</h2>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is there parking at the venues?</AccordionTrigger>
                    <AccordionContent>
                      The ceremony venue has limited street parking. The reception venue has a parking garage with a
                      special event rate of $15 for the evening. We recommend ride-sharing services or using our shuttle
                      service between the hotels and venues.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Will there be transportation between venues?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we will provide shuttle service between the ceremony and reception venues. The shuttle will
                      also run from the recommended hotels to both venues before and after the wedding. A detailed
                      schedule will be provided closer to the wedding date.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Do you have room blocks at hotels?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we have reserved room blocks at three hotels near our venues. Please see the Travel page for
                      details and booking information. The special rates are available until May 1, 2025, so we
                      recommend booking early.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is the venue wheelchair accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes, both our ceremony and reception venues are wheelchair accessible. If you have any specific
                      accessibility needs, please let us know when you RSVP so we can ensure your comfort.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">Food & Drink</h2>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Will there be meal options?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can select your meal preference when you RSVP. We're offering beef tenderloin, roasted
                      chicken, grilled salmon, and a vegetarian option. Please make sure to note any dietary
                      restrictions or allergies.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Will there be an open bar?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we will have an open bar throughout the reception with a selection of beer, wine, and
                      spirits. We'll also offer signature cocktails and non-alcoholic options.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can you accommodate dietary restrictions?</AccordionTrigger>
                    <AccordionContent>
                      Please indicate any dietary restrictions or allergies when you RSVP. Our caterer can accommodate
                      gluten-free, dairy-free, vegan, and most allergy-specific meal requirements with advance notice.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">Gifts & Registry</h2>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Where are you registered?</AccordionTrigger>
                    <AccordionContent>
                      We are registered at Crate & Barrel, Williams-Sonoma, Pottery Barn, REI, and have also set up a
                      honeymoon fund. Links to all our registries can be found on the Registry page of our website.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Should I bring gifts to the wedding?</AccordionTrigger>
                    <AccordionContent>
                      While we appreciate your generosity, we kindly request that physical gifts not be brought to the
                      wedding. If purchasing from our registry, please arrange for the gift to be shipped to our home
                      address. If you prefer to give a card, there will be a designated card box at the reception.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>I'd like to give a different gift. Is that okay?</AccordionTrigger>
                    <AccordionContent>
                      Of course! While we've selected items for our registry that we would love, we appreciate any gift
                      you choose to give. Your presence at our wedding is the greatest gift of all.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4">Other Questions</h2>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Can I take photos during the ceremony?</AccordionTrigger>
                    <AccordionContent>
                      We kindly ask that guests do not take photos during the ceremony, as we have hired professional
                      photographers to capture these special moments. We would love for you to be fully present with us!
                      You're welcome to take photos during the reception, and we'll be sharing our professional photos
                      after the wedding.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Will there be a wedding hashtag?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Please tag any photos you share on social media with #JessAndMike2025 so we can see all your
                      wonderful memories from our special day.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I contact you with additional questions?</AccordionTrigger>
                    <AccordionContent>
                      If you have any questions that weren't answered here, please email us at jessandmike@example.com
                      or call Esther at (555) 123-4567. We'll get back to you as soon as possible.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4">Ready to let us know if you can attend?</p>
          <Button asChild size="lg">
            <Link href="/rsvp">RSVP Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

