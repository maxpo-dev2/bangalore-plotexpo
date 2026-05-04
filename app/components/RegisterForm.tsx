"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  CreateLeadDocument,
  type LeadStatus,
  type LeadType,
} from "@/graphql/generated/graphql";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useMutation } from "@apollo/client/react";
import { projectId, projectUrl } from "@/config/config";
import { toast } from "react-toastify";
import Image from "next/image";

const leadTypeMapping: Record<string, LeadType> = {
  enquiry: "ENQUIRY",
  delegate: "DELEGATE",
  exhibitor: "EXHIBITOR",
  sponsor: "SPONSOR",
  awards: "AWARDS",
  visitor: "VISITOR",
  buyer: "BUYER",
  speaker: "SPEAKER",
  whatsapp: "WA_ENQUIRY",
};

const titleMap: Record<string, string> = {
  exhibitor: "Exhibitor Registration",
  visitor: "Visitor Registration",
  delegate: "Delegate Registration",
  enquiry: "Enquiry Form",
};

export default function RegisterForm({ type = "enquiry" }: { type: string }) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [CreateLead] = useMutation(CreateLeadDocument);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

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

      let leadId = "";
      const input = {
        utmSource: values.utm_source,
        utmMedium: values.utm_medium,
        utmCampaign: values.utm_campaign,
        ...values,
      };

      const cmsInput = {
        name: values.name,
        email: values.workEmail,
        jobTitle: values.jobTitle,
        companyName: values.companyName,
        message: values.message ?? "",
        industry: values.industry ?? "",
        quantity: values.quantity ?? 1,
        phone: values.phoneNumber ?? "",
        leadType: leadTypeMapping[type],
        projectId: projectId,
        utmSource: values.utm_source,
        utmMedium: values.utm_medium,
        utmCampaign: values.utm_campaign,
        utmTerm: values.utm_term ?? "",
        utmContent: values.utm_content ?? "",
        price: 0,
        utmId: values.utm_id ?? "",
        country: values.country ?? "",
        awardCategory: values.awardCategory ?? "",
        status: "NEW" as LeadStatus,
        utmUrl: projectUrl ?? "",
      };

      try {
        const response = await CreateLead({
          variables: {
            input: cmsInput,
          },
        });

        const error = response?.error || null;
        if (error?.message.includes("already exists")) {
          toast.error(
            "Looks like you're already registered - we're excited to see you again!",
          );
          setSubmitting(false);
          return;
        }
        leadId = response?.data?.createLead?.id ?? "";
        router.push(`/register/thankyou?type=${type}`);
      } catch (err: any) {
        if (err.message && err.message.includes("already exists")) {
          toast.error(
            "Looks like you're already registered - we're excited to see you again!",
          );
          return;
        } else {
          toast.error(
            "Oops! Something didn't go as planned. Please try again.",
          );
          console.error("Error creating lead:", err.message);
        }
      } finally {
        setSubmitting(false);
      }
      setTimeout(async () => {
        try {
          await fetch(`/api/register?t=${type}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...input, leadId }),
          });
        } catch (error) {
          console.error("Post-submit failed:", error);
        } finally {
          setSubmitting(false);
        }
      }, 1000);
    },
  });

  useEffect(() => {
    if (type) formik.setFieldValue("type", type);
  }, [type]);

  const heading =
    titleMap[type] ?? type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4fbf4] via-white to-[#eef7ee] flex items-center justify-center md:mt-16 px-4 py-24">
      <div
        className={`w-full max-w-6xl transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top banner */}
        <div className="bg-[#00620F] text-white text-center py-5 px-8 rounded-t-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-75 mb-1">
            Bengaluru Plot Expo 2026
          </p>
          <h1 className="text-xl lg:text-2xl font-bold">BPE – {heading}</h1>
        </div>

        {/* Two-column row on lg+, single column on mobile */}
        <div className="flex flex-col lg:flex-row rounded-b-2xl overflow-hidden shadow-2xl shadow-green-100">
          {/* LEFT — form */}
          <div className="bg-white flex-1 px-8 pt-10 pb-10">
            <h2 className="text-lg font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
              {heading}
            </h2>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Name *
                  </Label>
                  <Input
                    name="name"
                    placeholder="Full Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="rounded-xl border-gray-200 focus:border-[#00620F] focus:ring-[#00620F]/20"
                  />
                  {formik.touched.name &&
                    typeof formik.errors.name === "string" && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.name}
                      </p>
                    )}
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Phone *
                  </Label>
                  <Input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    className="rounded-xl border-gray-200 focus:border-[#00620F] focus:ring-[#00620F]/20"
                  />
                  {formik.touched.phoneNumber &&
                    typeof formik.errors.phoneNumber === "string" && (
                      <p className="text-red-500 text-xs mt-1">
                        {formik.errors.phoneNumber}
                      </p>
                    )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email *
                </Label>
                <Input
                  name="workEmail"
                  type="email"
                  placeholder="Email Address"
                  value={formik.values.workEmail}
                  onChange={formik.handleChange}
                  className="rounded-xl border-gray-200 focus:border-[#00620F] focus:ring-[#00620F]/20"
                />
                {formik.touched.workEmail &&
                  typeof formik.errors.workEmail === "string" && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.workEmail}
                    </p>
                  )}
              </div>

              {/* Visitor-only fields */}
              {type === "visitor" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Budget *
                    </Label>
                    <Input
                      name="budget"
                      placeholder="Your budget"
                      value={formik.values.budget}
                      onChange={formik.handleChange}
                      className="rounded-xl border-gray-200 focus:border-[#00620F] focus:ring-[#00620F]/20"
                    />
                    {formik.touched.budget &&
                      typeof formik.errors.budget === "string" && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.budget}
                        </p>
                      )}
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Bengaluru Area *
                    </Label>
                    <Select
                      value={formik.values.bengaluruPart}
                      onValueChange={(v) =>
                        formik.setFieldValue("bengaluruPart", v)
                      }
                    >
                      <SelectTrigger className="rounded-xl border-gray-200">
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
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.bengaluruPart}
                        </p>
                      )}
                  </div>
                </div>
              )}

              {/* Exhibitor-only fields */}
              {type === "exhibitor" && (
                <>
                  <div className="space-y-1">
                    <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Company Name *
                    </Label>
                    <Input
                      name="companyName"
                      placeholder="Company Name"
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                      className="rounded-xl border-gray-200 focus:border-[#00620F] focus:ring-[#00620F]/20"
                    />
                    {formik.touched.companyName &&
                      typeof formik.errors.companyName === "string" && (
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.companyName}
                        </p>
                      )}
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Industry *
                    </Label>
                    <Select
                      value={formik.values.industry}
                      onValueChange={(v) => formik.setFieldValue("industry", v)}
                    >
                      <SelectTrigger className="rounded-xl border-gray-200">
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
                        <p className="text-red-500 text-xs mt-1">
                          {formik.errors.industry}
                        </p>
                      )}
                  </div>
                </>
              )}

              {/* Message */}
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Message
                </Label>
                <Textarea
                  rows={3}
                  name="message"
                  placeholder="Optional message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  className="rounded-xl border-gray-200  focus:border-[#00620F] focus:ring-[#00620F]/20 resize-none"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={formik.values.termsAccepted}
                    className="mt-0.5 border-gray-300 text-white data-[state=checked]:bg-[#00620F] data-[state=checked]:border-[#00620F]"
                    onCheckedChange={(v) =>
                      formik.setFieldValue("termsAccepted", v)
                    }
                  />
                  <span className="text-sm text-gray-600 leading-snug">
                    I accept the{" "}
                    <a
                      href="/terms"
                      className="text-[#00620F] underline underline-offset-2 hover:text-[#004d0b]"
                    >
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

                <div className="flex items-start gap-3">
                  <Checkbox
                    checked={formik.values.marketingConsent}
                    className="mt-0.5 border-gray-300  text-white data-[state=checked]:bg-[#00620F] data-[state=checked]:border-[#00620F]"
                    onCheckedChange={(v) =>
                      formik.setFieldValue("marketingConsent", v)
                    }
                  />
                  <span className="text-sm text-gray-600 leading-snug">
                    I agree to receive updates and offers
                  </span>
                </div>
                {formik.errors.marketingConsent &&
                  typeof formik.errors.marketingConsent === "string" && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.marketingConsent}
                    </p>
                  )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!formik.values.termsAccepted || formik.isSubmitting}
                className="w-full bg-[#00620F] hover:bg-[#004d0b] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-full transition-colors text-sm mt-2"
              >
                {formik.isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Registration"
                )}
              </button>
            </form>
          </div>

          {/* RIGHT — image (laptop only) */}
          <div className="hidden lg:block lg:w-[400px] xl:w-[480px] relative">
            <Image
              src="/images/register.webp"
              alt="Bengaluru Plot Expo venue"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-[#ffffff2f] to-transparent " />
            <div className="absolute bottom-8 left-6 right-6">
              <p className="text-white font-bold text-lg leading-snug drop-shadow">
                White House Convention Center
              </p>
              <p className="text-white text-sm mt-1 drop-shadow">
                HSR Layout, Bengaluru · 27–28 June 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
