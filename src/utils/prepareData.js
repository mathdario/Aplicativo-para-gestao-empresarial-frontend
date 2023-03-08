export function prepareUpdateUser(rawData) {
  let updatedUser = {};
  if (rawData.password.length > 0) {
    updatedUser = {
      name: rawData.name,
      email: rawData.email,
      cpf: rawData.cpf ?? "",
      phone: rawData.phone ?? "",
      oldPassword: rawData.oldPassword,
      newPassword: rawData.password,
    };
  } else {
    updatedUser = {
      name: rawData.name,
      email: rawData.email,
      cpf: rawData.cpf ?? "",
      phone: rawData.phone ?? "",
    };
  }

  console.log(updatedUser);

  return updatedUser;
}

export function prepareChargeData(rawData) {
  const { name, ...charge } = rawData;
  return charge;
}

export function prepareUpdateCharge(rawData) {
  const { name, client_id, ...charge } = rawData;
  return charge;
}
