import Input from "../Input";
import PinkButton from "../PinkButton";
import { useState, useEffect } from "react";
import { SlPeople } from "react-icons/sl";
import GrayButton from "../GrayButton";
import getAdress from "./../../services/cep";
import { clientSchema } from "../../schemas/validationSchema";
import useSingUpContext from "../../hooks/useSingUpContext";
import { toast } from "react-toastify";

export default function ModalClients({ modal }) {
  const { createClient, getClients } = useSingUpContext();

  const [showModal, setShowModal] = useState(false);

  const [client, setClient] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    zipcode: "",
    address: "",
    complement: "",
    city: "",
    state: "",
    neighborhood: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    zipcode: "",
    address: "",
    complement: "",
    city: "",
    state: "",
    neighborhood: "",
  });

  const [debounceTimer, setDebounceTimer] = useState(null);

  const modalClasses = `bg-white py-10 max-md:px-7 px-14 rounded-4xl w-[600px] max-md:w-full flex-col text-center relative transform transition-transform duration-1000 ${
    showModal ? "" : "-translate-y-[120%]"
  }`;
  useEffect(() => {
    setShowModal(true);
  }, []);

  function handleCloseModal() {
    setShowModal(false);

    setTimeout(() => {
      modal(false);
    }, 800);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setClient((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleNumberChange(event) {
    const { name, value } = event.target;

    const filteredValue = value.replace(/\D/g, "");

    setClient((prevState) => ({ ...prevState, [name]: filteredValue }));
  }

  function clearErrors(event) {
    const { name } = event.target;
    setFormErrors((prevState) => ({ ...prevState, [name]: "" }));
  }

  function handleAddress() {
    if (debounceTimer) clearTimeout(debounceTimer);

    setDebounceTimer(
      setTimeout(() => {
        handleCep();
      }, 1500)
    );
  }

  async function handleCep() {
    const response = await getAdress(client.zipcode);

    if (response.erro) {
      return setFormErrors({ ...formErrors, zipcode: "CEP inválido" });
    }

    if (!response.logradouro) return;

    setClient((prevState) => ({
      ...prevState,
      neighborhood: response.bairro,
      address: response.logradouro,
      city: response.localidade,
      state: response.uf,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validation = await validationForm();

    if (!validation) return;

    const response = await createClient(client);

    if (response === "ok") {
      getClients();

      toast.success("Cliente cadastrado com sucesso!", {
        position: "top-center",
        theme: "dark",
      });

      handleCloseModal();
      return;
    }

    toast.error(response, {
      position: "top-center",
      theme: "dark",
    });
  }

  async function validationForm() {
    try {
      const valid = await clientSchema.validate(client);
      if (valid) {
        return true;
      }
    } catch (err) {
      if (!err.errors) return;
      setFormErrors({
        ...formErrors,
        [err.path]: err.errors[0],
      });
    }
  }

  return (
    <div className="w-full h-full  text-gray-800 flex justify-center items-center bg-black bg-opacity-40 absolute left-0 bottom-0 backdrop-blur-xs overflow-hidden z-20">
      <form className={modalClasses}>
        <div className="flex gap-4">
          <SlPeople className="text-3xl" />
          <h1 className="font-mont text-2xl font-bold mb-4">
            Cadastro do Cliente
          </h1>
        </div>
        <span
          onClick={handleCloseModal}
          className="font-nuni text-4xl absolute top-4 right-5 cursor-pointer"
        >
          &times;
        </span>
        <div className="flex flex-col gap-5">
          <Input
            label="Nome*"
            required
            placeholder="Digite seu nome"
            name="name"
            value={client.name}
            error={formErrors.name}
            onChange={(event) => {
              handleInputChange(event);
              clearErrors(event);
            }}
          />
          <Input
            label="E-mail*"
            required
            placeholder="Digite seu e-mail"
            type="email"
            name="email"
            value={client.email}
            error={formErrors.email}
            onChange={(event) => {
              handleInputChange(event);
              clearErrors(event);
            }}
          />
          <div className="flex gap-6">
            <Input
              label="CPF*"
              required
              placeholder="Digite seu CPF"
              maxLength={11}
              name="cpf"
              value={client.cpf}
              error={formErrors.cpf}
              onChange={(event) => {
                handleNumberChange(event);
                clearErrors(event);
              }}
            />
            <Input
              label="Telefone*"
              required
              placeholder="Digite seu telefone"
              type="number"
              name="phone"
              value={client.phone}
              error={formErrors.phone}
              onChange={(event) => {
                handleInputChange(event);
                clearErrors(event);
              }}
            />
          </div>
          <Input
            label="Endereço"
            placeholder="Digite o endereço"
            name="address"
            value={client.address}
            error={formErrors.address}
            onChange={(event) => {
              handleInputChange(event);
              clearErrors(event);
            }}
          />
          <Input
            label="Complemento"
            placeholder="Digite o complemento"
            name="complement"
            value={client.complement}
            error={formErrors.complement}
            onChange={(event) => {
              handleInputChange(event);
              clearErrors(event);
            }}
          />
          <div className="flex gap-6">
            <Input
              label="CEP"
              placeholder="Digite o CEP"
              maxLength={8}
              name="zipcode"
              value={client.zipcode}
              error={formErrors.zipcode}
              onChange={(event) => {
                handleNumberChange(event);
                clearErrors(event);
              }}
              onKeyUp={handleAddress}
            />
            <Input
              label="Bairro"
              placeholder="Digite o bairro"
              name="neighborhood"
              value={client.neighborhood}
              error={formErrors.neighborhood}
              onChange={(event) => {
                handleInputChange(event);
                clearErrors(event);
              }}
            />
          </div>
          <div className="flex justify-between w-full gap-6">
            <div className="w-[60%]">
              <Input
                label="Cidade"
                placeholder="Digite a cidade"
                name="city"
                value={client.city}
                error={formErrors.city}
                onChange={(event) => {
                  handleInputChange(event);
                  clearErrors(event);
                }}
              />
            </div>
            <div>
              <Input
                label="UF"
                placeholder="Digite a UF"
                name="state"
                value={client.state}
                error={formErrors.state}
                onChange={(event) => {
                  handleInputChange(event);
                  clearErrors(event);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-center">
          <GrayButton large label="Cancelar" onClick={handleCloseModal} />
          <PinkButton
            large
            label="Aplicar"
            type="submit"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
