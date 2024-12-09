import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, Skeleton, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useAuth } from "../../context/AuthContext";

const TAX_RATE = 0.13;
const SHIPPING_FEE = 10;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

const fetchOrders = async (ordersRef) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/orders`, { ordersRef });

    if (response.status === 200) {
      // console.log("Fetched Orders:", response.data);
      return response.data; // an array of orders
    } else {
      console.error("Failed to fetch orders:", response.data.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    return [];
  }
};

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const user = useSelector((state) => state.user);
  // const {currentUser,loading } = useAuth();
  // 从 Redux 中获取 state.user.ordersRef
  const ordersRef = useSelector((state) => state.user?.ordersRef);
  // load state
  useEffect(() => {
    const loadOrders = async () => {
      setLoading(true);

      console.log("33333########### Redux ordersRef:", ordersRef);

      if (ordersRef) {
        const fetchedOrders = await fetchOrders(ordersRef);

      //currentUser.ordersRef = Array.from(currentUser?.ordersRef || []);
      // console.log("##################currentUser ordersRef", currentUser?.ordersRef);
      // console.log("currentUser:", currentUser); // 调试信息
      // console.log("loading:", loading);         // 调试信息
      // if (currentUser?.ordersRef) {
      
      //   const fetchedOrders = await fetchOrders(currentUser.ordersRef);
    
        setTimeout(() => {
          setOrders(fetchedOrders);
          setLoading(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    loadOrders();
  }, [ordersRef]);

  // useEffect(() => {
  //   console.log("333333#############Updated Orders:", orders);
  // }, [orders]); // 每次 orders 变化时都会执行

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: 10,
      }}
    >
      {isLoading ? (
        // skeleton while isLoading
        <Stack spacing={3} sx={{ width: "85%" }}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1.5rem", marginBottom: 1 }}
          />

          <Skeleton variant="rounded" height={30} />
          <Skeleton
            variant="rectangular"
            height={80}
            sx={{ marginBottom: 1 }}
          />
        </Stack>
      ) : orders.length > 0 ? (
        orders.map((order, orderIndex) => {
          const items = order.items || [];

          const subtotal = calculateSubtotal(items);
          const tax = subtotal * TAX_RATE;
          const shippingFee = SHIPPING_FEE;
          const total = subtotal + tax + shippingFee;

          return (
            <TableContainer
              component={Paper}
              key={order.id}
              sx={{ marginBottom: 3, width: "85%" }}
            >
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Order #{order.id} &nbsp;&nbsp;&nbsp; (Date:{" "}
                      {new Date(order.date).toLocaleString()})
                    </TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Address - {order?.address}{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Payment Method -{" "}
                      {order?.paymentMethod}
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Unit</TableCell>
                    <TableCell align="right">Sum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item) => (
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
                    <TableCell rowSpan={4} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax</TableCell>
                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                    <TableCell align="right">{ccyFormat(tax)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shipping Fee</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">
                      {ccyFormat(shippingFee)}
                    </TableCell>
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
