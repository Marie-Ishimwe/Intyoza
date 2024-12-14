import Image from "next/image";
import Mockup from "@/assets/Mockup.png";
import DownloadIntyozaApp from "./DownloadIntyozaApp";

const steps = [
  {
    id: 1,
    title: "Explore Trusted Resources",
    description:
      "Browse through a curated library of health education materials, tips, and guides tailored to your needs.",
  },
  {
    id: 2,
    title: "Connect with Experts",
    description:
      "Intyoza links you with qualified experts for guidance on health, relationships, and personal growth.",
  },
  {
    id: 3,
    title: "Engage in Activities",
    description:
      "Participate in interactive quizzes, challenges, and exercises designed to promote learning and development.",
  },
  {
    id: 4,
    title: "Track Your Progress",
    description:
      "Monitor your achievements and get insights into your personal growth journey.",
  },
];

export const AppOverview = () => {
  return (
    <section id="app-overview" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 mb-5">
        <div className="rounded-md p-3 flex items-center justify-center gap-3">
          <span className="bg-green-800 w-3 h-3 rounded-full"></span>
          <p className="text-sm font-bold text-green-800">INTYOZA APP</p>
        </div>
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How Does Intyoza Work?
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base mx-auto max-w-2xl">
            Download Intyoza from your app store and explore modules that
            combine sexual education and personal development. It’s simple,
            engaging, and impactful.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Steps */}
          <div className="space-y-8">
            {steps.slice(0, 2).map((step) => (
              <div key={step.id} className="flex-col place-items-end">
                <div className="flex items-center justify-center mb-2 bg-green-500 text-white rounded-md h-12 w-12 font-bold text-lg">
                  {step.id}
                </div>
                <h3 className="font-semibold text-lg text-gray-800 text-right">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base text-right">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image src={Mockup} alt="App Mockup" width={550} height={550} />
          </div>

          {/* Right Steps */}
          <div className="space-y-8">
            {steps.slice(2, 4).map((step) => (
              <div key={step.id} className="flex-col items-start">
                <div className="flex items-center justify-center mb-2 bg-green-700/90 text-white rounded-md h-12 w-12 font-bold text-lg">
                  {step.id}
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DownloadIntyozaApp />
    </section>
  );
};
