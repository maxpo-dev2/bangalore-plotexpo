export function storeUTMInSession(relativeUrl: string) {
  if (typeof window === "undefined") return;

  try {
    const absoluteUrl = new URL(relativeUrl, window.location.origin);
    const params = absoluteUrl.searchParams;

    const utmParams: Record<string, string> = {};
    const keys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "utm_id",
    ];

    keys.forEach((key) => {
      const value = params.get(key);
      if (value) {
        utmParams[key] = value;
        sessionStorage.setItem(key, value);
      }
    });
  } catch (err) {
    console.error("Failed to store UTM params:", err);
  }
}
