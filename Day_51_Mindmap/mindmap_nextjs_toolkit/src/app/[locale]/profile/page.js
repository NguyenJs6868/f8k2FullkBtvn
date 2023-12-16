import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "@/navigation";
import Profile from "./_components/Profile";
import Footer from "@/components/Footer";
import { getProviders } from "next-auth/react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/auth");
  }
  const locale = await getLocale();
  const t = await getTranslations("Profile");
  const translation = {
    notRegister: t("notRegister"),
    editContent: t("editContent"),
    logout: t("logout"),
    viewedArticles: t("viewedArticles"),
    viewedArticlesTitle: t("viewedArticlesTitle"),
    commentWrote: t("commentWrote"),
    commentTitle: t("commentTitle"),
  };
  const providers = await getProviders();
  console.log(providers);
  //   console.log(session);
  return (
    <div>
      <Profile locale={locale} translation={translation} />
      <Footer />
    </div>
  );
}
