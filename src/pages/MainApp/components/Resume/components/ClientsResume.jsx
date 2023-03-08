import ClientsResumeTable from "./ClientsResumeTable";

export default function ClientsResume({ data }) {
  return (
    <div className="w-full flex max-md:flex-col pt-4 px-12 max-md:px-0 justify-between flex-wrap max-md:items-center">
      <ClientsResumeTable
        data={data.defaultingClients}
        title="Clientes Inadimplentes"
      />
      <ClientsResumeTable data={data.upToDateClients} title="Clientes em Dia" />
    </div>
  );
}
