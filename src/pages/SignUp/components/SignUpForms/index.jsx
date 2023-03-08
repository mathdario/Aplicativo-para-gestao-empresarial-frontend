import axios from "../../../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";

import Input from "../../../../components/Input";
import PinkButton from "../../../../components/PinkButton";

import complete from "./assets/complete.svg";

import {
  passwordSchema,
  singUpSchema,
} from "../../../../schemas/validationSchema";

export default function SignUpForms({ step, setStep }) {
  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmation: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
    confirmation: "",
  });

  const [debounceTimer, setDebounceTimer] = useState(null);

  function handleStep() {
    if (step <= 2) setStep(step + 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCreateUser((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleKeyUp() {
    if (debounceTimer) clearTimeout(debounceTimer);

    setDebounceTimer(
      setTimeout(() => {
        verifyEmail();
      }, 1500)
    );
  }

  async function verifyEmail() {
    try {
      const response = await axios.get("usuario/verificar-email", {
        params: { email: createUser.email },
      });
      if (response.status === 204) return true;
    } catch (err) {
      if (err.response.status === 400) {
        setFormError({ formError, email: err.response.data.mensagem });
      }
    }
  }

  function handleErrors(event) {
    const { name, value } = event.target;
    setFormError((prevState) => ({ ...prevState, [name]: "" }));
  }

  async function validationNameEmail() {
    try {
      const valid = await singUpSchema.validate(createUser);
      if (valid) {
        const email = await verifyEmail();
        if (!email) return;

        handleStep();
      }
    } catch (err) {
      setFormError({
        ...formError,
        [err.path]: err.errors[0],
      });
    }
  }

  async function validationPassword() {
    try {
      const valid = await passwordSchema.validate(createUser);
      if (valid) {
        handleRegisterUser();
      }
    } catch (err) {
      setFormError({
        ...formError,
        [err.path]: err.errors[0],
      });
    }
  }

  async function handleRegisterUser() {
    try {
      const { confirmation, ...user } = createUser;

      await axios.post("usuario/", user);

      handleStep();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center">
      {step === 0 && (
        <div className="w-96 max-md:w-80 flex flex-col items-center">
          <h2 className="font-mont font-bold text-center text-2xl mb-4">
            Adicione seus dados
          </h2>
          <section className="flex flex-col gap-5 w-full">
            <Input
              label="Nome*"
              name="name"
              placeholder="Digite seu nome"
              value={createUser.name}
              error={formError.name}
              onChange={(event) => {
                handleInputChange(event);
                handleErrors(event);
              }}
            />
            <Input
              label="E-mail*"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={createUser.email}
              error={formError.email}
              onChange={(event) => {
                handleInputChange(event);
                handleErrors(event);
              }}
              onKeyUp={handleKeyUp}
            />
          </section>
          <PinkButton label="Continuar" onClick={validationNameEmail} />
          <p className="font-nuni text-lg mt-4">
            Já possui uma conta? Faça seu{" "}
            <Link className="font-bold" to="/">
              login
            </Link>
            .
          </p>
        </div>
      )}
      {step === 1 && (
        <div className="w-96 max-md:w-80 flex flex-col items-center">
          <h2 className="font-mont font-bold text-2xl mb-4">
            Escolha uma senha
          </h2>
          <section className="flex flex-col gap-5 w-full">
            <Input
              label="Senha*"
              name="password"
              type="password"
              placeholder="••••••"
              value={createUser.password}
              error={formError.password}
              onChange={(event) => {
                handleInputChange(event);
                handleErrors(event);
              }}
            />
            <Input
              label="Respita a senha*"
              name="confirmation"
              type="password"
              placeholder="••••••"
              value={createUser.confirmation}
              error={formError.confirmation}
              onChange={(event) => {
                handleInputChange(event);
                handleErrors(event);
              }}
            />
          </section>
          <PinkButton label="Finalizar Cadastro" onClick={validationPassword} />
          <p className="font-nuni text-lg mt-4">
            Já possui uma conta? Faça seu{" "}
            <Link className="font-bold" to="/">
              login
            </Link>
            .
          </p>
        </div>
      )}
      {step === 2 && (
        <>
          <div className="flex flex-col w-[28rem] p-5 mb-2 rounded-4xl items-center bg-softGray max-md:p-2 max-md:w-80">
            <img className="w-28 h-28 mb-7" src={complete} alt="complete" />
            <h2 className="font-mont font-bold text-2xl mb-16 text-center">
              Cadastro realizado com sucesso!
            </h2>
          </div>
          <Link to="/">
            <PinkButton label="Ir para login" />
          </Link>
        </>
      )}
    </div>
  );
}
