"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

export default function RSVPPage() {
  const [step, setStep] = useState(1);
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    mainGuest: {
      name: "",
      email: "",
      attending: "",
      mealChoice: "",
      dietaryRestrictions: "",
    },
    additionalGuests: [] as {
      name: string;
      mealChoice: string;
      dietaryRestrictions: string;
    }[],
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      mainGuest: {
        ...prev.mainGuest,
        [field]: value,
      },
    }));
  };

  const handleGuestChange = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const updatedGuests = [...prev.additionalGuests];
      updatedGuests[index] = {
        ...updatedGuests[index],
        [field]: value,
      };
      return {
        ...prev,
        additionalGuests: updatedGuests,
      };
    });
  };

  const addGuests = (count: number) => {
    setGuestCount(count);
    setFormData((prev) => {
      // Initialize or resize the additionalGuests array
      const guests = [...prev.additionalGuests];

      // Add empty guest objects up to the selected count
      while (guests.length < count - 1) {
        guests.push({
          name: "",
          mealChoice: "",
          dietaryRestrictions: "",
        });
      }

      // Remove extra guests if the count was decreased
      while (guests.length > count - 1) {
        guests.pop();
      }

      return {
        ...prev,
        additionalGuests: guests,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response.",
    });
  };

  const nextStep = () => {
    if (formData.mainGuest.attending === "no") {
      handleSubmit(new Event("submit") as any);
      return;
    }
    setStep(2);
  };

  if (isSubmitted) {
    return (
      <div className="container max-w-3xl mx-auto py-16 px-4">
        <Card className="text-center">
          <CardContent className="pt-10 pb-10">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <CardTitle className="text-3xl font-serif mb-4">
              Thank You!
            </CardTitle>
            <CardDescription className="text-lg mb-6">
              Your RSVP has been received. We're looking forward to celebrating
              with you!
            </CardDescription>
            <Button asChild>
              <a href="/">Return to Homepage</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-3xl mx-auto py-16 px-4">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-serif">RSVP</CardTitle>
          <CardDescription>
            Please let us know if you'll be joining us on our special day.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.mainGuest.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.mainGuest.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Will you be attending?</Label>
                  <RadioGroup
                    value={formData.mainGuest.attending}
                    onValueChange={(value) => handleChange("attending", value)}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="attending-yes" />
                      <Label htmlFor="attending-yes">Yes, I will attend</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="attending-no" />
                      <Label htmlFor="attending-no">No, I cannot attend</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.mainGuest.attending === "yes" && (
                  <div className="space-y-2">
                    <Label htmlFor="guestCount">
                      Number of Guests (including yourself)
                    </Label>
                    <Select
                      value={guestCount.toString()}
                      onValueChange={(value) =>
                        addGuests(Number.parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="1">1 (Just me)</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="pt-4">
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      !formData.mainGuest.name ||
                      !formData.mainGuest.email ||
                      !formData.mainGuest.attending
                    }
                    className="w-full"
                  >
                    {formData.mainGuest.attending === "no"
                      ? "Submit RSVP"
                      : "Next"}
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Your Meal Selection</h3>

                  <div className="space-y-2">
                    <Label htmlFor="meal-choice">Meal Preference</Label>
                    <Select
                      value={formData.mainGuest.mealChoice}
                      onValueChange={(value) =>
                        handleChange("mealChoice", value)
                      }
                      required
                    >
                      <SelectTrigger id="meal-choice">
                        <SelectValue placeholder="Select your meal" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="beef">Beef Tenderloin</SelectItem>
                        <SelectItem value="chicken">Roasted Chicken</SelectItem>
                        <SelectItem value="fish">Grilled Salmon</SelectItem>
                        <SelectItem value="vegetarian">
                          Vegetarian Option
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietary">Dietary Restrictions</Label>
                    <Textarea
                      id="dietary"
                      placeholder="Please list any allergies or dietary restrictions"
                      value={formData.mainGuest.dietaryRestrictions}
                      onChange={(e) =>
                        handleChange("dietaryRestrictions", e.target.value)
                      }
                    />
                  </div>
                </div>

                {formData.additionalGuests.map((guest, index) => (
                  <div
                    key={index}
                    className="space-y-6 pt-4 border-t border-border"
                  >
                    <h3 className="text-lg font-medium">
                      Guest {index + 2} Information
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor={`guest-name-${index}`}>
                        Guest's Name
                      </Label>
                      <Input
                        id={`guest-name-${index}`}
                        placeholder="Enter guest's full name"
                        value={guest.name}
                        onChange={(e) =>
                          handleGuestChange(index, "name", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`meal-choice-${index}`}>
                        Meal Preference
                      </Label>
                      <Select
                        value={guest.mealChoice}
                        onValueChange={(value) =>
                          handleGuestChange(index, "mealChoice", value)
                        }
                        required
                      >
                        <SelectTrigger id={`meal-choice-${index}`}>
                          <SelectValue placeholder="Select meal" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="beef">Beef Tenderloin</SelectItem>
                          <SelectItem value="chicken">
                            Roasted Chicken
                          </SelectItem>
                          <SelectItem value="fish">Grilled Salmon</SelectItem>
                          <SelectItem value="vegetarian">
                            Vegetarian Option
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`dietary-${index}`}>
                        Dietary Restrictions
                      </Label>
                      <Textarea
                        id={`dietary-${index}`}
                        placeholder="Please list any allergies or dietary restrictions"
                        value={guest.dietaryRestrictions}
                        onChange={(e) =>
                          handleGuestChange(
                            index,
                            "dietaryRestrictions",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                ))}

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="sm:flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.mainGuest.mealChoice}
                    className="sm:flex-1"
                  >
                    {isSubmitting ? "Submitting..." : "Submit RSVP"}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
