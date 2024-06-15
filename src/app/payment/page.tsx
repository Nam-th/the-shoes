'use client'

import Button from "@/components/button/button";
import TableCart from "@/components/tableCart";


export default function PaymentPage() {

     return (
          <section className="w-full h-[100vh] flex justify-center items-center">
               <div className="flex mx-auto w-[1200px]">
                    <div className="basis-2/3 p-8">
                         <h2 className="mb-4">SHOPPING CART</h2>
                         <TableCart />

                         <span>Subtotal:</span>
                    </div>
                    <div className="basis-1/3 bg-slate-200 p-8 flex flex-col justify-between rounded-lg">
                         <h2 className="text-center">PAYMENT INFO</h2>

                         <div className="">
                              <p>Payment method:</p>
                              <input type="radio" name="paymentMethod" className="mr-4" value="credit" />Credit
                              <br />
                              <input type="radio" name="paymentMethod" className="mr-4" value="paypal" />Paypal
                         </div>

                         <div className="">
                              <p>Name on Card:</p>
                              <h3>John Carter</h3>
                         </div>

                         <div className="">
                              <p>Card Number:</p>
                              <p>**** **** **** 2153</p>
                         </div>

                         <Button type="primary" text="Check out" css="rounded-md w-full" />
                    </div>
               </div>
          </section>
     )
}