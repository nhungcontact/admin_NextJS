import appConfig from "@/config/env";
import { User, UserRole, WithToken } from "@/types/user";
import { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const log = (action: string, message: string, data?: unknown) => {
  console.log(
    `🛡️  - ${new Date().toLocaleString()} - NextAuth: [${action}] ${message}`,
    data ?? "",
  );
};

const authOptions: AuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: appConfig.GOOGLE_ID,
    //   clientSecret: appConfig.GOOGLE_SECRET,
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        log("authorize", `${credentials?.username} | ${req.headers?.["user-agent"]}`);

        try {
          if (!appConfig.NEXTAUTH_CREDENTIAL_LOGIN_URL) {
            if (
              !credentials?.username ||
              !Object.values(UserRole).includes(credentials?.username as UserRole)
            ) {
              return null;
            }
            return {
              _id: credentials?.username + "000",
              displayName: "Fake " + credentials?.username,
              username: "fake_" + credentials?.username,
              email: "faker@user.email",
              tel: "0123456789",
              avatar: "https://picsum.photos/40",
              role: credentials?.username,
              at: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.VTgHF64x_BlCwW4prkdiOgqu1ZEMfKlOPGtDsXE7QWc",
              rt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.VTgHF64x_BlCwW4prkdiOgqu1ZEMfKlOPGtDsXE7QWc",
            };
          }
          const res = await fetch(appConfig.NEXTAUTH_CREDENTIAL_LOGIN_URL, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();

          // If no error and we have user data, return it
          if (res.ok && user) {
            return user;
          }
        } catch (error) {
          log("authorize", `Error:`, error);
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { _id, displayName, role, avatar, email, rt, at } =
          user as unknown as User & WithToken;
        token = {
          ...token,
          _id,
          displayName,
          role,
          avatar,
          email,
          rt,
          at,
        };
      }
      return token;
    },
    async session({ session, token }) {
      const { _id, displayName, role, avatar, email, at } = token;
      session.user = {
        _id,
        displayName,
        role,
        avatar,
        email,
        at,
      } as never;
      return session;
    },
  },
};

export default authOptions;
