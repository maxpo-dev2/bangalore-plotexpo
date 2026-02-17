export default function TermsAndConditions() {
  return (
    <section className="bg-white">
      {/* Header */}
      <div className="bg-[#00620F] text-white py-14 md:pt-32">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-green-100 text-sm">
            Last updated: February 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              1. Introduction
            </h2>
            <p>
              By accessing or using this website and registering for our events,
              you agree to comply with and be bound by these Terms & Conditions.
              If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              2. Event Registration
            </h2>
            <p>
              All registrations (Exhibitor, Visitor, or Enquiry) are subject to
              approval. We reserve the right to accept or reject any
              registration without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              3. Payments & Refunds
            </h2>
            <p>
              Fees paid for event participation are non-refundable unless
              explicitly stated. Any refund policy will be communicated
              separately for specific events.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content, logos, images, and materials displayed on this
              website are the intellectual property of the organizers and may
              not be reused without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              5. User Conduct
            </h2>
            <p>
              Users agree not to misuse the website, submit false information,
              or engage in any activity that may harm the platform or its users.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              We are not responsible for any direct or indirect loss arising
              from participation in the event or use of this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms & Conditions at any
              time. Continued use of the website constitutes acceptance of the
              revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              8. Contact
            </h2>
            <p>
              For any questions regarding these Terms, please contact us at
              <span className="font-medium text-[#00620F]">
                {" "}
                annu@mindsquaremedia.com
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
