import helmet from "helmet";

/**
 * Helmet configuration for a JSON API.
 * We are not serving browser-rendered HTML pages, so some browser-focused
 * protections can be reduced or disabled where appropriate.
 */
export const getHelmetConfig = () => {
  return helmet({
    // Disable Content Security Policy because this project returns JSON, not HTML pages.
    contentSecurityPolicy: false,

    // Use HSTS only in production because local development usually uses HTTP.
    hsts:
      process.env.NODE_ENV === "production"
        ? {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true
          }
        : false,

    // Prevent this app from being loaded inside frames.
    frameguard: { action: "deny" },

    // Hide Express technology information from response headers.
    hidePoweredBy: true,

    // Prevent MIME-type sniffing.
    noSniff: true
  });
};