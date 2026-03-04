interface AdminEmailProps {
  eventName: string;
  type: string;
  visitorPassId?: string;
  name: string;
  workEmail?: string;
  phoneNumber?: string;
  companyName?: string;
  industry?: string;
  jobTitle?: string;
  businessType?: string;
  budget?: string;
  location?: string;
  message?: string;
  termsAccepted: boolean;
  marketingConsent: boolean;
  submittedAt: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export const AdminRegistrationEmail = ({
  eventName,
  type,
  visitorPassId,
  name,
  workEmail,
  phoneNumber,
  companyName,
  industry,
  jobTitle,
  businessType,
  budget,
  location,
  message,
  termsAccepted,
  marketingConsent,
  submittedAt,
  utmSource = "N/A",
  utmMedium = "N/A",
  utmCampaign = "N/A",
}: AdminEmailProps) => {
  const row = (label: string, value?: string) => {
    if (!value) return "";
    return `
      <tr>
        <td style="padding:10px 0;font-weight:600;color:#374151;width:180px;">
          ${label}
        </td>
        <td style="padding:10px 0;color:#111827;">
          ${value}
        </td>
      </tr>
    `;
  };

  return `
  <div style="background:#f9fafb;padding:40px 16px;font-family:Arial,Helvetica,sans-serif;">

    <div style="max-width:640px;margin:auto;background:#ffffff;border-radius:10px;border:1px solid #e5e7eb;overflow:hidden">

      <!-- HEADER -->
      <div style="background:#166534;padding:24px 28px;color:#ffffff">
        <div style="font-size:12px;opacity:.9;letter-spacing:.5px">
          NEW REGISTRATION
        </div>
        <h2 style="margin:6px 0 2px;font-size:20px;font-weight:700">
          ${type} Registration
        </h2>
        <div style="font-size:13px;opacity:.85">
          ${eventName}
        </div>
      </div>

      <!-- BODY -->
      <div style="padding:28px">

        ${
          visitorPassId
            ? `
        <div style="background:#f0fdf4;border:1px solid #22c55e;border-radius:8px;padding:14px 16px;margin-bottom:22px;">
          <div style="font-size:12px;color:#15803d;font-weight:600;margin-bottom:2px;">
            VISITOR PASS ID
          </div>
          <div style="font-size:16px;font-weight:700;color:#14532d;">
            ${visitorPassId}
          </div>
        </div>
        `
            : ""
        }

        <!-- CONTACT INFO -->
        <div style="margin-bottom:24px;">
          <div style="font-size:13px;font-weight:700;color:#166534;margin-bottom:10px;">
            Contact Details
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${row("Name", name)}
            ${row("Email", workEmail)}
            ${row("Phone", phoneNumber)}
            ${row("Company", companyName)}
            ${row("Job Title", jobTitle)}
          </table>
        </div>

        <!-- BUSINESS INFO -->
        <div style="margin-bottom:24px;">
          <div style="font-size:13px;font-weight:700;color:#166534;margin-bottom:10px;">
            Business Information
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${row("Industry", industry)}
            ${row("Business Type", businessType)}
            ${row("Budget", budget)}
            ${row("Location", location)}
          </table>
        </div>

        ${
          message
            ? `
        <div style="margin-bottom:24px;">
          <div style="font-size:13px;font-weight:700;color:#166534;margin-bottom:8px;">
            Message
          </div>

          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;padding:12px;font-size:14px;color:#374151;">
            ${message}
          </div>
        </div>
        `
            : ""
        }

        <!-- TRACKING -->
        <div style="margin-bottom:18px;">
          <div style="font-size:13px;font-weight:700;color:#166534;margin-bottom:10px;">
            Lead Tracking
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${row("UTM Source", utmSource)}
            ${row("UTM Medium", utmMedium)}
            ${row("UTM Campaign", utmCampaign)}
          </table>
        </div>

        <!-- META -->
        <table style="width:100%;border-collapse:collapse;font-size:13px;color:#6b7280;">
          ${row("Terms Accepted", termsAccepted ? "Yes" : "No")}
          ${row("Marketing Consent", marketingConsent ? "Yes" : "No")}
          ${row("Submitted At", submittedAt)}
        </table>

      </div>

      <!-- FOOTER -->
      <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:14px 20px;font-size:12px;color:#6b7280;text-align:center">
        Automated lead notification • ${eventName}
      </div>

    </div>

  </div>
  `;
};
