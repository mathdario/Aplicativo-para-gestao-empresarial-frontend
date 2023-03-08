import { TbArrowsDownUp } from "react-icons/tb";
import ClientsLine from "./ClientsLine";

export default function ClientsTable({ db, showCharge, setClient }) {
  return (
    <div className="mt-12 mr-12 max-md:mr-0 pt-6 bg-white max-md:bg-transparent rounded-4xl z-0 drop-shadow-sm">
      <div className="flex font-nuni font-bold text-base max-md:hidden border-b pb-5">
        <div className="flex items-center gap-2 w-[25%] pl-6">
          <TbArrowsDownUp className="text-xl" />
          <h4>Cliente</h4>
        </div>
        <div className="w-[15%]">
          <h4>CPF</h4>
        </div>
        <div className="w-[25%]">
          <h4 className="text-left">E-mail</h4>
        </div>
        <div className="w-[10%]">
          <h4>Telefone</h4>
        </div>
        <div className="w-[12.5%]">
          <h4 className="text-center">Status</h4>
        </div>
        <div className="w-[12.5%]">
          <h4 className="text-center">Criar Cobrança</h4>
        </div>
      </div>
      <div className="max-md:flex max-md:flex-wrap max-md:justify-center gap-4">
        <ClientsLine db={db} showCharge={showCharge} setClient={setClient} />
      </div>
    </div>
  );
}
