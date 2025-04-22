import { useRef, useState, type FormEventHandler } from "react";
import { redirect, useNavigate } from "react-router";
import Curve3 from "~/assets/images/Curve3";
import FormInput from "~/components/FormInput";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const EMAIL_LOGIN = "admin@alliz.com";
const PASSWORD_LOGIN = "Password123";

const LoginPage = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center overflow-hidden">
      <div className="flex shadow-xl w-full h-full md:h-fit md:rounded-2xl bg-linear-to-r from-[#FF3A8B]/25 to-[#FFBA4A]/25 md:w-fit relative overflow-hidden justify-center items-center">
        <div className="flex md:p-20 md:gap-20 z-10 flex-col md:flex-row items-center gap-10 p-10">
          <div className="flex justify-center items-center w-48">
            <img
              src="/images/brand-logo.svg"
              className="min-w-full drop-shadow-sm"
            />
          </div>
          <div className="prose flex items-center flex-col">
            <h2 className="self-center">Welcome!</h2>
            <form className="flex flex-col gap-7 items-center">
              <FormInput
                name="email"
                label="Email"
                type="text"
                error={}
                placeholder="User email"
                ref={}
              />
              <FormInput
                name="password"
                label="Password"
                type="password"
                error={}
                placeholder="Your password"
                ref={}
              />
              <button
                type="submit"
                className="rounded-3xl mt-5 cursor-pointer w-fit bg-linear-to-r from-[#FF3A8B] to-[#FFBA4A] text-white px-10 opacity-90 hover:opacity-100 transition-all py-0.5 bg-size-[200%] bg-center hover:bg-size-[100%] active:ring shadow-lg"
              >
                Log in
              </button>
              <span className="text-center">
                Don't have an account? <a href="">Register Here!</a>
              </span>
            </form>
          </div>
        </div>
        <Curve3 className="absolute right-0 bottom-0 opacity-45 translate-x-[35%]" />
      </div>
    </div>
  );
};

export default LoginPage;
