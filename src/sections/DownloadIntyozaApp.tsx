import Image from "next/image";
// import { useRouter } from 'next/router';
import Smile from "@/assets/Smile.png";

const DownloadIntyozaApp = () => {
  // const router = useRouter();

  // const handleGetStarted = () => {
  //   router.push('/download');
  // };

  return (
    <section className="">
      <div className="container bg-green-700 rounded-2xl py-10 text-center justify-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Download Intyoza App
        </h2>
        <p className="text-white mt-4 text-base md:text-lg mx-auto max-w-2xl">
          Whether you need to access comprehensive SRH information or looking to
          facilitate engaging discussions on these topics, Intyoza provides the
          best-in-class solution.
        </p>
        <button className="bg-white text-green-500 font-medium rounded-md px-6 py-3 mt-6 hover:bg-gray-200">
          Downlaod now
        </button>
      </div>
    </section>
  );
};

export default DownloadIntyozaApp;
