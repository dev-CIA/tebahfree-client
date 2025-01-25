import type { MetadataRoute } from 'next'

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://www.gksyouth.kr' }]
}
