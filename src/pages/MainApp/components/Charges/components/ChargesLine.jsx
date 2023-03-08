import { formatDateNumeric } from "../../../../../utils/datesFormater";
import useSingUpContext from "./../../../../../hooks/useSingUpContext";
import { convertCentstoReais } from "./../../../../../utils/moneyFormater";

import { FiTrash } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";

export default function ChargesLine({
  edit,
  showModal,
  detail,
  detailedCharge,
  showDelete,
  deleteId,
}) {
  const { charges, detailCharge } = useSingUpContext();

  const colors = {
    Pendente: "text-future-600 bg-future px-3",
    Pago: "text-payed-600 bg-payed px-6",
    Vencido: "text-expired-600 bg-expired px-4",
  };

  async function handleEdit(id) {
    const response = await detailCharge(id);
    setTimeout(() => {
      edit(response);
      showModal();
    }, 200);
  }

  function handleDetail(charge) {
    detailedCharge(charge);
    detail();
  }
  function handleDelete(id) {
    deleteId(id);
    showDelete();
  }

  return (
    <>
      {charges[0] &&
        charges.map((el) => (
          <div
            key={el.id}
            className="py-4 hover:bg-slate-200 hover:last:rounded-b-4xl transition-all delay-200 border-b last:border-b-0 "
          >
            <div className="flex items-center font-nuni text-base max-md:hidden">
              <div
                className="pl-7 flex items-center gap-2 w-[21%] cursor-pointer"
                onClick={() => handleDetail(el)}
              >
                <h4>{el.client_name}</h4>
              </div>
              <div className="flex items-center gap-2 w-[11%]">
                <h4>{String(el.serial_id).padStart(8, 0)}</h4>
              </div>
              <div className=" flex items-center w-[11%]">
                <h4 className="text-left">{convertCentstoReais(el.value)}</h4>
              </div>
              <div className="w-[11%]">
                <h4>{formatDateNumeric(el.due_date)}</h4>
              </div>
              <div className="w-[11%] flex justify-center">
                <h4
                  className={`text-center px-2 rounded-full ${
                    colors[el.status]
                  }`}
                >
                  {el.status}
                </h4>
              </div>
              <div className="w-[30%]">
                <h4 className="text-left">
                  {el.description.length < 30
                    ? el.description
                    : el.description.slice(0, 40) + "..."}
                </h4>
              </div>
              <div className=" flex items-center gap-1 w-[5%]">
                <div
                  className="flex flex-col items-center text-hardGray cursor-pointer hover:animate-pulse"
                  onClick={() => {
                    handleEdit(el.id);
                  }}
                >
                  <TbEdit />
                  <p className="text-xxs">Editar</p>
                </div>
                <div
                  className="flex flex-col items-center text-expired-600 cursor-pointer hover:animate-pulse"
                  onClick={() => handleDelete(el.id)}
                >
                  <FiTrash />
                  <p className="text-xxs">Excluir</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
