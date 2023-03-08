import axios from "axios";

export default async function getAdress(cep) {
  try {
    if (cep.length !== 8) return false;

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
      timeout: 10000,
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
