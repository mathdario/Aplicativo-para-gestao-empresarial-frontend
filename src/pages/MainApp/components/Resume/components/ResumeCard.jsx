import filePayed from "./assets/filePayed.svg";
import fileFuture from "./assets/fileFuture.svg";
import fileExpired from "./assets/fileExpired.svg";

import { useEffect, useState } from "react";
import { convertCentstoReais } from "../../../../../utils/moneyFormater";

export default function ResumeCard({ type, value, ...props }) {
  const [infoCard, setInfoCard] = useState({
    icon: "",
    title: "",
    background: "",
  });

  useEffect(() => {
    if (type === "paidCharges") {
      setInfoCard({
        icon: filePayed,
        title: "Cobranças Pagas",
        background: "bg-payed",
      });
    }
    if (type === "pendingCharges") {
      setInfoCard({
        icon: fileFuture,
        title: "Cobranças Previstas",
        background: "bg-future",
      });
    }
    if (type === "overdueCharges") {
      setInfoCard({
        icon: fileExpired,
        title: "Cobranças Vencidas",
        background: "bg-expired",
      });
    }
  }, []);

  return (
    <div
      className="w-[400px] max-xl:mb-5 max-md:w-full text-hardGray"
      {...props}
    >
      <div
        className={`flex flex-row ${infoCard.background} py-6 justify-center rounded-3xl`}
      >
        <div className="flex gap-8">
          <img src={infoCard.icon} alt={infoCard.title} />
          <div className="flex flex-col w-full items-center">
            <p className="font-mont font-bold text-center text-lg max-md:text-base ">
              {infoCard.title}
            </p>
            <h3 className="font-mont font-bold text-lg">
              {convertCentstoReais(value)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
