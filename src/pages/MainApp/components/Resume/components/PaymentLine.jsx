import { convertCentstoReais } from "../../../../../utils/moneyFormater";

export default function PaymentLine({ data }) {
  const rowsToRender = data.slice(0, 4);
  const numRows = rowsToRender.length < 4 ? 4 : rowsToRender.length;

  return (
    <>
      {[...Array(numRows)].map((_, index) => {
        const el = rowsToRender[index];
        return (
          <tr
            key={index}
            className="font-nuni text-sm font-normal max-md:text-xs h-12 border-b "
          >
            <td className="text-left break-words w-[130px] pl-4">
              {el ? el.client_name : ""}
            </td>
            <td className="text-center min-w-[100px]">
              {el ? String(el.serial_id).padStart(8, 0) : ""}
            </td>
            <td className="text-right pr-4">
              {el ? `${convertCentstoReais(el.value)}` : ""}
            </td>
          </tr>
        );
      })}
    </>
  );
}
