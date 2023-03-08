import { useState, useEffect } from "react";
import { VscFile } from "react-icons/vsc";
import { formatDateNumeric } from "../../utils/datesFormater";
import { convertCentstoReais } from "../../utils/moneyFormater";

export default function DetailChargeModal({ modal, charge }) {
  const colors = {
    Pendente: "text-future-600 bg-future px-3",
    Pago: "text-payed-600 bg-payed px-6",
    Vencido: "text-expired-600 bg-expired px-4",
  };

  useEffect(() => {
    console.log(charge);
  }, []);

  function handleCloseModal() {
    modal(false);
  }

  return (
    <div className="w-full h-full  text-hardGray flex justify-center items-center bg-black bg-opacity-40 absolute font-nuni left-0 bottom-0 backdrop-blur-xs overflow-hidden z-20">
      <div className="bg-white rounded-4xl w-[600px] flex-col relative px-14 py-10">
        <div className="flex gap-6 items-baseline mb-4">
          <VscFile className="w-[20px] h-[20px]" />
          <h1 className="font-mont text-2xl font-bold">Detalhes da Cobrança</h1>
        </div>
        <span
          onClick={handleCloseModal}
          className="font-nuni text-4xl absolute top-4 right-5 cursor-pointer"
        >
          &times;
        </span>
        <p className="mb-2 font-bold">Nome</p>
        <span>{charge.client_name}</span>
        <p className="mt-6 mb-1 font-bold">Descrição</p>
        <span>{charge.description}</span>
        <div className="flex gap-36 my-6">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Vencimento</p>
            <span>{formatDateNumeric(charge.due_date)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Valor</p>
            <span>{convertCentstoReais(charge.value)}</span>
          </div>
        </div>
        <div className="flex gap-36">
          <div className="flex flex-col gap-2">
            <p className="font-bold">ID cobranças</p>
            <span>{String(charge.serial_id).padStart(8, 0)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Status</p>
            <span className={`${colors[charge.status]} rounded-full`}>
              {charge.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
