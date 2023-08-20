import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-tutorial-isagi",
    apiKey: process.env.API_KEY,
});