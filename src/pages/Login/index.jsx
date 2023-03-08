import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../components/Input/index";
import PinkButton from "../../components/PinkButton/index";
import axios from "../../services/api";
import { setStorage } from "../../services/storage";
import { singInSchema } from "../../schemas/validationSchema";
import useSingUpContext from "./../../hooks/useSingUpContext";

export default function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleErrors(event) {
    const { name } = event.target;
    setFormError((prevState) => ({ ...prevState, [name]: "" }));
  }

  async function validationEmailPass() {
    try {
      const valid = await singInSchema.validate(login);
      if (valid) {
        return true;
      }
    } catch (err) {
      setFormError({
        ...formError,
        [err.path]: err.errors[0],
      });
    }
  }

  async function handleLogin(e) {
    try {
      e.preventDefault();

      const validLogin = await validationEmailPass();

      if (!validLogin) return;

      const response = await axios.post("/login", login);

      if (response.status === 200) return sucessLogin(response.data);
    } catch (err) {
      const message = err.response.data.mensagem;

      toast.error(message, {
        position: "top-center",
        theme: "dark",
      });
    }
  }

  function sucessLogin(data) {
    setStorage(data);

    toast.success(`Seja bem vindo, ${data.user.name}!`, {
      position: "top-center",
      theme: "dark",
    });

    navigate("/main/home");
  }

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/3 h-full bg-login-img bg-no-repeat bg-cover bg-center max-md:hidden">
        <h2 className="text-LoginGreen flex justify-center pt-40 px-11 font-mont font-semibold text-2xl text-center leading-8">
          Gerencie todos os pagamentos da sua empresa em um só lugar.
        </h2>
      </div>
      <div className="w-2/3 h-full bg-baseLight flex justify-center items-center max-md:w-full">
        <form className="flex flex-col items-center w-96 max-md:w-80">
          <h2 className="font-mont font-bold text-2xl mb-8">Faça seu login!</h2>
          <div className="flex flex-col w-full gap-5">
            <Input
              label="E-mail"
              name="email"
              autoComplete="email"
              placeholder="Digite seu email"
              value={login.email}
              error={formError.email}
              onChange={(event) => {
                handleInputChange(event);
                handleErrors(event);
              }}
            />
            <Input
              label="Senha"
              name="password"
              placeholder="Digite sua senha"
              type="password"
              login="true"
              value={login.password}
              error={formError.password}
              onChange={(event) => {
                handleInputChange(event);
                handleErrors(event);
              }}
            />
          </div>
          <PinkButton label="Entrar" type="submit" onClick={handleLogin} />
          <p className="font-nuni mt-4">
            Ainda não possui uma conta? <Link to="/signup">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
