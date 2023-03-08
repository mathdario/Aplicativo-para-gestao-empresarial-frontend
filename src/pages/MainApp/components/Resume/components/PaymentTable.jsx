import { useEffect, useState } from "react";
import PaymentLine from "./PaymentLine";

export default function PaymenTable({ data, title }) {
  const [tableData, setTableData] = useState({
    total: 0,
    color: "",
  });

  useEffect(() => {
    setTableData({
      total: data.length,
      color: setColor(),
    });

    function setColor() {
      if (title === "Cobranças Pagas") {
        return "text-payed-600";
      }
      if (title === "Cobranças Previstas") {
        return "text-future-600";
      }
      if (title === "Cobranças Vencidas") {
        return "text-expired-600";
      }
    }
  }, []);

  return (
    <div className="bg-white text-hardGray w-[400px] min-w-fit rounded-2xl max-sm:w-full max-md:px-0 pt-1 my-2 pb-5 flex flex-col items-center shadow-md ">
      <div className="w-full flex justify-between px-10 mb-2 pb-3 border-b pt-2 max-md:gap-0 max-md:justify-around">
        <h4 className="font-nuni text-hardGray text-lg font-bold ">{title}</h4>
        <div
          className={`w-10 flex justify-center rounded-full
           ${tableData.color.replace("text", "bg").slice(0, -4)}`}
        >
          <span className={`font-nuni text-lg font-bold ${tableData.color}`}>
            {tableData.total}
          </span>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-base text-center h-10 border-b">
            <th>Cliente</th>
            <th>ID da cob</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <PaymentLine data={data} />
        </tbody>
      </table>
      <a href="#" className="mt-4 font-nuni font-bold">
        Ver todos
      </a>
    </div>
  );
}
