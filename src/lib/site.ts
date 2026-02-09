const DEFAULT_SITE_URL = "https://stephaandahdal.vercel.app";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

export const SITE_URL = rawSiteUrl.endsWith("/")
  ? rawSiteUrl.slice(0, -1)
  : rawSiteUrl;

export const SITE_NAME = "Stephaan Dahdal";
