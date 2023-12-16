import React from "react";
import { useTranslations } from "next-intl";
export default function HomeHobby() {
  const t = useTranslations("HomeHobby");
  return (
    <div className="mt-[20px] p-[20px]">
      <h2 className="text-center font-bold text-2xl mb-[20px]">
        {t("hobbyHeading")}
      </h2>
      <p className="mb-[10px]">{t("hobby1")}</p>
      <p className="mb-[10px]">{t("hobby2")}</p>
    </div>
  );
}
