import { FiHome } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import { VscFile } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ mainApp, switchMainApp }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full items-center max-md:flex-row max-md:flex gap-16 pb-1 pt-2 max-md:pt-4 max-md:justify-around max-md:mx-0 w-full bg-softGray max-md:pb-4 max-md:pr-2 z-50">
      <div
        onClick={() => {
          switchMainApp("Home");
          navigate("/main/home");
        }}
        className={`w-full border-r-2 max-md:border-t-2 max-md:border-r-0 ${
          mainApp === "Home" ? "border-basePink" : null
        } h-fit py-2`}
      >
        <div
          className={`flex flex-col items-center ${
            mainApp === "Home"
              ? "text-basePink"
              : "text-hardGray hover:text-lightPink"
          }  `}
        >
          <FiHome className="text-4xl max-md:text-2xl" />
          <p className="font-nuni font-semibold mt-1">Home</p>
        </div>
      </div>
      <div
        onClick={() => {
          switchMainApp("Clients");
          navigate("/main/clients");
        }}
        className={`w-full border-r-2 max-md:border-t-2 max-md:border-r-0 ${
          mainApp === "Clients" ? "border-basePink" : null
        } h-fit py-2`}
      >
        <div
          className={`flex flex-col items-center ${
            mainApp === "Clients"
              ? "text-basePink"
              : "text-hardGray hover:text-lightPink"
          }  `}
        >
          <SlPeople className="text-4xl max-md:text-2xl" />
          <p className="font-nuni font-semibold mt-1">Clientes</p>
        </div>
      </div>
      <div
        onClick={() => {
          switchMainApp("Charges");
          navigate("/main/charges");
        }}
        className={`w-full border-r-2 max-md:border-t-2 max-md:border-r-0 ${
          mainApp === "Charges" ? "border-basePink" : null
        } h-fit py-2`}
      >
        <div
          className={`flex flex-col items-center ${
            mainApp === "Charges"
              ? "text-basePink"
              : "text-hardGray hover:text-lightPink"
          }  `}
        >
          <VscFile className="text-4xl max-md:text-2xl" />
          <p className="font-nuni font-semibold mt-1">Cobranças</p>
        </div>
      </div>
    </div>
  );
}
