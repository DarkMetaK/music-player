declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CLIENT_ID: string;
      NEXT_PUBLIC_CLIENT_SECRET: string;
      NEXT_PUBLIC_AUTH_URL: string;
      NEXT_PUBLIC_SECRET: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}