import profileButton from "./assets/profileButton.svg";

import { MdLogout } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

import { useState, useEffect } from "react";
import { firstName, nameLetters } from "../../../utils/nameUtils";
import useSingUpContext from "./../../../hooks/useSingUpContext";
import { useNavigate } from "react-router-dom";

export default function TopBar({ modal, main }) {
  const [openProfile, setOpenProfile] = useState(false);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const { getUser, loggedUser } = useSingUpContext();

  async function restoreSession() {
    const response = await getUser();
    if (!response) navigate("/");
  }

  useEffect(() => {
    if (loggedUser.name) return;
    restoreSession();
  }, [loggedUser]);

  useEffect(() => {
    const menus = {
      Home: "Resumo das Cobranças",
      Clients: "Clientes",
      Charges: "Cobranças",
    };
    setTitle(menus[main]);
  }, [main]);

  function toggleProfile() {
    setOpenProfile(!openProfile);
  }

  function openModal() {
    modal(true);
    toggleProfile();
  }

  return (
    <>
      {loggedUser.name && (
        <div className="bg-baseLight pb-4 pt-4 flex justify-between items-center px-8 mx-8 border-b border-lightGreen max-md:px-4 max-md:mx-0 z-50">
          <h1 className="font-mont font-bold text-hardGray text-2xl max-md:text-lg max-sm:text-base">
            {title}
          </h1>
          <div className="flex items-center">
            <div className="rounded-full w-14 h-14 bg-gray-200 flex items-center justify-center mr-2 max-md:w-8 max-md:h-8">
              <p className="text-textGreen font-nuni text-2xl max-md:text-lg ">
                {nameLetters(loggedUser.name)}
              </p>
            </div>
            <div
              className="cursor-pointer  flex relative gap-2 items-baseline"
              onClick={toggleProfile}
            >
              <p className="text-textGreen font-nuni text-lg font-bold max-md:text-sm">
                {firstName(loggedUser.name)}
              </p>
              <img src={profileButton} alt="Editar Perfil" />

              {openProfile && (
                <div className=" absolute top-3 left-16 max-md:left-[52px] max-md:top-1 ">
                  <div className="w-16 overflow-hidden inline-block">
                    <div className=" h-3 w-3 bg-white rotate-45 transform origin-bottom-left "></div>
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="w-24 h-12 px-2 bg-white rounded-lg absolute top-4 right-6 t shadow-xl flex gap-4 items-center justify-center"
                  >
                    <div onClick={openModal}>
                      <TbEdit className="text-2xl text-gray-500 hover:text-gray-800" />
                      <p className="font-nuni text-xxs text-gray-700 ">
                        Editar
                      </p>
                    </div>
                    <div>
                      <MdLogout className="text-2xl text-gray-500 hover:text-gray-800" />
                      <p className="font-nuni text-xxs text-gray-700">Sair</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
