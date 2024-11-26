import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";
import { toast } from "sonner";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { deleteOrderItem } from "../../state";
import { Button } from "@mui/material";
import { BASE_URL } from "../../constants";

function Row({ row, deleteOrder }) {
  const [open, setOpen] = React.useState(false);

  const subtotal = row.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const taxRate = 0.13;
  const tax = subtotal * taxRate;
  const shippingFee = 10;
  const total = subtotal + tax + shippingFee;

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => deleteOrder(row.id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order Details
              </Typography>
              <Table size="small" aria-label="order details">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell align="right">
                        ${item.price.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        ${(item.quantity * item.price).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={4} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">${subtotal.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Tax (13%)</TableCell>
                    <TableCell align="right">${tax.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shipping Fee</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">
                      ${shippingFee.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <strong>Total</strong>
                    </TableCell>
                    <TableCell align="right">
                      <strong>${total.toFixed(2)}</strong>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  deleteOrder: PropTypes.func.isRequired,
};

function ManageOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const getAllOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/api/orders`);
      if (response.status === 200) {
        setOrders(response.data);
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      toast.error("Error fetching orders");
    }
    setTimeout(() => setLoading(false), 1500); // Simulate a delay for skeleton
  };

  const handleDeleteOrder = async (id, uid) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/orders/${id}`, {
        data: { uid },
      });
      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== id)
        );
        dispatch(deleteOrderItem(id));
        toast.success("Order deleted successfully", {
          icon: <CheckCircleIcon sx={{ color: green[500] }} />,
        });
      } else {
        toast.error("Failed to delete the order", {
          icon: <CheckCircleIcon sx={{ color: green[500] }} />,
        });
      }
    } catch (error) {
      toast.error("Error deleting the order");
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <Box sx={{ marginTop: 6 }}>
      {loading ? (
        <Stack spacing={3} sx={{ width: "85%", margin: "0 auto" }}>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1.5rem", marginBottom: 1 }}
            />
            <Skeleton
              variant="rectangular"
              height={80}
              sx={{ marginBottom: 1 }}
            />
        </Stack>
      ) : orders.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ width: "85%", margin: "0 auto", marginTop: 4 }}
        >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Order ID</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <Row
                  key={order.id}
                  row={order}
                  deleteOrder={() => handleDeleteOrder(order.id, user.UID)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ textAlign: "center", marginTop: 8 }}
        >
          No Orders
        </Typography>
      )}
    </Box>
  );
}

export default ManageOrder;
