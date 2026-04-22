"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { storeUTMInSession } from "./StoreUtm";

export default function UTMTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Convert to string once and memoize to avoid unnecessary reruns
  const search = searchParams.toString();

  useEffect(() => {
    if (search) {
      const fullUrl = `${pathname}?${search}`;
      storeUTMInSession(fullUrl);
    }
  }, [pathname, search]);

  return null;
}
