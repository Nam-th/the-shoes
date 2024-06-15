import { Row, Col } from "antd";
import Button from "./button/button";
import CardProduct from "./cardProduct";


export default function Categories() {

     return (
          <section className="bg-black text-white py-12">
               <div className="mx-auto w-[1200px]">
                    <h2 className="text-primary-color pb-10 text-4xl">Categories</h2>
                    <div className="mb-6">
                         <Button type="normal" text="All" css="mr-4" />
                         <Button type="normal" text="Boots" css="mr-4" />
                         <Button type="normal" text="Shoes" css="mr-4" />
                         <Button type="normal" text="Saldals" css="mr-4" />
                         <Button type="normal" text="Slippers" css="mr-4" />
                         <Button type="normal" text="Joggings" css="mr-4" />
                    </div>
                    <Row gutter={[25, 25]}>
                         <Col span={8}>
                              <CardProduct
                                   name="Nike Running"
                                   price="210"
                                   description="Running Nike - Collection 2024"
                                   rating={4.9}
                                   visibleBtn={true}
                                   imgSrc="https://down-vn.img.susercontent.com/file/vn-50009109-5f402766b5fd66814bca549ee7036e24"
                              />
                         </Col>
                         <Col span={8}>
                              <CardProduct
                                   name="Nike Running"
                                   price="210"
                                   description="Running Nike - Collection 2024"
                                   rating={4.9}
                                   visibleBtn={true}
                                   imgSrc="https://down-vn.img.susercontent.com/file/vn-50009109-5f402766b5fd66814bca549ee7036e24"
                              />
                         </Col>
                         <Col span={8}>
                              <CardProduct
                                   name="Nike Running"
                                   price="210"
                                   description="Running Nike - Collection 2024"
                                   rating={4.9}
                                   visibleBtn={true}
                                   imgSrc="https://down-vn.img.susercontent.com/file/vn-50009109-5f402766b5fd66814bca549ee7036e24"
                              />
                         </Col>
                    </Row>
               </div>
          </section>
     )
}