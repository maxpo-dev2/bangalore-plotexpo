"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useRouter } from "next/navigation";

export default function RegistrationForm({ type }: { type: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    workEmail: "",
    companyName: "",
    industry: "",
    jobTitle: "",
    budget: "",
    bangalorePart: "",
    message: "",
    termsAccepted: true,
    marketingConsent: true,
    type: "",
  });

  useEffect(() => {
    if (type) setFormData((p) => ({ ...p, type }));
  }, [type]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/registration?type=${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push(`/registration/thankyou?type=${type}`);
      } else {
        alert("thank you,will contact you soon");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* FORM */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-lg md:text-xl font-semibold mb-6">
            {type === "exhibitor" && "Exhibitor Registration"}
            {type === "visitor" && "Visitor Registration"}
            {type === "delegate" && "Delegate Registration"}
            {type === "enquiry" && "Enquiry Form"}
            {!type && "General Enquiry"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label>Phone</Label>
                <Input
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.workEmail}
                onChange={(e) => handleInputChange("workEmail", e.target.value)}
                required
              />
            </div>

            {/* Conditional fields */}
            {type === "visitor" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Budget</Label>
                  <Input
                    placeholder="Your budget"
                    value={formData.budget}
                    onChange={(e) =>
                      handleInputChange("budget", e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label>Bangalore Area</Label>
                  <Select
                    value={formData.bangalorePart}
                    onValueChange={(v) => handleInputChange("bangalorePart", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Area" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="east">East</SelectItem>
                      <SelectItem value="west">West</SelectItem>
                      <SelectItem value="north">North</SelectItem>
                      <SelectItem value="south">South</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {type === "exhibitor" && (
              <>
                <div>
                  <Label>Company Name</Label>
                  <Input
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label>Industry</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(v) => handleInputChange("industry", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="farmland">Farmland</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {/* Message */}
            <div>
              <Label>Message</Label>
              <Textarea
                rows={3}
                placeholder="Optional message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <Checkbox
                  checked={formData.termsAccepted}
                  onCheckedChange={(v) =>
                    handleInputChange("termsAccepted", v as boolean)
                  }
                />
                <span>
                  I accept the{" "}
                  <a href="/terms" className="text-green-700 underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>

              <div className="flex gap-2">
                <Checkbox
                  checked={formData.marketingConsent}
                  onCheckedChange={(v) =>
                    handleInputChange("marketingConsent", v as boolean)
                  }
                />
                <span>I agree to receive updates and offers</span>
              </div>
            </div>

            <Button
              type="submit"
              disabled={!formData.termsAccepted || loading}
              className="w-full bg-green-700 hover:bg-green-800"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>

        {/* IMAGE */}
        <div className="hidden lg:block">
          <div className="h-[520px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/registration.png"
              alt="Registration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
