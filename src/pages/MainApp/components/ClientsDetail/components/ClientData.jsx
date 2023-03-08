import pencil from "./assets/pencil.svg";
import GrayButton from "./../../../../../components/GrayButton/index";

export default function ClientData({ client }) {
  return (
    <div className="bg-white mr-12 mb-6 rounded-4xl py-6 px-7 ">
      <div className="flex justify-between mb-6">
        <h2 className="font-mont font-bold text-[18px]">Dados do cliente</h2>
        <GrayButton label="Editar Cliente" large>
          <img src={pencil} alt="" />
        </GrayButton>
      </div>
      <div className="flex w-1/2 justify-between mb-14">
        <div>
          <p className="mb-2 font-bold">E-mail*</p>
          <span>{client.email}</span>
        </div>
        <div>
          <p className="mb-2 font-bold">Telefone*</p>
          <span>{client.phone}</span>
        </div>
        <div>
          <p className="mb-2 font-bold">CPF*</p>
          <span>{client.cpf}</span>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div>
          <p className="mb-2 font-bold">Endereço*</p>
          <span>{client.address}</span>
        </div>
        <div>
          <p className="mb-2 font-bold">Bairro</p>
          <span>{client.neighborhood}</span>
        </div>
        <div>
          <p className="mb-2 font-bold">Complemento</p>
          <span>{client.complement}</span>
        </div>
        <div>
          <p className="mb-2 font-bold">CEP</p>
          <span>{client.zipcode}</span>
        </div>
        <div>
          <p className="mb-2 font-bold">Cidade</p>
          <span>{client.city}</span>
        </div>
        <div>
          <p className="mb-2 font-bold">UF</p>
          <span>{client.state}</span>
        </div>
      </div>
    </div>
  );
}
