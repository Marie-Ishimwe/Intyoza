import Image from "next/image";
import Collage from "@/assets/Collage.png";
import { FaUserGraduate, FaUserMd, FaBook } from "react-icons/fa";

const services = [
  {
    title: "Training and Capacity Building",
    description:
      "Training and capacity building for educators, parents, and health professionals on using the Intyoza app and other ASRH resources.",
    icon: FaUserGraduate,
  },
  {
    title: "Counseling Services",
    description:
      "Counseling services related to sexual and reproductive health, including HIV/AIDS testing and counseling for adolescents and their families.",
    icon: FaUserMd,
  },
  {
    title: "Educational Resources",
    description:
      "Providing access to ASRH educational materials and resources.",
    icon: FaBook,
  },
];

export const TrainingCenter = () => {
  return (
    <section id="training-center" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="rounded-md p-3 flex items-center justify-center gap-3">
          <span className="bg-green-800 w-3 h-3 rounded-full"></span>
          <p className="text-sm font-bold text-green-800">
            INTYOZA TRAINING CENTER
          </p>
        </div>
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Intyoza Training Center
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base mx-auto max-w-2xl">
            A dedicated facility for training, capacity building, counseling,
            and resourcing Adolescent Sexual and Reproductive Health (ASRH)
            materials.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image src={Collage} alt="App Mockup" width={450} height={400} />
          </div>

          {/* Services Section */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="flex-col items-start space-x-4  p-2">
                <div className="flex items-center justify-center ml-2 bg-green-700 text-white rounded-md w-14 h-14">
                  <service.icon />
                </div>
                <div className="mt-2">
                  {/* <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    {service.title}
                  </h3> */}
                  <p className="text-gray-600 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
