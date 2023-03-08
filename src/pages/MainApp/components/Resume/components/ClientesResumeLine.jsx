import { convertCentstoReais } from "../../../../../utils/moneyFormater";

export default function ClientesResumeLine({ data }) {
  const rowsToRender = data.slice(0, 4);
  const numRows = rowsToRender.length < 4 ? 4 : rowsToRender.length;

  return (
    <>
      {[...Array(numRows)].map((_, index) => {
        const item = rowsToRender[index];
        return (
          <tr
            key={index}
            className="font-nuni text-sm font-normal max-md:text-xs h-12 border-b"
          >
            <td className=" pl-6">{item ? item.name : ""}</td>
            <td>{item ? String(item.id).slice(0, 16) : ""}</td>
            <td>{item ? item.cpf : ""}</td>
          </tr>
        );
      })}
    </>
  );
}
