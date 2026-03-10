"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
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

export default function RegistrationForm({ type }: { type: string }) {
  const router = useRouter();

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(80, "Name is too long")
      .required("Name is required"),

    workEmail: Yup.string()
      .trim()
      .email("Enter a valid email address")
      .required("Email is required"),

    phoneNumber: Yup.string()
      .required("Phone number is required")
      .test("valid-phone", "Enter a valid Indian phone number", (value) => {
        if (!value) return false;

        const cleaned = value.replace(/[^\d]/g, "");

        return /^(91)?[6-9]\d{9}$/.test(cleaned);
      }),

    companyName:
      type === "exhibitor"
        ? Yup.string().required("Company name is required")
        : Yup.string(),

    industry:
      type === "exhibitor"
        ? Yup.string().required("Industry is required")
        : Yup.string(),

    budget:
      type === "visitor"
        ? Yup.string().required("Budget is required")
        : Yup.string(),

    bengaluruPart:
      type === "visitor"
        ? Yup.string().required("Bengaluru part is required")
        : Yup.string(),

    termsAccepted: Yup.boolean().oneOf(
      [true],
      "You must accept terms & conditions",
    ),

    marketingConsent: Yup.boolean().oneOf(
      [true],
      "You must accept marketing consent",
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      workEmail: "",
      companyName: "",
      industry: "",
      jobTitle: "",
      budget: "",
      bengaluruPart: "",
      message: "",
      termsAccepted: true,
      marketingConsent: true,
      utm_source: "direct",
      utm_medium: "website",
      utm_campaign: "direct_campaign",
      type: type || "",
    },

    validationSchema,

    onSubmit: async (values: any, { setSubmitting }) => {
      try {
        const utmKeys = [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_term",
          "utm_content",
          "utm_id",
        ];

        utmKeys.forEach((key) => {
          const value = sessionStorage.getItem(key);
          if (value) values[key] = value;
        });

        const input = {
          utmSource: values.utm_source,
          utmMedium: values.utm_medium,
          utmCampaign: values.utm_campaign,
          ...values,
        };

        const res = await fetch(`/api/registration?type=${type}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(input),
        });

        if (res.ok) {
          router.push(`/registration/thankyou?type=${type}`);
        } else {
          alert("Thank you, we will contact you soon");
        }
      } catch {
        alert("Something went wrong");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (type) formik.setFieldValue("type", type);
  }, [type]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-14 bg-white text-black bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h1 className="text-lg md:text-xl font-semibold mb-6">
            {type === "exhibitor" && "Exhibitor Registration"}
            {type === "visitor" && "Visitor Registration"}
            {type === "delegate" && "Delegate Registration"}
            {type === "enquiry" && "Enquiry Form"}
            {!type && "General Enquiry"}
          </h1>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Name *</Label>
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name &&
                  typeof formik.errors.name === "string" && (
                    <p className="text-red-500 text-xs">{formik.errors.name}</p>
                  )}
              </div>

              <div>
                <Label>Phone *</Label>
                <Input
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
                {formik.touched.phoneNumber &&
                  typeof formik.errors.phoneNumber === "string" && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.phoneNumber}
                    </p>
                  )}
              </div>
            </div>

            <div>
              <Label>Email *</Label>
              <Input
                name="workEmail"
                type="email"
                placeholder="Email Address"
                value={formik.values.workEmail}
                onChange={formik.handleChange}
              />
              {formik.touched.workEmail &&
                typeof formik.errors.workEmail === "string" && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.workEmail}
                  </p>
                )}
            </div>

            {type === "visitor" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Budget *</Label>
                  <Input
                    name="budget"
                    placeholder="Your budget"
                    value={formik.values.budget}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.budget &&
                    typeof formik.errors.budget === "string" && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.budget}
                      </p>
                    )}
                </div>

                <div>
                  <Label>Bengaluru Area *</Label>
                  <Select
                    value={formik.values.bengaluruPart}
                    onValueChange={(v) =>
                      formik.setFieldValue("bengaluruPart", v)
                    }
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
                  {formik.touched.bengaluruPart &&
                    typeof formik.errors.bengaluruPart === "string" && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.bengaluruPart}
                      </p>
                    )}
                </div>
              </div>
            )}

            {type === "exhibitor" && (
              <>
                <div>
                  <Label>Company Name *</Label>
                  <Input
                    name="companyName"
                    placeholder="Company Name"
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.companyName &&
                    typeof formik.errors.companyName === "string" && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.companyName}
                      </p>
                    )}
                </div>

                <div>
                  <Label>Industry *</Label>
                  <Select
                    value={formik.values.industry}
                    onValueChange={(v) => formik.setFieldValue("industry", v)}
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
                  {formik.touched.industry &&
                    typeof formik.errors.industry === "string" && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.industry}
                      </p>
                    )}
                </div>
              </>
            )}

            <div>
              <Label>Message</Label>
              <Textarea
                rows={3}
                name="message"
                placeholder="Optional message"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <Checkbox
                  checked={formik.values.termsAccepted}
                  className="text-white"
                  onCheckedChange={(v) =>
                    formik.setFieldValue("termsAccepted", v)
                  }
                />
                <span>
                  I accept the{" "}
                  <a href="/terms" className="text-green-700 underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>
              {formik.errors.termsAccepted &&
                typeof formik.errors.termsAccepted === "string" && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.termsAccepted}
                  </p>
                )}

              <div className="flex gap-2">
                <Checkbox
                  checked={formik.values.marketingConsent}
                  className="text-white"
                  onCheckedChange={(v) =>
                    formik.setFieldValue("marketingConsent", v)
                  }
                />
                <span>I agree to receive updates and offers</span>
              </div>
              {formik.errors.marketingConsent &&
                typeof formik.errors.marketingConsent === "string" && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.marketingConsent}
                  </p>
                )}
            </div>

            <Button
              type="submit"
              disabled={!formik.values.termsAccepted || formik.isSubmitting}
              className="w-full bg-green-700 hover:bg-green-800"
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>

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
