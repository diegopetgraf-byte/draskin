/**
 * Production-safe logger utility
 * Suppresses detailed error logs in production to prevent info leakage
 */

const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
  error: (message: string, error?: unknown) => {
    if (isDevelopment) {
      console.error(message, error);
    }
    // In production, errors are silently suppressed
    // Could optionally integrate with error tracking service (Sentry, etc.)
  },

  warn: (message: string, data?: unknown) => {
    if (isDevelopment) {
      console.warn(message, data);
    }
  },

  info: (message: string, data?: unknown) => {
    if (isDevelopment) {
      console.info(message, data);
    }
  },

  log: (message: string, data?: unknown) => {
    if (isDevelopment) {
      console.log(message, data);
    }
  },
};
