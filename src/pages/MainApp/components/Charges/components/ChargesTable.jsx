import { TbArrowsDownUp } from "react-icons/tb";
import ChargesLine from "./ChargesLine";

export default function ChargesTable({
  edit,
  showModal,
  detail,
  detailedCharge,
  showDelete,
  deleteId,
}) {
  return (
    <div className="mt-12 mr-12 max-md:mr-0 bg-white rounded-4xl pt-6 shadow-sm">
      <div className="flex font-nuni font-bold text-base max-md:hidden pb-4 border-b">
        <div className="flex gap-2 w-[21%] pl-6">
          <TbArrowsDownUp className="text-xl" />
          <h4>Cliente</h4>
        </div>
        <div className="flex gap-2 w-[11%]">
          <TbArrowsDownUp className="text-xl" />
          <h4>ID Cob.</h4>
        </div>
        <div className="w-[11%]">
          <h4 className="text-left">Valor</h4>
        </div>
        <div className="w-[11%]">
          <h4>Data de venc.</h4>
        </div>
        <div className="w-[11%]">
          <h4 className="text-center">Status</h4>
        </div>
        <div className="w-[30%]">
          <h4 className="text-left"> Descrição</h4>
        </div>
        <div className="w-[5%]"></div>
      </div>
      <div className="max-md:flex max-md:flex-wrap max-md:justify-center gap-4">
        <ChargesLine
          edit={edit}
          showModal={showModal}
          detail={detail}
          detailedCharge={detailedCharge}
          showDelete={showDelete}
          deleteId={deleteId}
        />
      </div>
    </div>
  );
}
