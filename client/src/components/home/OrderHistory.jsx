import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const TAX_RATE = 0.13;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export default function OrderHistory() {
  const orders = useSelector((state) => state.orders); // Array of arrays
  console.log(orders);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: 30,
      }}
    >
      {orders ? (
        orders.map((orderGroup, groupIndex) => {
          // Ensure orderGroup is an array
          const safeOrderGroup = Array.isArray(orderGroup) ? orderGroup : [];

          // Calculate totals for the group
          const subtotal = calculateSubtotal(safeOrderGroup);
          const tax = subtotal * TAX_RATE;
          const total = subtotal + tax;

          return (
            <TableContainer
              component={Paper}
              key={groupIndex}
              sx={{ marginBottom: 3, width: "85%" }}
            >
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Order Group {groupIndex + 1}
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Desc</TableCell>
                    <TableCell align="right">Qty.</TableCell>
                    <TableCell align="right">Unit</TableCell>
                    <TableCell align="right">Sum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {safeOrderGroup.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="right">{item.quantity || 1}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(item.price || 0)}
                      </TableCell>
                      <TableCell align="right">
                        {ccyFormat((item.price || 0) * (item.quantity || 1))}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax</TableCell>
                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                    <TableCell align="right">{ccyFormat(tax)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">{ccyFormat(total)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          );
        })
      ) : (
        <Typography variant="h3" color="text.secondary" sx={{ marginTop: 4 }}>
          Order is empty
        </Typography>
      )}
    </Box>
  );
}
