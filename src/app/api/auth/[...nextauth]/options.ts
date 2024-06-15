import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
     providers: [
          GitHubProvider({
               clientId: process.env.GITHUB_ID as string,
               clientSecret: process.env.GITHUB_SECRET as string,
          }),
          FacebookProvider({
               clientId: process.env.FACEBOOK_CLIENT_ID as string,
               clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
          }),
          GoogleProvider({
               clientId: process.env.GOOGLE_CLIENT_ID as string,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          }),
          CredentialsProvider({
               name: "credentials", //The name display on the sign in form (Sign in with <name>)
               credentials: {
                    email: {
                         type: "email",
                         placeholder: "abc@gmail.com"
                    },
                    password: {
                         type: "password",
                         placeholder: "----"
                    }
               },
               async authorize(credentials, req) {
                    try {
                         const formData = {
                              email: credentials?.email,
                              password: credentials?.password,
                         }
                         const res = await fetch('http://localhost:8080/api/v1/users/login', {
                              method: 'POST',
                              headers: {
                                   'accept': 'application/json   ',
                                   'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(formData),
                         });

                         if (res.ok) {
                              const resJson = await res.json();
                              const user = resJson.data;
                              return user;
                         }
                         else {
                              return null
                         }

                    } catch (error) {
                         return error
                    }

               }
          })
     ],

     pages: {
          signIn: "/login",
     },

     secret: process.env.NEXTAUTH_SECRET,

     callbacks: {
          async signIn({ user, account, profile, email, credentials }) {
            return true
          },
          async redirect({ url, baseUrl }) {
            return baseUrl
          },
          async session({ session, user, token }) {
            return session
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            return token
          }
     }
}