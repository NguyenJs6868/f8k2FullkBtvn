"use client";
import { useSession } from "next-auth/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { signOut, signIn } from "next-auth/react";
import Cookies from "js-cookie";

export default function Profile({ locale, translation }) {
  const { data: session, status } = useSession();
  let loginWith = useRef("");
  useLayoutEffect(() => {
    loginWith.current = Cookies.get("loginWith");
    console.log(loginWith.current);
  }, []);
  const handleLogout = () => {
    Cookies.remove("loginWith");
    signOut();
  };
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
    <div className="max-w-[1250px] px-[25px] mt-[100px] mx-auto">
      <div className="flex items-center gap-x-[14px]">
        <img
          src={session?.user?.image}
          alt=""
          className="w-[40px] rounded-[50%]"
        />
        <div>
          <p>{session?.user?.name}</p>
          <p className="text-sm text-gray-400">{session?.user?.email}</p>
        </div>
      </div>
      <div className="my-[20px] flex justify-between items-center">
        {loginWith.current === "google" ? (
          <div className="flex">
            <button className="p-[10px] bg-orange-400 rounded-l-[10px] flex items-center gap-x-[10px]">
              <img
                src={session?.user?.image}
                alt=""
                className="w-[30px] rounded-full"
              />
              Bùi Quang Trưởng
            </button>
            <button
              className="p-[10px] bg-sky-500 rounded-r-[10px] flex items-center"
              onClick={handleSignInGithub}
            >
              <i className="fa-brands fa-github mr-[10px] text-xl"></i>
              {translation.notRegister}
            </button>
          </div>
        ) : (
          <div className="flex">
            <button
              className="p-[10px] bg-orange-400 rounded-l-[10px] flex items-center"
              onClick={handleSignInGoogle}
            >
              <i className="fa-brands fa-google mr-[10px] text-xl"></i>
              {translation.notRegister}
            </button>
            <button className="p-[10px] bg-sky-500 rounded-r-[10px] flex items-center gap-x-[10px]">
              <img
                src={session?.user?.image}
                alt=""
                className="w-[30px] rounded-full"
              />
              Bùi Quang Trưởng
            </button>
          </div>
        )}

        <div className="border-orange-400 border-2 rounded-[10px] overflow-hidden">
          <button className="p-[10px]  rounded-l-[10px]">
            {translation.editContent}
          </button>
          <button className="p-[10px] bg-orange-400 " onClick={handleLogout}>
            {translation.logout}
          </button>
        </div>
      </div>
      <hr />
      <div className="mt-[20px] mb-[14px]">
        <h2 className="text-3xl font-bold mb-[14px]">
          {translation.viewedArticles}
        </h2>
        <p className="text-center text-xl">{translation.viewedArticlesTitle}</p>
      </div>
      <hr />
      <div className="mt-[20px] mb-[14px]">
        <h2 className="text-3xl font-bold mb-[14px]">
          {translation.commentWrote}
        </h2>
        <p className="text-center text-xl">{translation.commentTitle}</p>
      </div>
    </div>
  );
}
