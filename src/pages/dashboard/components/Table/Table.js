import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  Progress: "공고중",
  Receiving: "접수중",
  Closed: "접수마감",
};

export default function TableComponent({ data }) {
  const classes = useStyles();
  console.log("data==>", data);

  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  // TODO mock.js 파일과 연결 하여 칼럼명 수정 필요

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, area, type, name, price, closeDate, status }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{area}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{closeDate}</TableCell>
            <TableCell>
              <Chip label={status} classes={{root: classes[states[status.toLowerCase()]]}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
