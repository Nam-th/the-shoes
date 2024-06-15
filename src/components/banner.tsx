import Image from "next/image";
import shoe from "../../public/image/banner-img.png"
import Rating from "./rating";
import Button from "antd/es/button";

export default function Banner() {
  return (
    <section className="bg-black">
      <div className="mx-auto w-[1200px] flex text-white pt-8">
        <div className="w-[50%] py-12">
          <div>
            <h1 className="text-5xl font-bold mb-1">Summer</h1>
            <h2 className="text-5xl font-bold text-primary-color">Collections</h2>
          </div>
          <p className="my-10">
            Feel the difference of next-level comfort as you go head-to-head against some of the toughet runners around.
          </p>
          <Button
            type="primary"
            size="large"
          > Buy now
          </Button>
          <div className="text-lg mt-7 flex">
            <div className="text-center w-100 pr-8 ">
              <p className="text-4xl text-center font-bold text-[#00ACBF]">90K+</p>
              <p>Collections</p>
            </div>
            <div className="text-center w-100 pl-8">
              <p className="text-4xl text-center font-bold text-[#EB5757]">100K+</p>
              <p>Users</p>
            </div>
          </div>
        </div>

        <div className="w-[50%] ml-7 flex flex-col ">
          <div className="">
            <Image src={shoe} layout="responsive" alt=""></Image>
          </div>
          <div className="text-center mb-[-10px]">
            <Rating rating={4.9} />
            200K+ Total review
          </div>
        </div>
      </div>
    </section>
  )
}


