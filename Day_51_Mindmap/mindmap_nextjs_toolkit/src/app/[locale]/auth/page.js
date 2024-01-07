import Footer from "@/components/Footer/Footer";
import AuthLoginForm from "./_components/authLoginForm/AuthLoginForm";
import { getTranslations, getLocale } from "next-intl/server";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "@/navigation";

export default async function auth() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/profile");
  }
  const t = await getTranslations("Auth");
  const locale = await getLocale();
  const translation = {
    heading: t("authHeading"),
    authGoogle: t("authGoogle"),
    authGithub: t("authGithub"),
    title: t("title"),
  };
  return (
    <div className="mt-[120px]">
      {/* <Footer /> */}
      <AuthLoginForm translation={translation} locale={locale} />
    </div>
  );
}
