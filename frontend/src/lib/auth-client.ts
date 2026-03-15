import { createAuthClient } from "better-auth/react";
import {
  inferAdditionalFields,
  emailOTPClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  plugins: [
    inferAdditionalFields({
      user: {
        firstName: { type: "string", required: false },
        lastName: { type: "string", required: false },
        phone: { type: "string", required: false },
        referralSource: { type: "string", required: false },
      },
    }),
    emailOTPClient(),
  ],
});
