'use client'
import CardProduct from "@/components/cardProduct"
import { useEffect, useState } from "react";

export default function ProductPage() {
     const LIMIT: number = 8;
     const [products, setProducts] = useState<Product[]>([]);
     const [currentPage, setCurrentPage] = useState<number>(1);

     useEffect(() => {
          // fetch list products
          const fetchData = async () => {
               const res = await fetch(`http://localhost:8080/api/v1/products?page=${currentPage}&limit=${LIMIT}`)
               const data = await res.json();
               setProducts(data.data.items);
               console.log(products);
          }
          fetchData();
     }, [currentPage])


     return (
          <section className="py-10">
               <div className="mx-auto w-[1200px] text-white wrap">
                    <div className="grid grid-cols-4 gap-4">
                         {products.map((product: any) => (
                              <CardProduct
                                   key={product._id}
                                   id={product._id}
                                   name={product.name}
                                   price={product.price}
                                   description={product.description}
                                   rating={product.totalRatings}
                              />
                         ))}
                    </div>
               </div>
          </section>
     )
}