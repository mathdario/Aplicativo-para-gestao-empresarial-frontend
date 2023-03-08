import filledStep from "./assets/filledStep.svg";
import holeStep from "./assets/holeStep.svg";
import doneStep from "./assets/doneStep.svg";
import line from "./assets/line.svg";

export default function Stepper({ step }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-1">
        <img
          src={step > 0 ? doneStep : filledStep}
          alt="step"
        />
        <img
          src={line}
          alt="step"
        />
        {step === 0 && <img src= {holeStep}/>}
        {step === 1 && <img src= {filledStep}/>}
        {step === 2 && <img src= {doneStep}/>}
        <img
          src={line}
          alt="step"
        />
        <img
          src={step > 1 ? doneStep : holeStep}
          alt="step"
        />
      </div>
      <div>
        <div>
          <p
            className={`font-mont text-lg text-textGreen font-semibold ${
              step === 0 ? "animate-pulse transition duration-500" : null
            }`}
          >
            Cadastre-se
          </p>
          <p className="font-nuni text-lg text-slate-800 font-semibold">
            Por favor, escreva seu nome e e-mail
          </p>
        </div>
        <div className="mt-6">
          <p
            className={`font-mont text-lg text-textGreen font-semibold ${
              step === 1 ? "animate-pulse transition duration-500" : null
            }`}
          >
            Escolha uma senha
          </p>
          <p className="font-nuni text-lg text-slate-800 font-semibold">
            Escolha uma senha segura
          </p>
        </div>
        <div className="mt-6">
          <p
            className={`font-mont text-lg text-textGreen font-semibold ${
              step === 2 ? "animate-pulse transition duration-500" : null
            }`}
          >
            Cadastro realizado com sucesso
          </p>
          <p className="font-nuni text-lg text-slate-800 font-semibold">
            E-mail e senha cadastrados com sucesso
          </p>
        </div>
      </div>
    </div>
  );
}
