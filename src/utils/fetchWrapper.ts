import { env } from "@/lib/env";
import logger from "./logger";

const BASE_URL = env.API_URL;

const fetchWrapper = async (url: string, options?: RequestInit) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`, options);
        if (!response?.ok) {
            const errorData = await response.json();
            throw new Error(errorData?.message ?? "Something went wrong");
        }
        return await response.json();
    } catch (error) {
        logger.error(error);
        throw error;
    }
};


export default fetchWrapper;
