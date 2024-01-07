"use client";
import Cookies from "js-cookie";
import { signIn } from "next-auth/react";
import "./auth.scss"

export default function AuthLoginForm({ translation, locale }) {

  const handleSignInGithub = async () => {
    Cookies.set("loginWith", "github", { expires: 365 });
    await signIn("github", {
      redirect: true,
      callbackUrl: `https://nextauth50.vercel.app/${locale}/profile`,
    });
  };

  const handleSignInGoogle = async () => {
    Cookies.set("loginWith", "google", { expires: 365 });
    await signIn("google", {
      redirect: true,
      callbackUrl: `https://nextauth50.vercel.app/${locale}/profile`,
    });
  };

  return (
    <div className="auth-el fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center border p-[20px] rounded-[14px] shadow-xl w-[560px]">
      <h2 className="text-3xl font-bold my-[26px] text-sky2-500">
        {translation.heading}
      </h2>
      <div className="w-[70%] font-semibold flex flex-col gap-y-[20px] mb-[40px] ">
        <button
          className="w-full p-[14px] bg-sky2-500 rounded-[10px] flex items-center justify-center"
          onClick={handleSignInGoogle}
        >
          <i className="fa-brands fa-google mr-[10px] text-xl"></i>
          {translation.authGoogle}
        </button>
        <button
          className="w-full p-[14px] border-2 border-sky2-500 rounded-[10px] flex items-center justify-center"
          onClick={handleSignInGithub}
        >
          <i className="fa-brands fa-github mr-[10px] text-xl"></i>
          {translation.authGithub}
        </button>
      </div>
      <p>{translation.title}</p>
    </div>
  );
}
