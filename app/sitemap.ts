import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://plotexpo.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/past-event`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/register?t=exhibitor`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/register?t=visitor`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/register?t=enquiry`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/BPE%20Post%20Event%20Docket%20(2).pdf`,
      lastModified: new Date(),
      priority: 0.64,
    },
  ];
}
