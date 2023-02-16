import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
  
const useStyles = makeStyles({
 finalRow: {
   backgroundColor: "lightblue"
 }
});
  
function createData(number, item, qty, price) {
 return { number, item, qty, price };
}
  
const rows = [
 createData(1, "Apple", 5, 3),
 createData(2, "Orange", 2, 2),
 createData(3, "Grapes", 3, 1),
 createData(4, "Tomato", 2, 1.6),
 createData(5, "Mango", 1.5, 4)
];
  
export default function ColumnTotalTable() {
 const classes = useStyles();
 let totalCost = 0;
  
 // Finding the Total Cost
 rows.forEach((row) => (totalCost += row.price));
  
 return (
   <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell> </TableCell>
           <TableCell align="center">회사</TableCell>
           <TableCell align="center">품목코드&nbsp;</TableCell>
           <TableCell align="center">품목명&nbsp;</TableCell>
           <TableCell align="center">품목유형&nbsp;</TableCell>
           <TableCell align="center">P/N&nbsp;</TableCell>
           <TableCell align="center">품목군&nbsp;</TableCell>
           <TableCell align="center">규격&nbsp;</TableCell>
           <TableCell align="center">수불단위&nbsp;</TableCell>
           <TableCell align="center">매입 매입수불 ;</TableCell>
           <TableCell align="center">소요 수불소요&nbsp;</TableCell>
           <TableCell align="center">수율 수불수율&nbsp;</TableCell>
           <TableCell align="center">&nbsp;</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow key={row.number}>
             <TableCell component="th" scope="row">
               {row.number}
             </TableCell>
             <TableCell align="right">{row.item}</TableCell>
             <TableCell align="right">{row.qty}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
           </TableRow>
         ))}
         <TableRow className={classes.finalRow}>
           <TableCell align="right" colSpan={13}>
             <b>Total Cost:</b> ${totalCost}
           </TableCell>
         </TableRow>
       </TableBody>
     </Table>
   </TableContainer>
 );
}