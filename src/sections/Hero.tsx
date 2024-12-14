import { Button } from "@/components/ui/button";
import Image from "next/image";
import Smile from "@/assets/Smile.png";
import Other from "@/assets/Other.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="">
      <div className="container mx-auto px-5 md:flex md:items-center md:justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-4">
          <div className="rounded-md p-3 flex items-center justify-start gap-3">
            <span className="bg-green-800 w-3 h-3 rounded-full"></span>
            <p className="text-sm font-bold text-green-800">
              MEET INTYOZA SOLUTIONS
            </p>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter">
            Comprehensive Sexual Reproductive Health Education
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            We strive to bridge the gap in sexual and reproductive health
            education by empowering young people with the knowledge and skills
            to make informed decisions and lead healthier lives.
          </p>
          <div className="flex gap-4">
            <Button>Explore Our App</Button>
            <Button
              variant="outline"
              className="font-medium border border-green-800 text-green-800"
            >
              Visit Our Training Center
            </Button>
          </div>
        </div>

        {/* Hero Image with Badges */}
        <div className="relative mt-10 md:w-1/2">
          <Image
            src={Smile}
            alt="Hero Image"
            className="rounded-full bg-green-700/80 mx-auto"
            // width={550}
            // height={520}
            width={550}
            height={450}
          />
          {/* Badge 1 */}
          <div className="absolute top-6 right-8 sm:-top-4 sm:right-6  bg-white shadow-lg rounded-md p-3 flex items-center space-x-2">
            <span className="bg-green-500 w-3 h-3 rounded-full"></span>
            <p className="text-sm font-medium">Access to Vital Knowledge</p>
          </div>
          {/* Badge 2 */}
          <div className="absolute bottom-8 -left-8 sm:bottom-12 sm:left-10 bg-white shadow-lg rounded-md p-3 flex items-center space-x-2">
            <span className="bg-blue-500 w-3 h-3 rounded-full"></span>
            <p className="text-sm font-medium">Culturally Relevant Solutions</p>
          </div>
          {/* Badge 3 */}
          <div className="absolute top-20 left-10 sm:top-28 sm:-left-4 bg-white shadow-lg rounded-md p-3 flex items-center space-x-2">
            <span className="bg-yellow-500 w-3 h-3 rounded-full"></span>
            <p className="text-sm font-medium">Interactive Learning Tools</p>
          </div>
          {/* Badge 4 */}
          <div className="absolute sm:bottom-28 sm:-right-3 md:bottom-32 md:-right-10 bg-white shadow-lg rounded-md p-3 flex items-center space-x-2">
            <span className="bg-red-500 w-3 h-3 rounded-full"></span>
            <p className="text-sm font-medium">Building Healthier Futures</p>
          </div>
        </div>
      </div>
    </section>
  );
};
