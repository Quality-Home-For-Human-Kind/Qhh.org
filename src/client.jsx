import client from "@sanity/client";

export default client({
  projectId: "6natqi5w",
  dataset: "production",
  useCdn: true,
  apiVersion: "v2025-11-10",
});
