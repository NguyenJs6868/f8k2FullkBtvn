import { useTranslations } from "next-intl";
export default function HomeInformation() {
  const t = useTranslations("HomeInformation");
  return (
    <div className="max-w-[320px]">
      <div className="w-[320px] h-[320px] flex justify-center items-center  rounded-[10px] overflow-hidden">
        <img
          src="/img/avatar.png"
          alt=""
          className="w-[300px] h-[300px] rounded-[10px] hover:scale-125 transition-all shadow-xl"
        />
      </div>
      <p className="text-center mb-[40px]">Web developer</p>
      <div className="mb-[40px]">
        <h3 className="text-2xl font-bold mb-[10px]">{t("skillSubHead1")}</h3>
        <div className="pl-[10px]">
          <p>
            <b>{t("skillSubHead1")}: </b>
            {t("skillTitle1")}
          </p>
        </div>
        <hr className="pb-[10px]" />
        <div className="pl-[10px]">
          <p>
            <b>{t("skillSubHead2")}: </b>
            {t("skillTitle2")}
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold  mb-[10px]">{t("historyHeading")}</h3>
        <div className="pl-[10px]">
          <p>
            <b>{t("historySubHead1")}: </b>
            {t("historyTitle1")}
          </p>
        </div>
        <hr className="pb-[10px]" />
        <div className="pl-[10px]">
          <p>
            <b>{t("historySubHead2")}: </b>
            {t("historyTitle2")}
          </p>
        </div>
      </div>
    </div>
  );
}
