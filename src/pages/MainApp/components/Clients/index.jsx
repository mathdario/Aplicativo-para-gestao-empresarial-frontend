import filters from "./assets/filters.svg";
import { SlPeople } from "react-icons/sl";
import PinkButton from "../../../../components/PinkButton";
import Input from "../../../../components/Input";
import ClientsTable from "./components/ClientsTable";
import { useEffect, useState } from "react";
import useSingUpContext from "../../../../hooks/useSingUpContext";
import ModalClients from "../../../../components/ModalClients";
import ModalCharges from "./../../../../components/ModalCharges/index";

export default function Clients() {
  const { getClients, clients } = useSingUpContext();
  const [showModal, setShowModal] = useState(false);
  const [showModalCharge, setShowModalCharge] = useState(false);
  const [clientCharge, setClientCharge] = useState({
    id: "",
    name: "",
  });

  useEffect(() => {
    getClients();
  }, []);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  function handleShowModalCharge() {
    setShowModalCharge(!showModalCharge);
  }

  return (
    <div className="ml-24 max-lg:mx-12 max-md:mx-0 max-md:mt-24 h-full max-md:pb-36">
      <div className="mr-14 flex items-center justify-between max-lg:flex-col max-lg:gap-4 max-lg:items-start max-md:items-center max-md:mr-0">
        <div className="flex items-center gap-3 text-gray-700">
          <SlPeople className="text-3xl" />
          <h2 className="text-2xl font-mont font-semibold w-">Clientes</h2>
        </div>
        <div className="flex items-center gap-6 max-md:flex-col">
          <div className="flex gap-4 max-md:justify-between max-md:w-80 max-md:gap-0">
            <PinkButton
              label="+ Adicionar cliente"
              large
              noMargins
              onClick={handleShowModal}
            />
            <img className="cursor-pointer" src={filters} alt="Filtros" />
          </div>
          <div className="w-[320px] max-md:w-80 z-10">
            <Input placeholder="Pesquisa" type="search" noMargins shadow />
          </div>
        </div>
      </div>
      {clients && (
        <ClientsTable
          db={clients}
          showCharge={handleShowModalCharge}
          setClient={setClientCharge}
        />
      )}
      <>{showModal && <ModalClients modal={setShowModal} />}</>
      <>
        {showModalCharge && (
          <ModalCharges modal={setShowModalCharge} client={clientCharge} />
        )}
      </>
    </div>
  );
}
