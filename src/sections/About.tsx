import { FaChalkboardTeacher, FaUsers, FaChartLine } from "react-icons/fa";
import Image from "next/image";
import Finale from "@/assets/Finale.png";
const highlights = [
  {
    title: "Comprehensive Education Approach",
    description:
      "Intyoza Solutions combines a mobile application with a training center, offering interactive modules that cover essential topics such as sexual anatomy, contraception, and healthy relationships.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Targeted Beneficiaries",
    description:
      "The initiative focuses on various stakeholders, including parents, teachers, community health workers, and adolescents, ensuring that SRH education reaches those who need it most.",
    icon: FaUsers,
  },
  {
    title: "Sustainable Profit Generation",
    description:
      "Intyoza Solutions plans to generate revenue through partnerships, training sessions, and the sale of educational materials, thereby ensuring the sustainability and scalability of its impact on adolescent health.",
    icon: FaChartLine,
  },
];

export const About = () => {
  return (
    <section id="about" className="pt-12 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="rounded-full p-3 flex items-center justify-center gap-3">
          <span className="bg-green-800 w-3 h-3 rounded-full"></span>
          <p className="text-sm font-bold text-green-800">ABOUT US</p>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What is Intyoza solutions all about?
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base mx-auto max-w-2xl">
            Intyoza Solutions seeks to empower youth, educators, and communities
            to make informed decisions about sexual health, ultimately reducing
            the rates of teenage pregnancies and sexually transmitted
            infections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section: Image */}
          <div className="flex justify-center">
            <Image src={Finale} alt="Hero Image" width={600} height={650} />
          </div>

          {/* Right Section: Highlights */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key notes
            </h2>
            <div className="space-y-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-green-700 text-white rounded-lg p-4 flex items-center justify-center">
                    <highlight.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
