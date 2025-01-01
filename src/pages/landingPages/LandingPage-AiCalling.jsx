import React, { useState } from "react";

import Contact from "../../componets/landingPages/Contact";
import {
  Ai_Callingservices,
  aicallingcontact,
  aicallinglandingabout,
  aicallingtestimonials,
  aicallingwhychoose,
  aicallingwhychoose2,
  businesstrust,
  companyDetails,
  faqPng,
  westandfor,
  whyChooseUsIcon2,
  whyChooseUsIcon4,
  whyChooseUsIcon5,
  whyChooseUsIcon6,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import aicallingbanner from "../../assets/images/aicalling.jpg";

import { useKeenSlider } from "keen-slider/react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
export const LandingPageAiCalling = ({ page }) => {
  const [spinner, setSpinner] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.mobileNumber + "\n\n";
    // emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from SOFTINTURN",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 20,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 1,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const handleNextClick = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  const handlePrevClick = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };
  return (
    <>
      <div id="banner" className="h-screen relative">
        {/* <ReactPlayer
          url={landingpagevideo}
          loop
          muted
          width="100vw"
          height="100%"
          playsinline
          playing
          className="react-player left-0 top-0 absolute object-cover h-full w-full"
        /> */}
        <img
          src={aicallingbanner}
          className="w-full h-full object-cover object-center absolute"
          alt=""
        />
        <div className="bg-black/50 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              AI Calling
            </div>

            <h1 className="heading-1 text-white leading-tight">
              Revolutionizing Communication with
              <span className="text-primary"> AI-Powered Calling </span>
              for a Smarter Future
            </h1>

            <p className="text-white desc font-medium">
              Experience seamless connectivity with our innovative AI-driven
              calling solutions, designed to enhance communication efficiency
              and redefine how businesses connect.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Get Started
            </ScrollLink>
          </div>
        </div>
      </div>
      {/* Contact */}
      <Contact />
      {/** ABOUT */}
      <section
        id="about"
        className="py-[3rem] bg-backgroundcolor text-primarytextcolor wrapper"
      >
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          AI Calling
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                Welcome to SOFTINTURN – Redefining the Art of Communication
              </h2>
              <p className="desc">
                At SOFTINTURN, we understand that every great business thrives
                on meaningful connections. That’s why we’ve built cutting-edge
                AI calling solutions designed to help you engage, connect, and
                grow—all while saving you time and effort.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aicallinglandingabout}
              className="object-contain max-h-[30rem] w-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/** AI CALLING SERVICES */}
      <div id="services" className="flex justify-center relative py-[3rem]">
        <div className="wrapper  flex flex-col items-center gap-5 z-10 text-primarytextcolor">
          <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
            Our AI Calling Services
          </div>
          <p data-aos="fade-up" className="text-center max-w-4xl desc">
            At SOFTINTURN, we provide advanced AI calling solutions that
            simplify communication, improve efficiency, and help your business
            connect meaningfully with customers. Our services are tailored to
            meet your specific needs, ensuring you achieve your goals with ease
            and precision.
          </p>

          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-[2rem] mx-auto max-w-6xl"
          >
            {Ai_Callingservices.map((item) => (
              <div
                key={item.id}
                className="shadow-2xl transition-all  bg-primary/15 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg"
              >
                <div className="   group rounded-lg bg-backgro-gradient  hover:scale-105 shadow-2xl hover:shadow-primary/10 p-[1px] transition-all h-full duration-500 overflow-hidden">
                  <div className="rounded-lg bg-white hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          {/* <BiBrain className="w-6 h-6" /> */}
                          {item.icon}
                        </div>
                      </div>
                      <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                        {item.title}
                      </h5>
                      <p className="desc text-primarytextcolor">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/** WHY CHOOSE US */}
      <div className="wrapper text-center text-primarytextcolor flex flex-col gap-7">
        <div
          data-aos-offset={-200}
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto"
        >
          What Makes Us Different?
        </div>
        <div className="flex flex-col gap-5">
          <h2 data-aos-offset={-200} data-aos="fade-up" className="heading-2 ">
            Why Partner With Us?
          </h2>
          <p
            data-aos-offset={-200}
            data-aos="fade-up"
            className="desc max-w-[50rem] mx-auto"
          >
            Softinturn Solutions transforms communication with AI-powered
            calling. We streamline operations, deliver personalized
            interactions, and provide real-time analytics to refine strategies.
            With a focus on transparency and excellence, we meet your evolving
            communication needs effectively.
          </p>
          <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[60rem] mr-auto">
            <div className="flex flex-col gap-5">
              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">
                    Effortless Efficiency
                  </h5>
                  <img
                    src={whyChooseUsIcon2}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Our AI-powered calling technology handles the heavy lifting,
                  ensuring your business stays ahead without missing a beat.
                </p>
              </div>
              <div
                data-aos-offset={-200}
                data-aos="fade-right"
                className="p-5 border border-primary rounded-xl w-full h-fit"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold">Actionable Insights</h5>
                  <img
                    src={whyChooseUsIcon5}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Every call counts, and we’ll show you how. Track performance,
                  uncover trends, and refine your strategy with real-time
                  analytics.
                </p>
              </div>
            </div>
            <div
              data-aos-offset={-200}
              data-aos="fade-up"
              className="w-fit mx-auto md:mx-0"
            >
              <img
                src={aicallingwhychoose}
                alt="whyus1"
                className=" max-h-[392px] h-full object-cover  rounded-xl"
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
                src={aicallingwhychoose2}
                alt="whyus1"
                // max-h-[416px] w-full min-h-[300px]
                className=" sm:max-h-full  max-h-[416px] min-h-[343px] rounded-xl object-cover"
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
                    Tailored Communication
                  </h5>
                  <img
                    src={whyChooseUsIcon6}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  We don’t believe in one-size-fits-all. Every interaction is
                  personalized to resonate with your audience and leave a
                  lasting impression.
                </p>
              </div>
              <div
                data-aos-offset={-200}
                data-aos="fade-left"
                className="p-5 border border-primary rounded-xl w-full h-full"
              >
                <div className="flex w-full text-start items-center justify-between gap-3">
                  <h5 className="text-xl font-semibold"> Flexible Solutions</h5>
                  <img
                    src={whyChooseUsIcon4}
                    className="h-[3rem] object-contain mb-3"
                    alt=""
                  />
                </div>
                <p className="desc text-primarytextcolor text-start mt-3">
                  Whether it’s generating leads, nurturing prospects, or
                  supporting customers, we offer solutions that adapt to your
                  unique goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** UNLOCK EFFICIENCY */}
      <section className="py-[3rem] text-primarytextcolor bg-backgroundcolor">
        <div
          data-aos-offset={-400}
          data-aos="fade-up"
          className="wrapper flex flex-col text-primarytextcolor items-center gap-5 text-center"
        >
          <div className="gradient-rounded-text-box">Unlock Efficiency</div>
          <h2 className="heading-2">Let’s Build Something Extraordinary</h2>
          <p className="desc max-w-[40rem] text-center">
            When it comes to growing your business, communication is key—and
            we’re here to make it simple. Whether you’re scaling up or
            fine-tuning your processes, our AI calling solutions are built to
            help you succeed.
          </p>
          <ScrollLink to="contact" smooth offset={-90} className="primary-btn">
            Contact Us
          </ScrollLink>
        </div>
      </section>
      {/** WHY TRUST US */}
      <div className="max-w-3xl mx-auto text-center text-primarytextcolor ">
        <h1 data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Why Businesses Trust Us
        </h1>
        <div>
          {businesstrust.map((obj) => (
            <div
              key={obj.heading}
              className="shadow-2xl transition-all my-8  bg-primary/15 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg"
            >
              <div className="   group rounded-lg bg-backgro-gradient  hover:scale-105 shadow-2xl hover:shadow-primary/10 p-[1px] transition-all h-full duration-500 overflow-hidden">
                <div className="rounded-lg bg-white hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {/* <BiBrain className="w-6 h-6" /> */}
                        {obj.icon}
                      </div>
                    </div>
                    <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                      {obj.heading}
                    </h5>
                    <p className="desc text-primarytextcolor">
                      {obj.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/**TESTIMONIALS */}
      <div className="py-[3rem]">
        <div className="wrapper flex flex-col items-center gap-7">
          <div
            className="gradient-rounded-text-box"
            data-aos="fade-up"
            data-aos-offset={-400}
          >
            Testimonials
          </div>
          <h2
            className="heading-2 text-primarytextcolor mb-2 text-center"
            data-aos-offset={-400}
            data-aos="fade-up"
          >
            Our Clients' Experiences
          </h2>
          <div
            ref={sliderRef}
            className="keen-slider"
            data-aos="fade-up"
            data-aos-offset={-400}
          >
            {aicallingtestimonials.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide min-h-[18rem] justify-between text-white p-7 bg-primarytextcolor rounded-xl flex flex-col gap-4"
              >
                <p className="italic desc">{item.desc}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {/* <div className="h-[3rem] min-w-[3rem] bg-gray-300 rounded-full object-cover" /> */}

                    <img
                      src={item.profileImg}
                      alt={item.name}
                      className=" w-[3rem] h-[3rem] rounded-full object-cover"
                    />
                    <div className="flex flex-col h-full">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            // data-aos="fade-up"
            className="flex justify-center items-center gap-10 mt-2"
          >
            <button
              className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
              onClick={handlePrevClick}
              aria-label="Previous slide"
            >
              <IoArrowBackCircleOutline />
            </button>
            <button
              className="text-primary text-5xl hover:text-primary/70 transition-all duration-200"
              onClick={handleNextClick}
              aria-label="Next slide"
            >
              <IoArrowForwardCircleOutline />
            </button>
          </div>
        </div>
      </div>
      {/** WE STAND FOR */}
      <div className=" py-[2rem] sm:py-[5rem] bg-backgroundcolor">
        <div className="wrapper grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
          <div className="lg:flex hidden items-end justify-end">
            <div className="h-full max-h-[32rem]">
              <img
                src={faqPng}
                className="h-full max-h-[32rem] object-contain hover:scale-105 transition-all duration-500"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-7 text-primarytextcolor">
            {/* <div className="gradient-rounded-text-box">FAQs</div> */}
            <h2 className="heading-2">What We Stand For</h2>
            <div className="flex flex-col gap-3 mt-3 w-full">
              {westandfor.map((faq, i) => (
                <FaqItem
                  key={faq.id}
                  {...faq}
                  i={i}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/** CONTACT US */}
      <div
        data-aos="fade-up"
        id="contacts"
        className=" py-[2rem] sm:py-[5rem] text-primarytextcolor bg-primary/20"
      >
        <div className="wrapper">
          <div className="h-full grid md:grid-cols-2 gap-10 py-5">
            <div className="flex flex-col gap-4">
              <h2 className="heading-2">Get In Touch With Us!</h2>
              <p className="desc">
                Get in touch with{" "}
                <span className="font-semibold">SOFTINTURN </span>
                and let us be the catalyst for your digital transformation.
                Together, we can create solutions that align with your vision,
                helping your business reach new heights.
              </p>
              <img
                src={aicallingcontact}
                alt=""
                className="max-h-[21rem] object-cover rounded-xl"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:px-[1rem] text-black"
            >
              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full  placeholder-slate-800  outline-none border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="mt-1 w-full  outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Mobile Number"
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.mobileNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full  outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="hover:scale-105 transition-all duration-500">
                <label htmlFor="" className="mb-6 font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full  outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                  placeholder="Enter Message"
                  {...register("message", { required: "Message is required" })}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(104,77,244,0.5816701680672269) 0%, rgba(98,98,98,0.5956757703081232) 100%)",
                    borderImageSlice: 1,
                  }}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button className="primary-btn" type="submit">
                {spinner ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const FaqItem = ({ heading, description, i, isOpen, setIsOpen }) => {
  console.log(i, isOpen, "thisis");
  return (
    <div className="flex flex-col w-full text-white hover:scale-105   transition-all duration-500">
      <div
        className={`${
          isOpen === i && "bg-gradient-to-r from-secondary/10 to-primary/80"
        } p-[1px] rounded-md bg-gradient-to-r from-secondary/10 to-primary/80`}
      >
        <div
          onClick={() => setIsOpen((prev) => (prev === i ? "" : i))}
          className="cursor-pointer rounded-md p-3 bg-backgroundcolor text-primarytextcolor flex justify-between gap-4"
        >
          <p className="font-inter">{heading}</p>
          {isOpen === i ? <BiCaretDown /> : <BiCaretRight />}
        </div>
      </div>
      {isOpen === i ? (
        <p className="px-5 py-3 desc text-[.9rem] text-primarytextcolor">
          {description}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
