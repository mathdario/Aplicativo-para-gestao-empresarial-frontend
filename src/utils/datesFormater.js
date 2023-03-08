export function formatDateNumeric(date) {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });
}

export function formatDateForm(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
