import { useEffect, useState } from "react";
import { VscFile } from "react-icons/vsc";

import Input from "../../../../components/Input";
import Spinner from "../../../../components/Spinner";
import ModalCharges from "../../../../components/ModalCharges";
import ChargesTable from "./components/ChargesTable";
import DeleteChargeModal from "../../../../components/DeleteChargeModal";
import DetailChargeModal from "./../../../../components/DetailChargeModal/index";

import filters from "./assets/filters.svg";
import useSingUpContext from "../../../../hooks/useSingUpContext";

export default function Charges() {
  const { getCharges } = useSingUpContext();

  const [loading, setLoading] = useState(false);
  const [showModalCharges, setShowModalCharges] = useState(false);

  const [showChargeDetail, setShowChargeDetail] = useState(false);

  const [detailedCharge, setDetailedCharge] = useState({});

  const [deleteCharge, setDeleteCharge] = useState(false);

  const [deleteChargeId, setDeleteChargeId] = useState("");

  const [editCharge, setEditCharge] = useState({
    id: "",
    client_name: "",
    description: "",
    status: "",
    due_date: "",
  });

  useEffect(() => {
    setLoading(false);

    getCharges();

    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  function handleShowModal() {
    setShowModalCharges(!showModalCharges);
  }

  function handleShowChargeDetail() {
    setShowChargeDetail(!showChargeDetail);
  }

  function handleShowDelete() {
    setDeleteCharge(!deleteCharge);
  }

  return (
    <div className="ml-24 max-lg:mx-12 max-md:mx-0 max-md:mt-24 h-full bg-baseLight">
      <div className="mr-14 flex items-center justify-between max-lg:flex-col max-lg:gap-4 max-lg:items-start max-md:items-center max-md:mr-0">
        <div className="flex items-center gap-3 text-gray-700">
          <VscFile className="text-3xl" />
          <h2 className="text-2xl font-mont font-semibold w-">Cobranças</h2>
        </div>
        <div className="flex items-center gap-6 max-md:flex-col">
          <div className="flex gap-4 max-md:justify-between  w-[420px] max-md:w-80 max-md:gap-2">
            <img className="cursor-pointer" src={filters} alt="Filtros" />
            <Input
              placeholder="Pesquisa"
              type="search"
              size="w-full"
              noMargins
              shadow
            />
          </div>
        </div>
      </div>
      {!loading ? (
        <div className="flex h-[60vh]  items-center justify-center">
          <Spinner loading={!loading} />
        </div>
      ) : (
        <ChargesTable
          edit={setEditCharge}
          showModal={handleShowModal}
          detail={handleShowChargeDetail}
          detailedCharge={setDetailedCharge}
          showDelete={handleShowDelete}
          deleteId={setDeleteChargeId}
        />
      )}
      <>
        {showModalCharges && (
          <ModalCharges modal={setShowModalCharges} edit={editCharge} />
        )}
        {showChargeDetail && (
          <DetailChargeModal
            modal={setShowChargeDetail}
            charge={detailedCharge}
          />
        )}

        {deleteCharge && (
          <DeleteChargeModal modal={setDeleteCharge} id={deleteChargeId} />
        )}
      </>
    </div>
  );
}
