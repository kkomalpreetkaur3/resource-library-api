import cors from "cors";

/**
 * Read allowed origins from environment variables.
 * The challenge requires comma-separated origins in ALLOWED_ORIGINS.
 */
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim())
  : [];

/**
 * CORS configuration for controlled cross-origin access.
 * We only allow trusted frontend origins listed in the environment variable.
 */
export const corsConfig = cors({
  /**
   * Only allow requests from origins defined in ALLOWED_ORIGINS.
   * This helps prevent unknown websites from making browser-based requests
   * to this API.
   */
  origin: allowedOrigins,

  /**
   * Explicitly allow only the methods required by the challenge.
   */
  methods: ["GET", "POST", "PUT", "DELETE"],

  /**
   * Allow common headers needed for JSON APIs and token-based auth.
   */
  allowedHeaders: ["Content-Type", "Authorization"],

  /**
   * Cache the preflight response for 10 minutes.
   * This reduces the number of OPTIONS preflight requests browsers need to make.
   */
  maxAge: 600
});