import React, { useState } from "react";
import image from "../../assets/images/contactimage.jpg";
import { companyDetails } from "../../constant";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const GetInTouch = () => {
  const [spinner, setSpinner] = useState(false);

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

    var emailBody = "Name: " + data.name + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.phone + "\n\n";
    emailBody += "Subject: " + data.subject + "\n\n";
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
  return (
    <div id="contact" className="pb-[5rem] relative">
      {/* <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div> */}
      {/* <div className="blue-bg-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div> */}
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div className="flex flex-col gap-5">
          <h1 className="heading text-center text-lg font-medium lg:text-start">
            Ready to Lead with Innovation? <br /> Let’s Start Your Project
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
          <img
            src={image}
            alt=""
            className="max-h-[25rem] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="gradient-text uppercase">Let's connect</p>
          <div className="bg-gradient-to-b text-white from-primary to-primary rounded-2xl w-fit p-7">
            <h2 className="text-3xl font-medium">
              Connect With Our Team to Get Started!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-3 mt-3"
            >
              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name">Name*</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="email">Email*</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    type="email"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="subject">Subject*</label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    type="text"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter subject"
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    {...register("phone", {
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    type="tel"
                    className="w-full outline-none p-3 rounded-lg text-black"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="message">Message*</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full outline-none p-3 rounded-lg text-black"
                  placeholder="Enter your message here"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="mt-4 bg-white text-black px-5 py-3 rounded-full hover:text-primary hover:-translate-y-1 duration-300 transition-all"
              >
                {spinner ? "Sending..." : "  Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
