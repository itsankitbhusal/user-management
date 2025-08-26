import { env } from "@/lib/env";

interface ILogger {
  log: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
}

const isDev = env.NODE_ENV === "development";

const logger: ILogger = {
  log: (...args): void => {
    if (isDev) {
      console.log(...args);
    }
  },
  error: (...args): void => {
    if (isDev) {
      console.error(...args);
    }
  },
};

export default logger;
