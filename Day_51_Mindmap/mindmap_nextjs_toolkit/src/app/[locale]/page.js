import { useTranslations } from "next-intl";
import HomeInformation from "./_components/HomeInformation";
import HomeProject from "./_components/HomeProject";
import HomeHobby from "./_components/HomeHobby";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div className="max-w-[1250px] mx-auto mt-[100px] px-[25px] py-[16px] shadow-xl rounded-[10px]">
      <div className="flex gap-x-[30px]">
        <HomeInformation />
        <div className="w-full">
          <HomeProject />
          <HomeHobby />
        </div>
      </div>
      <Footer />
    </div>
  );
}
