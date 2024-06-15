'use client'
import { useSession } from "next-auth/react"
import { options } from "../api/auth/[...nextauth]/options"
import { AuthOptions } from "next-auth";

export default function About() {
     // const session = useSession();
     return(
          <section>
               About Page
          </section>
     )
}