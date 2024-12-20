import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  whyChooseUsIcon5,
  whyChooseUsIcon6,
  whyChooseUsPng,
} from "../../constant";
import whyus1 from "../../assets/images/whyus1.jpg";
import whyus2 from "../../assets/images/whyus2.jpg";
const WhyChooseUs = () => {
  const totalYrs = 3;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 10;
  const totalClients = 50;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section className="py-[3rem] bg-backgroundcolor">
      <div className="wrapper text-center text-primarytextcolor flex flex-col gap-7">
        <div
          data-aos-offset={-200}
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto"
        >
          What Makes Us Different?
        </div>
        <div className="flex flex-col gap-5">
          <h2 data-aos-offset={-200} data-aos="fade-up" className="heading-2">
            Why Us? /<span> Why Softinturn Solutions?</span>
          </h2>
          <p
            data-aos-offset={-200}
            data-aos="fade-up"
            className="desc max-w-[50rem] mx-auto"
          >
            At Softinturn Solutions, we prioritize strong client partnerships by
            understanding your unique needs and working style. Through open
            communication and collaboration, we deliver intelligent solutions
            tailored to your evolving business demands. Our streamlined
            development process begins with an NDA for confidentiality, followed
            by clear planning, documentation, and regular progress updates. We
            embrace agile methodologies to incorporate continuous feedback,
            ensuring timely delivery within budget. With a commitment to
            transparency, adaptability, and excellence, we tackle complex
            projects efficiently, making us a trusted leader in software
            development.
          </p>
          {/* <div
            data-aos-offset={-400}
            data-aos="fade-up"
            className="w-full block lg:hidden"
          >
            <img
              src={whyChooseUsPng}
              className="object-contain max-h-[20rem] mx-auto"
              alt="why choose us"
            />
          </div> */}
          <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[60rem] mr-auto">
            <div className="flex flex-col gap-5">
              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Customized Solutions
                  </h5>
                  <img
                    src={whyChooseUsIcon1}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  We work closely with you to understand your unique needs and
                  deliver tailored solutions that adapt to your evolving
                  business demands.
                </p>
              </div>
              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Expertise And Experience
                  </h5>
                  <img
                    src={whyChooseUsIcon2}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Our team of experts ensures efficient project delivery with a
                  focus on innovation, clear communication, and consistent
                  quality.
                </p>
              </div>
              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Collaborative Approach
                  </h5>
                  <img
                    src={whyChooseUsIcon5}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Through open communication and frequent progress updates, we
                  ensure seamless collaboration and trust throughout the project
                  lifecycle.
                </p>
              </div>
            </div>
            <div
              data-aos-offset={-200}
              data-aos="fade-up"
              className="w-fit mx-auto md:mx-0"
            >
              <img
                src={whyus1}
                alt="whyus1"
                className="h-full object-cover  rounded-xl"
                // h-[392px]
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[60rem] ml-auto">
            <div
              data-aos-offset={-200}
              data-aos="fade-up"
              className=" w-fit md:w-full  flex justify-end sm:mx-auto md:mx-0"
            >
              <img
                src={whyus2}
                alt="whyus1"
                // max-h-[416px] w-full min-h-[300px]
                className=" h-full min-h-[300px] rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 h-full">
              <div
                data-aos-offset={-200}
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Cutting-Edge Technology
                  </h5>
                  <img
                    src={whyChooseUsIcon3}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  We embrace modern technologies and agile methodologies to
                  tackle complex challenges and deliver exceptional results.
                </p>
              </div>
              <div
                data-aos-offset={-200}
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">24/7 Support Team</h5>
                  <img
                    src={whyChooseUsIcon6}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Our dedicated support team is always available to address your
                  concerns, ensuring smooth progress and timely resolutions.
                </p>
              </div>
              <div
                data-aos-offset={-200}
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">Easy Solutions</h5>
                  <img
                    src={whyChooseUsIcon4}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  We follow a streamlined, systematic approach to deliver
                  solutions on time and within budget, making the entire process
                  stress-free for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[3rem]">
          <div
            ref={ref}
            data-aos-offset={-200}
            data-aos="fade-up"
            className="w-full text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl bg-gradient-to-r from-secondary to-primary p-[2rem]"
          >
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{yrs}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Years of Experience</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{experts}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Expert Team</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{clients}</h1>
                <span className="absolute top-1 -right-3 text-lg">+</span>
              </div>
              <p className="font-medium mt-3">Clients</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-3 relative w-fit">
                <h1 className="heading-1">{onTimeCompletion}</h1>
                <span className="absolute top-1 -right-3 text-lg">%</span>
              </div>
              <p className="font-medium mt-3">On Time Completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
