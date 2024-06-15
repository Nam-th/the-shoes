import Image from "next/image";
import shoe from "../../public/image/about-img.png"
import Button from "antd/es/button";
// import Rating from "./rate";

export default function AboutUs() {
  return (
    <section className="bg-black py-12">
      <div className="mx-auto w-[1200px] flex flex-row-reverse text-white">
        <div className="w-[50%] py-12 ml-12">
          <div>
            <h2 className="text-4xl font-bold text-primary-color text-center">About Us</h2>
          </div>
          <p className="my-10">
            Feel the difference of next-level comfort as you go head-to-head against some of the toughet runners around.
          </p>
          <Button
            type="primary"
            size="large"
          >
            Contact me
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

        <div className="w-[50%] flex flex-col ">
          <div className="">
            <Image src={shoe} layout="responsive" alt=""></Image>
          </div>
          <div className="text-center mb-[-10px]">
            {/* <Rating rating={4.9} /> */}
            200K+ Total review
          </div>
        </div>
      </div>
    </section>
  )
}


