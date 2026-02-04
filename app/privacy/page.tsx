export default function PrivacyPolicy() {
  return (
    <section className="bg-white ">
      {/* Header */}
      <div className="bg-[#00620F] text-white py-14 md:pt-32">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
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
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as name, email address,
              phone number, organization details, and registration preferences
              when you interact with our website or register for events.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to process registrations, communicate
              event updates, provide support, and improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              3. Data Sharing
            </h2>
            <p>
              We do not sell or rent your personal information. Data may be
              shared only with trusted partners required for event operations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              5. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance user experience and analyze
              traffic. You can control cookie usage through your browser
              settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices or content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              7. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#00620F] mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please reach
              out at
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
