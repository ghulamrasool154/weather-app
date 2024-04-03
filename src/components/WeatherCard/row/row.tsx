import { FC } from "react";
import { TableRowProps } from "../../../types/table-row";

const TableRow: FC<TableRowProps> = ({ name, value }) => {
  return (
    <tr>
      <th> {name}</th>
      <td> {value}</td>
    </tr>
  );
};

export default TableRow;
