import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const urlFor = (source: any) =>
  createImageUrlBuilder(client).image(source);
