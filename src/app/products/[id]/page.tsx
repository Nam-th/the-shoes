
import NumbericUpDown from "@/components/products/inputNumber";
import Price from "@/components/products/price";
import RadioInput from "@/components/products/radio";
import Rating from "@/components/rating";
import Image from "next/image";
import shoeImg from "../../../../public/image/shoes-1.png";
import Button from "antd/es/button";
import CardProduct from "@/components/cardProduct";


export default async function Product({ params }: { params: { id: string } }) {
     const optionsColor = [
          { label: 'Xanh', value: 'Xanh' },
          { label: 'Đỏ', value: 'Đỏ' },
          { label: 'Tím', value: 'Tím', },
          { label: 'Vàng', value: 'Vàng' },
          { label: 'Trắng', value: 'Trắng' },
     ];
     const optionsSize = [
          { label: '38', value: '38' },
          { label: '39', value: '39' },
          { label: '40', value: '40' },
          { label: '41', value: '41' },
          { label: '42', value: '42' },
          { label: '43', value: '43' },
          { label: '44', value: '44' },
     ];
     const shoes = [
          {
               name: "Nike Hot Trend",
               price: 300,
               description: "Hot 2021",
               rating: 4.9
          },
          {
               name: "Adidas Hot Trend",
               price: 200,
               description: "Hot 2022",
               rating: 4.8
          },
          {
               name: "Vans Hot Trend",
               price: 500,
               description: "VIP 2022",
               rating: 4.9
          },
          {
               name: "Second Hot Trend",
               price: 300,
               description: "Hot 2022",
               rating: 5.0
          },
          {
               name: "Kiwu Hot Trend",
               price: 400,
               description: "Hot 2022",
               rating: 4.9
          },
          {
               name: "Nike Hot Social",
               price: 390,
               description: "Collections 2022",
               rating: 4.9
          },

          {
               name: "Kytyposw Hot Hit",
               price: 199,
               description: "Hot 2020",
               rating: 4.9
          },
     ]

     const res = await fetch(`http://localhost:8080/api/v1/products?page=1&limit=10`)
     const data = await res.json();
     const products = data.data.items;

     // console.log("products, data");
     // console.log(products);
     // console.log(data);

     // Product is selected
     
     const product = products.find((pro: any) => pro._id === params.id);

     return (
          <section >
               <div className="mx-auto w-[1200px] flex py-12 justify-between">
                    <div className="basis-7/12 border-bottom">
                         <h2 className="text-4xl pb-2">{product?.name}</h2>
                         <p className="text-gray-500">{product?.description}</p>
                         <Rating rating={4.9} />
                         <div className="py-3 flex justify-between">
                              <div className="my-3">
                                   <p className="mb-1">Color</p>
                                   <RadioInput options={optionsColor} />
                              </div>
                              <div className="my-3">
                                   <p className="mb-1">Size</p>
                                   <RadioInput options={optionsSize} />
                              </div>
                         </div>
                         <div className="flex items-center justify-between mt-5">
                              <Price priceOrigin={+product?.price} discount={+product?.discount} />
                              <div className="">
                                   Số lượng:{" "}
                                   <NumbericUpDown />
                              </div>
                         </div>
                         <div className="flex py-8 justify-end">
                              <Button
                                   type="primary"
                                   size="large"
                              >
                                   Buy now
                              </Button>
                         </div>
                    </div>
                    <div className="basis-1/12"></div>
                    <div className="basis-4/12">
                         <Image src={shoeImg} alt="shoeImg" layout="responsive" />
                         <div className="h-15 w-20 flex justify-right">
                              <Image src={shoeImg} layout="responsive" className="border border-solid border-[#ddd] py-[20%]" alt="" />
                              <Image src={shoeImg} layout="responsive" className="border border-solid border-[#ddd] py-[20%]" alt="" />
                              <Image src={shoeImg} layout="responsive" className="border border-solid border-[#ddd] py-[20%]" alt="" />
                              <Image src={shoeImg} layout="responsive" className="border border-solid border-[#ddd] py-[20%]" alt="" />
                              <Image src={shoeImg} layout="responsive" className="border border-solid border-[#ddd] py-[20%]" alt="" />
                         </div>
                    </div>
               </div>

               {/* Related */}
               <div className="mx-auto w-[1200px] text-white wrap">
                    <div className="grid grid-cols-3 gap-4">
                         {
                              products.map((product: any) => {
                                   if (product._id !== params.id)
                                        return (
                                             <CardProduct
                                                  id={product._id}
                                                  name={product.name}
                                                  price={product.price}
                                                  description={product.description}
                                                  rating={product.rating}
                                             />
                                        )
                              })
                         }
                    </div>
               </div>
          </section>
     )
}