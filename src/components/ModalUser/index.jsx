import Input from "../Input";
import PinkButton from "../PinkButton";
import { useState, useEffect } from "react";
import useSingUpContext from "./../../hooks/useSingUpContext";
import {
  editUserSchemaNoPassword,
  editUserSchemaWithPassword,
  newPasswordSchema,
} from "../../schemas/validationSchema";
import { prepareUpdateUser } from "../../utils/prepareData";
import { toast } from "react-toastify";

export default function ModalUser({ modal }) {
  const [showModal, setShowModal] = useState(false);
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const { getUser, loggedUser, updateUser } = useSingUpContext();

  const [user, setUser] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    confirmation: "",
    oldPassword: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    confirmation: "",
    oldPassword: "",
  });

  useEffect(() => {
    setShowModal(true);
    loadDatabaseUser();
  }, []);

  async function loadDatabaseUser() {
    await getUser();
    setUser({ ...user, ...loggedUser });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let validation;

    if (user.password.length > 0 || user.confirmation.length > 0) {
      validation = await validationFormPassword();
    } else {
      validation = await validationFormNoPassword();
    }

    if (validation) {
      if (user.password.length > 0 && user.oldPassword.length < 5) {
        setShowModalPassword(true);
        return;
      }

      const userData = prepareUpdateUser(user);

      const response = await updateUser(userData);

      if (response === "ok") {
        setUser({ ...user, password: "", confirmation: "", oldPassword: "" });
        getUser();
        handleCloseModal();
        toast.success("Usuário alterado com sucesso", {
          position: "top-center",
          theme: "dark",
        });
        return;
      }
      setUser({ ...user, oldPassword: "" });
      toast.error(response, {
        position: "top-center",
        theme: "dark",
      });
    }
  }

  async function validationFormPassword() {
    try {
      const valid = await editUserSchemaWithPassword.validate(user);
      if (valid) {
        return true;
      }
    } catch (err) {
      if (!err.errors) return;
      setFormError({
        ...formError,
        [err.path]: err.errors[0],
      });
    }
  }

  async function validationFormNoPassword() {
    try {
      const valid = await editUserSchemaNoPassword.validate(user);
      if (valid) {
        return true;
      }
    } catch (err) {
      if (!err.errors) return;
      setFormError({
        ...formError,
        [err.path]: err.errors[0],
      });
    }
  }

  function clearErrors(event) {
    const { name } = event.target;
    setFormError((prevState) => ({ ...prevState, [name]: "" }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handlePasswordChange(event) {
    try {
      const valid = await newPasswordSchema.validate(user);
      if (valid) {
        setShowModalPassword(false);
        handleSubmit(event);
        return;
      }
    } catch (err) {
      if (!err.errors) return;
      setFormError({
        ...formError,
        [err.path]: err.errors[0],
      });
    }
  }

  const modalClasses = `bg-white py-10 max-md:px-7 px-14 rounded-4xl w-[491px] flex-col text-center relative transform transition-transform duration-1000 ${
    showModal ? "" : "-translate-y-[120%]"
  }`;

  function handleCloseModal() {
    setShowModal(false);
    setTimeout(() => {
      modal(false);
    }, 800);
  }
  function handleCloseModalPassword() {
    setUser({ ...user, oldPassword: "" });
    setShowModalPassword(false);
  }

  return (
    <div className="w-full h-full  text-gray-800 flex justify-center items-center bg-black bg-opacity-40 absolute left-0 bottom-0 backdrop-blur-xs overflow-hidden z-50">
      <form className={modalClasses}>
        <h1 className="font-mont text-2xl font-bold mb-8">
          Edite seu cadastro
        </h1>
        <span
          onClick={handleCloseModal}
          className="font-nuni text-4xl absolute top-4 right-5 cursor-pointer"
        >
          &times;
        </span>
        <div className="flex flex-col gap-5">
          <Input
            label="Nome*"
            name="name"
            placeholder="Digite seu nome"
            value={user.name}
            onChange={(event) => {
              handleInputChange(event);
              clearErrors(event);
            }}
            error={formError.name}
          />
          <Input
            label="E-mail*"
            name="email"
            placeholder="Digite seu e-mail"
            value={user.email}
            onChange={(event) => {
              handleInputChange(event);
              clearErrors(event);
            }}
            error={formError.email}
          />
          <div className="flex gap-6">
            <Input
              label="CPF"
              name="cpf"
              placeholder="Digite seu CPF"
              type="number"
              value={user.cpf ?? ""}
              onChange={(event) => {
                handleInputChange(event);
                clearErrors(event);
              }}
              maxLength={11}
              error={formError.cpf}
            />
            <Input
              label="Telefone"
              name="phone"
              placeholder="Digite seu Telefone"
              type="number"
              value={user.phone ?? ""}
              onChange={(event) => {
                handleInputChange(event);
                clearErrors(event);
              }}
              error={formError.phone}
            />
          </div>
          <Input
            label="Nova Senha*"
            name="password"
            placeholder="••••••••"
            type="password"
            value={user.password}
            onChange={(event) => {
              handleInputChange(event);
              clearErrors(event);
            }}
            error={formError.password}
          />
          <Input
            label="Confirmar Senha*"
            name="confirmation"
            placeholder="••••••••"
            type="password"
            value={user.confirmation}
            onChange={(event) => {
              handleInputChange(event);
              clearErrors(event);
            }}
            error={formError.confirmation}
          />
        </div>
        <PinkButton
          label="Aplicar"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
      {showModalPassword && (
        <div className="absolute w-full h-full flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-xs ">
          <div className="w-96 h-48 bg-white drop-shadow-2xl rounded-2xl p-5 flex flex-col items-center gap-3 ">
            <h4 className="font-mont font-bold text-xl">Senha Anterior</h4>
            <span
              onClick={handleCloseModalPassword}
              className="font-nuni text-3xl absolute top-2 right-5 cursor-pointer"
            >
              &times;
            </span>
            <Input
              type="password"
              name="oldPassword"
              value={user.oldPassword}
              onChange={(event) => {
                handleInputChange(event);
                clearErrors(event);
              }}
              error={formError.oldPassword}
            />
            <PinkButton
              label="Confirmar"
              type="button"
              onClick={(event) => handlePasswordChange(event)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
