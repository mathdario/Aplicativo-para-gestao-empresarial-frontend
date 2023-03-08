import * as yup from "yup";
import { isEmail } from "validator";

export const singUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("É necessário um e-mail válido")
    .required("E-mail é um campo obrigatório")
    .test(
      "is-valid",
      (message) => `${message.path}`,
      (value) =>
        value ? isEmail(value) : new yup.ValidationError("Entrada inválida")
    ),

  name: yup
    .string("Coloque um nome válido!")
    .required("Nome é um campo obrigatório!")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "O nome só pode conter letras!"
    )
    .min(3, "O nome deve conter ao menos 3 letras!"),
});

export const singInSchema = yup.object({
  password: yup.string().required("Senha é obrigatório."),
  email: yup
    .string()
    .email("E-mail deve ser válido")
    .required("E-mail é um campo obrigatório"),
});

export const passwordSchema = yup.object().shape({
  confirmation: yup
    .string()
    .min(5, "A senha deve conter, no mínimo, 5 caracteres.")
    .oneOf([yup.ref("password"), null], "As senhas não estão idênticas"),
  password: yup.string().required("A senha é obrigatória."),
});

export const formSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[^a-zA-Z\d]/,
      "Password must contain at least one special character"
    ),
  confirmationPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export const editUserSchemaWithPassword = yup.object().shape({
  confirmation: yup
    .string()
    .min(5, "A senha deve conter, no mínimo, 5 caracteres.")
    .oneOf([yup.ref("password"), null], "As senhas não estão idênticas"),
  password: yup.string().required("A senha é obrigatória."),
  email: yup
    .string()
    .email("É necessário um e-mail válido")
    .required("E-mail é um campo obrigatório")
    .test(
      "is-valid",
      (message) => `${message.path}`,
      (value) =>
        value ? isEmail(value) : new yup.ValidationError("Entrada inválida")
    ),
  phone: yup.number("Somente números são permitidos").nullable(),
  cpf: yup.number("Somente números são permitidos").nullable(),
  name: yup
    .string("Coloque um nome válido!")
    .required("Nome é um campo obrigatório!")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "O nome só pode conter letras!"
    )
    .min(3, "O nome deve conter ao menos 3 letras!"),
});
export const editUserSchemaNoPassword = yup.object().shape({
  email: yup
    .string()
    .email("É necessário um e-mail válido")
    .required("E-mail é um campo obrigatório")
    .test(
      "is-valid",
      (message) => `${message.path}`,
      (value) =>
        value ? isEmail(value) : new yup.ValidationError("Entrada inválida")
    ),
  phone: yup
    .string()
    .nullable()
    .matches(/^\d*$/, "Somente números são permitidos"),
  cpf: yup
    .string()
    .nullable()
    .matches(/^\d*$/, "Somente números são permitidos"),

  name: yup
    .string("Coloque um nome válido!")
    .required("Nome é um campo obrigatório!")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "O nome só pode conter letras!"
    )
    .min(3, "O nome deve conter ao menos 3 letras!"),
});

export const newPasswordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("A senha é obrigatória.")
    .min(5, "A senha deve conter, no mínimo, 5 caracteres"),
});

export const clientSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\d*$/, "Somente números são permitidos"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .matches(/^\d*$/, "Somente números são permitidos"),
  email: yup
    .string()
    .email("É necessário um e-mail válido")
    .required("E-mail é um campo obrigatório")
    .test(
      "is-valid",
      (message) => `${message.path}`,
      (value) =>
        value ? isEmail(value) : new yup.ValidationError("Entrada inválida")
    ),
  name: yup.string().required("Preencha esse campo"),
});

export const chargeSchema = yup.object().shape({
  status: yup.string().required("Selecione um status"),
  value: yup
    .string()
    .required("Valor é obrigatório")
    .matches(/^\d*$/, "Somente números são permitidos"),
  due_date: yup.string().required("Escolha a data"),
  description: yup.string().required("Este campo é obrigatório"),
});
