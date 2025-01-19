import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config();
const client = createClient({
    projectId: process.env.projectid,
    dataset: process.env.dataset,
    apiVersion: "2025-01-18",
    useCdn: false,
    token: process.env.token,
});


export default client;

