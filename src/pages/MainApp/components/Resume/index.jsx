import ResumeCard from "./components/ResumeCard";
import ClientsResume from "./components/ClientsResume";

import Payments from "./components/Payments";
import useSingUpContext from "../../../../hooks/useSingUpContext";

export default function Resume() {
  const { resume } = useSingUpContext();

  return (
    <div className="flex flex-col mx-8 max-md:mx-6 max-md:mt-16 max-md:pb-20">
      <div className="w-full flex justify-around max-md:flex-col flex-wrap max-md:justify-center">
        <ResumeCard
          type="paidCharges"
          value={resume.charges.paidCharges.totalValue}
        />
        <ResumeCard
          type="pendingCharges"
          value={resume.charges.pendingCharges.totalValue}
        />
        <ResumeCard
          type="overdueCharges"
          value={resume.charges.overdueCharges.totalValue}
        />
      </div>
      <Payments data={resume.charges} />
      <ClientsResume data={resume.clients} />
    </div>
  );
}
