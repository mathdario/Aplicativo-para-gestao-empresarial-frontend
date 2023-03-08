import PaymentTable from "./PaymentTable";

export default function Payments({ data }) {
  return (
    <div className="flex max-md:flex-col pt-2 justify-around items-center flex-wrap max-md:items-center">
      <PaymentTable data={data.paidCharges.charges} title="Cobranças Pagas" />
      <PaymentTable
        data={data.pendingCharges.charges}
        title="Cobranças Previstas"
      />
      <PaymentTable
        data={data.overdueCharges.charges}
        title="Cobranças Vencidas"
      />
    </div>
  );
}
