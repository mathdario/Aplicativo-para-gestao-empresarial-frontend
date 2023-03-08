import { useState } from "react";

import SignUpForms from "./components/SignUpForms";
import SimpleStepper from "./components/SimpleStepper";
import Stepper from "./components/Stepper/Stepper";

export default function SignUp() {
  const [step, setStep] = useState(0);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/3 h-full max-md:hidden bg-softGray">
        <div className="flex items-center h-full justify-center">
          <Stepper step={step} />
        </div>
      </div>
      <div className="w-2/3 h-full bg-baseLight flex flex-col items-center justify-center max-md:w-full">
        <div className="w-full">
          <SignUpForms step={step} setStep={setStep} />
        </div>
        <div className="flex justify-center">
          <SimpleStepper step={step} />
        </div>
      </div>
    </div>
  );
}
