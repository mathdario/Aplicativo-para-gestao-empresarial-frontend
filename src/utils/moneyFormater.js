export function convertCentstoReais(moneyInCents) {
  const formatedValue = moneyInCents / 100;
  return formatedValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
