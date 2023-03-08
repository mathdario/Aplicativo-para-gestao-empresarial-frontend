import { SlPeople } from "react-icons/sl";
import PinkButton from "../../../../components/PinkButton";
import ClientsTable from "./components/ClientsTable";
import { useEffect, useState } from "react";
import useSingUpContext from "../../../../hooks/useSingUpContext";
import ModalClients from "../../../../components/ModalClients";
import ClientData from "./components/ClientData";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "./../../../../components/Spinner/index";

export default function ClientsDetail() {
  const { detailClient } = useSingUpContext();
  const [showModal, setShowModal] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState({});

  useEffect(() => {
    setDataLoaded(false);

    loadClient();
  }, []);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  async function loadClient() {
    const response = await detailClient(id);

    if (!response.client) navigate("/main/clients");

    setClient(response);

    console.log(response);
    setDataLoaded(true);
  }

  return (
    <>
      {!dataLoaded ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <Spinner loadinig={!dataLoaded} />
        </div>
      ) : (
        <div className="ml-20 mt-6 max-lg:mx-12 max-md:mx-0 max-md:mt-24 h-full max-md:pb-36 font-nuni">
          <div className="mr-14 mb-6 flex items-center justify-between max-lg:flex-col max-lg:gap-4 max-lg:items-start max-md:items-center max-md:mr-0">
            <div className="flex items-center gap-3 text-gray-700">
              <SlPeople className="text-3xl" />
              <h2 className="text-2xl font-mont font-semibold w-">
                {client.client.name}
              </h2>
            </div>
          </div>
          <ClientData client={client.client} />
          {/* {client.charges.length > 0 && <ClientsTable data={client.charges} />} */}
          <>{showModal && <ModalClients modal={setShowModal} />}</>
        </div>
      )}
    </>
  );
}
