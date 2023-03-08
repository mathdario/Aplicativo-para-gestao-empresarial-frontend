import { FiUserCheck, FiUserX } from "react-icons/fi";
import ClientesResumeLine from "./ClientesResumeLine";
import { useEffect, useState } from "react";

export default function ClientsResumeTable({ data, title }) {
  const [clients, setClients] = useState({
    total: 0,
    color: "",
  });

  useEffect(() => {
    setClients({
      total: data.length,
      color:
        title === "Clientes Inadimplentes"
          ? "text-expired-600"
          : "text-payed-600",
      bg:
        title === "Clientes Inadimplentes"
          ? "bg-expired px-4 text-xl rounded-full"
          : "bg-payed px-4 text-xl rounded-full",
    });
  }, []);

  return (
    <div className="w-[600px] max-md:w-full min-w-fit pt-5 pb-6 mb-5 rounded-2xl bg-white shadow-md">
      <div className="flex justify-between items-center px-8 ">
        <div className="flex items-center ">
          {title === "Clientes Inadimplentes" ? (
            <FiUserX className={` text-xl mr-3 ${clients.color}`} />
          ) : (
            <FiUserCheck className={` text-xl mr-3 ${clients.color}`} />
          )}

          <h1 className="font-mont text-lg font-semibold">{title}</h1>
        </div>
        <span className={`${clients.color} ${clients.bg} font-bold text-base`}>
          {clients.total}
        </span>
      </div>
      <table className="w-full mt-2 border-collapse">
        <thead>
          <tr className="text-base text-left h-8 border-b">
            <th className=" pl-6">Clientes</th>
            <th>ID do Cli.</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>{data && <ClientesResumeLine data={data.clients} />}</tbody>
      </table>
      <div className="w-full flex justify-center mt-3">
        <a href="#" className="text-center font-bold font-nuni">
          Ver todos
        </a>
      </div>
    </div>
  );
}
