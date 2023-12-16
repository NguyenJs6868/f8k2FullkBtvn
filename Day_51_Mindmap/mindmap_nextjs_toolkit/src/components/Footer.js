import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <div className="mt-[40px]">
      <h2 className="text-center text-sky-800 text-sm">{t("title")}</h2>
    </div>
  );
}
