import { createClient } from "next-sanity";

const config = {
    projectId: "wd0p9tvc",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
}

export const sanityClient = createClient(config);


