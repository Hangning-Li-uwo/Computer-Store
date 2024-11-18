import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { blue, green } from "@mui/material/colors";
import { toast } from "sonner";
import AddBoxIcon from '@mui/icons-material/AddBox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Stock() {
  const [rows, setRows] = React.useState([
    { id: 1, name: "iMac", brand: "Apple", quantity: 10 },
    { id: 2, name: "Macbook Pro", brand: "Apple", quantity: 0 },
    { id: 3, name: "AirPods Max", brand: "Apple", quantity: 5 },
    { id: 4, name: "HomePod Mini", brand: "Apple", quantity: 100 },
  ]);

  const [stock, setStock] = React.useState([]);

  const handleQuantityChange = (e, id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, quantity: e.target.value } : row
    );
    setRows(updatedRows);
  };

  const handleUpdateStock = async (id) => {
    // Find the row corresponding to the clicked Update button
    const selectedRow = rows.find((row) => row.id === id);

    if (selectedRow) {
      try {
        // Send the updated stock info to the backend
        const response = await axios.post(
          "http://localhost:5001/api/updateStock",
          {
            pid: id, // Product ID
            pname: selectedRow.name, // Product name
            quantity: selectedRow.quantity, // Updated quantity
          }
        );

        if (response.status === 200) {
          toast.success("Stock updated successfully!", {
            icon: <CheckCircleIcon sx={{ color: green[500] }} />,
          });
        } else {
          console.error("Failed to update stock:", response.data.message);
        }
      } catch (error) {
        console.error("Error updating stock:", error.message);
      }
    } else {
      console.error("No row found with the given ID:", id);
    }
  };

  const addRow = () => {

  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        // width: "90%",
        flexDirection: 'column'
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Item Name</StyledTableCell>
              <StyledTableCell align="center">Brand</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">In Stock</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.brand}</StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    id="outlined-number"
                    type="number"
                    value={row.quantity >= 0 ? row.quantity : 0}
                    onChange={(e) => handleQuantityChange(e, row.id)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography
                    sx={{ color: row.quantity > 0 ? "green" : "red" }}
                  >
                    {row.quantity > 0 ? "In Stock" : "Out of Stock"}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => handleUpdateStock(row.id)}>
                    Update
                  </Button>
                  <Button onClick={() => handleUpdateStock(row.id)}>
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <AddBoxIcon fontSize="large" sx={{ color: blue[900], marginTop: 2, cursor: "pointer" }}
       onClick={()=> addRow()}/>
    </Box>
  );
}

