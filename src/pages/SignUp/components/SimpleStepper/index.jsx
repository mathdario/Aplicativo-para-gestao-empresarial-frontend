import greyStep from "./assets/greyStep.svg";
import greenStep from "./assets/greenStep.svg";

export default function SimpleStepper({ step }) {
  return (
    <div className="flex gap-2 fixed bottom-32">
      <img
        src={step === 0 ? greenStep : greyStep}
        alt="step 1"
      />
      <img
        src={step === 1 ? greenStep : greyStep}
        alt="step 2"
      />
      <img
        src={step === 2 ? greenStep : greyStep}
        alt="step 3"
      />
    </div>
  );
}
