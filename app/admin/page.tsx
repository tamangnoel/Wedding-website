"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ColorPicker } from "@/components/color-picker"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Demo password for the admin section
    if (password === "admin123") {
      setIsLoggedIn(true)
      setPasswordError("")
    } else {
      setPasswordError("Incorrect password. Please try again.")
    }
  }

  const handleSave = () => {
    toast({
      title: "Changes Saved",
      description: "Your changes have been saved successfully.",
    })
  }

  if (!isLoggedIn) {
    return (
      <div className="container max-w-md mx-auto py-16 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your password to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  {passwordError && <p className="text-sm text-destructive">{passwordError}</p>}
                  <p className="text-xs text-muted-foreground">For demo purposes, use: "admin123"</p>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Website Administration</h1>

      <Tabs defaultValue="content">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="design">Design & Layout</TabsTrigger>
          <TabsTrigger value="rsvp">RSVP Management</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Home Page</CardTitle>
              <CardDescription>Edit your home page content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="couple-names">Couple Names</Label>
                  <Input id="couple-names" defaultValue="Esther & Noel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wedding-date">Wedding Date</Label>
                  <Input id="wedding-date" defaultValue="June 15, 2025" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wedding-location">Wedding Location</Label>
                  <Input id="wedding-location" defaultValue="San Francisco, CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="banner-image">Banner Image</Label>
                  <div className="flex items-center gap-4">
                    <Input id="banner-image" type="file" className="flex-1" />
                    <Button variant="outline">Upload</Button>
                  </div>
                </div>
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
              <CardDescription>Edit your story content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="how-we-met">How We Met</Label>
                  <Textarea
                    id="how-we-met"
                    rows={5}
                    defaultValue="Our story began on a rainy Saturday afternoon in April 2020. We both happened to join the same virtual cooking class during lockdown..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-date">Our First Date</Label>
                  <Textarea
                    id="first-date"
                    rows={5}
                    defaultValue="After months of virtual dates, we finally met in person at Golden Gate Park in September 2020. We packed a picnic (Jessica made the food, of course)..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="proposal">The Proposal</Label>
                  <Textarea
                    id="proposal"
                    rows={5}
                    defaultValue="After three wonderful years together, Michael planned a surprise weekend getaway to Napa Valley. On a private vineyard tour..."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Story Photos</Label>
                  <div className="flex items-center gap-4">
                    <Input type="file" multiple className="flex-1" />
                    <Button variant="outline">Upload</Button>
                  </div>
                </div>
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registry Links</CardTitle>
              <CardDescription>Edit your registry information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="registry-intro">Registry Introduction</Label>
                  <Textarea
                    id="registry-intro"
                    defaultValue="Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've created registries at the following stores."
                  />
                </div>

                <div className="space-y-2">
                  <Label>Registry Links</Label>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <Input placeholder="Store Name" defaultValue="Crate & Barrel" />
                      <Input placeholder="URL" defaultValue="https://www.crateandbarrel.com" className="col-span-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Input placeholder="Store Name" defaultValue="Williams-Sonoma" />
                      <Input placeholder="URL" defaultValue="https://www.williams-sonoma.com" className="col-span-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <Input placeholder="Store Name" defaultValue="Pottery Barn" />
                      <Input placeholder="URL" defaultValue="https://www.potterybarn.com" className="col-span-2" />
                    </div>
                    <Button variant="outline" className="w-full">
                      + Add Registry
                    </Button>
                  </div>
                </div>

                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Colors</CardTitle>
              <CardDescription>Customize the colors of your wedding website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <ColorPicker defaultValue="#EC4899" />
                  </div>
                  <div className="space-y-2">
                    <Label>Secondary Color</Label>
                    <ColorPicker defaultValue="#8B5CF6" />
                  </div>
                  <div className="space-y-2">
                    <Label>Background Color</Label>
                    <ColorPicker defaultValue="#FFFFFF" />
                  </div>
                  <div className="space-y-2">
                    <Label>Text Color</Label>
                    <ColorPicker defaultValue="#1F2937" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Preview</Label>
                  <div className="p-4 border rounded-md">
                    <div className="p-4 bg-primary rounded-md text-primary-foreground mb-2">Primary Color</div>
                    <div className="p-4 bg-secondary rounded-md text-secondary-foreground mb-2">Secondary Color</div>
                    <div className="p-4 bg-background rounded-md text-foreground border mb-2">Background & Text</div>
                    <div className="p-4 bg-muted rounded-md text-muted-foreground">Muted Background & Text</div>
                  </div>
                </div>

                <Button onClick={handleSave}>Save Theme</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fonts</CardTitle>
              <CardDescription>Customize the typography of your wedding website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="heading-font">Heading Font</Label>
                    <select className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md">
                      <option>Playfair Display</option>
                      <option>Cormorant Garamond</option>
                      <option>Libre Baskerville</option>
                      <option>Lora</option>
                      <option>Merriweather</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="body-font">Body Font</Label>
                    <select className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md">
                      <option>Inter</option>
                      <option>Roboto</option>
                      <option>Open Sans</option>
                      <option>Lato</option>
                      <option>Nunito Sans</option>
                    </select>
                  </div>
                </div>

                <Button onClick={handleSave}>Save Fonts</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Page Layout</CardTitle>
              <CardDescription>Customize which pages are visible and their order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Enabled Pages</Label>
                  <div className="space-y-2">
                    {["Home", "Details", "Our Story", "Travel", "Registry", "FAQ", "RSVP"].map((page) => (
                      <div key={page} className="flex items-center justify-between p-2 border rounded-md">
                        <span>{page}</span>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            ↑
                          </Button>
                          <Button variant="ghost" size="sm">
                            ↓
                          </Button>
                          <div className="w-12 h-6 bg-primary rounded-full px-1 flex items-center">
                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Add Custom Page</Label>
                  <div className="flex gap-2">
                    <Input placeholder="Page Title" />
                    <Button>Add Page</Button>
                  </div>
                </div>

                <Button onClick={handleSave}>Save Layout</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rsvp" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>RSVP Responses</CardTitle>
              <CardDescription>View and manage guest responses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">Total Invites:</span> 150
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <span className="font-medium">Attending:</span> 87
                    </div>
                    <div>
                      <span className="font-medium">Declined:</span> 23
                    </div>
                    <div>
                      <span className="font-medium">Pending:</span> 40
                    </div>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          RSVP
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Guests
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Meal Choice
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-card divide-y divide-border">
                      {[
                        { name: "Esther Smith", rsvp: "Yes", guests: 2, meal: "Beef Tenderloin" },
                        { name: "Sarah Johnson", rsvp: "Yes", guests: 1, meal: "Vegetarian" },
                        { name: "Noel Smith", rsvp: "No", guests: 0, meal: "-" },
                        { name: "Lisa Davis", rsvp: "Yes", guests: 3, meal: "Salmon" },
                        { name: "David Wilson", rsvp: "Pending", guests: 2, meal: "-" },
                      ].map((guest, i) => (
                        <tr key={i}>
                          <td className="px-6 py-4 whitespace-nowrap">{guest.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                                guest.rsvp === "Yes"
                                  ? "bg-green-100 text-green-800"
                                  : guest.rsvp === "No"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {guest.rsvp}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{guest.guests}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{guest.meal}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">Export to CSV</Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>RSVP Settings</CardTitle>
              <CardDescription>Configure your RSVP form settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="rsvp-deadline">RSVP Deadline</Label>
                  <Input id="rsvp-deadline" type="date" defaultValue="2025-05-01" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max-guests">Maximum Guests Per Invitation</Label>
                  <Input id="max-guests" type="number" defaultValue="4" min="1" max="10" />
                </div>

                <div className="space-y-2">
                  <Label>Meal Options</Label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input defaultValue="Beef Tenderloin" className="flex-1" />
                      <Button variant="outline" size="icon">
                        X
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Input defaultValue="Roasted Chicken" className="flex-1" />
                      <Button variant="outline" size="icon">
                        X
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Input defaultValue="Grilled Salmon" className="flex-1" />
                      <Button variant="outline" size="icon">
                        X
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Input defaultValue="Vegetarian Option" className="flex-1" />
                      <Button variant="outline" size="icon">
                        X
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      + Add Meal Option
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="collect-dietary"
                    className="h-4 w-4 rounded border-gray-300"
                    defaultChecked
                  />
                  <Label htmlFor="collect-dietary">Collect Dietary Restrictions</Label>
                </div>

                <Button onClick={handleSave}>Save RSVP Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

