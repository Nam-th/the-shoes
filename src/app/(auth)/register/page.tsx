'use client'

import { Spin } from "antd";
import Button from "antd/es/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function LoginPage() {
     const [isLoading, setisLoading] = useState<boolean>(false);
     const firstNameRef = useRef("");
     const lastNameRef = useRef("");
     const emailRef = useRef("");
     const passRef = useRef("");
     const passConfirmRef = useRef("");
     const router = useRouter();
     const handleRegister = async (event: any) => {
          try {
               setisLoading(true);
               event.preventDefault();

               const formData = {
                    first_name: firstNameRef.current,
                    last_name: lastNameRef.current,
                    email: emailRef.current,
                    password: passRef.current,
                    confirm_password: passConfirmRef.current
               }
               const res = await fetch(`http://localhost:8080/api/v1/users/register`, {
                    method: 'POST',
                    headers: {
                         'accept': 'application/json',
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
               })
               if(res.ok) {
                    router.push("/login");
               }
               
               setisLoading(false);
               const resJson = await res.json();
               alert(`${resJson.message}`);
          } catch (error) {
               alert(`${error}`)
          }
          
     }
     return (
          <section className="bg-white border border-solid border-[#333] min-h-[300px] min-w-[400px] p-12 rounded-lg">
               <form action="#" method="post">
                    <div className="pb-3">
                         <h2 className="text-center">REGISTER</h2>
                    </div>
                    <div className="">
                         <input
                              type="text"
                              name="firstName"
                              placeholder="firstName"
                              className="p-3 my-3 rounded-md w-full"
                              onChange={(event) => firstNameRef.current = event.target.value}
                         />
                         <input
                              type="text"
                              name="lastName"
                              placeholder="lastName"
                              className="p-3 my-3 rounded-md w-full"
                              onChange={(event) => lastNameRef.current = event.target.value}
                         />
                         <input
                              type="email"
                              name="email"
                              placeholder="Email address or Username..."
                              className="p-3 my-3 rounded-md w-full"
                              onChange={(event) => emailRef.current = event.target.value}
                         />
                         <input
                              type="text"
                              name="password"
                              placeholder="Enter password..."
                              className="p-3 my-3 rounded-md w-full"
                              onChange={(event) => passRef.current = event.target.value}
                         />
                         <input
                              type="text"
                              name="confirmpassword"
                              placeholder="Comfirm password..."
                              className="p-3 my-3 rounded-md w-full"
                              onChange={(event) => passConfirmRef.current = event.target.value}
                         />

                    </div>
               </form>
               <div className="mt-12">
                    <button className="border-none w-full h-10" onClick={(event) => handleRegister(event)}>
                         <span className="mx-3">SIGN UP</span>
                         {isLoading ? <Spin/> : <></>}
                    </button>
               </div>

               <p className="text-center py-5">- OR -</p>

               {/* <div className="flex justify-around ">
                    <div className="w-9 flex items-center">
                         <img className="w-full" src="data:image/png;base64,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" alt="" />
                         <span className="p-3">Facebook</span>
                    </div>
                    <div className="w-12 flex items-center">
                         <img className="w-full" src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg" alt="" />
                         <span className="p-3">Google</span>
                    </div>
               </div> */}
               <div className="text-center mt-3">
                    Already have an account, please <Link href={"/login"}>login</Link> 
               </div>
          </section>
     )
}