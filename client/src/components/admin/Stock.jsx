import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";
import { toast } from "sonner";
import Skeleton from "@mui/material/Skeleton";
import ITEM_LIST from "../home/ItemList";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Stock() {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Detect if it's a mobile view

  const [rows, setRows] = React.useState(
    ITEM_LIST.map((item) => ({
      name: item.name,
      manufacturer: item.manufacturer,
      quantity: 10, // Default quantity
    }))
  );
  const [loading, setLoading] = useState(true);

  const handleQuantityChange = (e, name) => {
    const updatedRows = rows.map((row) =>
      row.name === name
        ? { ...row, quantity: parseInt(e.target.value, 10) || 0 }
        : row
    );
    setRows(updatedRows);
  };

  const handleUpdateStock = async (name) => {
    const selectedRow = rows.find((row) => row.name === name);

    if (selectedRow) {
      try {
        const matchingItem = ITEM_LIST.find(
          (item) => item.name === selectedRow.name
        );

        if (!matchingItem) {
          console.error("Matching item not found in ITEM_LIST");
          return;
        }

        const response = await axios.post(
          "http://localhost:5001/api/updateStock",
          {
            id: matchingItem.id,
            name: selectedRow.name,
            quantity: selectedRow.quantity,
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
    }
  };

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/getAllStock"
        );
        if (response.status === 200) {
          console.log(response);
          setRows(response.data);
        } else {
          console.error("Failed to fetch stock data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          marginTop: 5,
          gap: 2, // Add spacing between skeletons
        }}
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            animation="wave"
            width="100%"
            height={60}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        flexDirection: "column",
        px: 2, // Padding for mobile views
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: isMobile ? "50%" : "80%", // Full width on mobile
          overflowX: "auto", // Allow horizontal scrolling on mobile
        }}
      >
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Item Name</StyledTableCell>
              {!isMobile && (
                <StyledTableCell align="center">Manufacturer</StyledTableCell>
              )}
              <StyledTableCell align="center">Quantity</StyledTableCell>
              {!isMobile && (
                <StyledTableCell align="center">In Stock</StyledTableCell>
              )}
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center" component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                {!isMobile && (
                  <StyledTableCell align="center">
                    {row.manufacturer}
                  </StyledTableCell>
                )}
                <StyledTableCell align="center">
                  <TextField
                    id="outlined-number"
                    type="number"
                    value={row.quantity >= 0 ? row.quantity : 0}
                    onChange={(e) => handleQuantityChange(e, row.name)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                  />
                </StyledTableCell>
                {!isMobile && (
                  <StyledTableCell align="center">
                    <Typography
                      sx={{ color: row.quantity > 0 ? "green" : "red" }}
                    >
                      {row.quantity > 0 ? "In Stock" : "Sold Out"}
                    </Typography>
                  </StyledTableCell>
                )}
                <StyledTableCell align="center">
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleUpdateStock(row.name)}
                  >
                    Update
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
