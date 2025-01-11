import React from "react";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { companyDetails, logoImg, routes } from "../../constant";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const WebsiteFooter = () => {
  return (
    <div className="py-14 bg-[#2e2e45]">
      <div className="wrapper text-white">
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col items-center">
            <img src={logoImg} className="h-[4rem]" alt="" />
            <p className="desc md:max-w-[15rem] text-sm text-center mt-5">
              At Softinturn, we’re dedicated to delivering cutting-edge
              technology solutions that empower businesses to thrive in the
              digital age. With a focus on innovation and excellence, we offer a
              wide range of services to meet the unique needs of our clients.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Quick Links</h6>
              {routes.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-white desc text-sm hover:text-primary transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
              <Link className={`link text-sm `}>Blogs</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Contact Us</h6>
              <div className="flex flex-col">
                <h6 className="text-[.9rem] mb-1">Phone</h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="text-white desc text-sm"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex flex-col">
                <h6 className="text-[.9rem] mb-1">Email</h6>
                <Link
                  // to={`tel:${companyDetails.email}`}
                  className="text-white desc text-sm"
                >
                  {companyDetails.email}
                </Link>
              </div>
              <div className="flex flex-col mt-2">
                <h6 className="text-[.9rem] mb-1">Office Address</h6>
                <p className="text-white desc text-sm max-w-[15rem]">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-7 border-t text-gray-500 border-primary w-full">
          <div className="flex justify-center gap-5 w-full">
            <div className="flex gap-5 items-center mt-5">
              <Link
                to={"https://www.facebook.com/softinturn"}
                className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
              >
                <BsFacebook className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link
                to={"https://x.com/softinturn"}
                className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
              >
                <FaXTwitter className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link
                to={"https://www.linkedin.com/company/softinturn/"}
                className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
              >
                <BsLinkedin className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
              <Link
                to={"https://www.instagram.com/softinturn"}
                className="group w-[2.5rem] h-[2.5rem] rounded-full border-primary border flex justify-center items-center"
              >
                <RiInstagramFill className="text-xl text-white group-hover:text-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteFooter;
