import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { red } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { Button, Typography } from "@mui/material";
import { toast } from "sonner";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem, setOrderItem } from "../../state";
import CartButton from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";
import CancelIcon from "@mui/icons-material/Cancel";

// TODO
export default function CartDrawer({ openCartDrawer, setOpenCartDrawer }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const user = useSelector((state) => state.user);
  const stock = useSelector((state) => state.localStock);

  React.useEffect(() => {
    setIsOpen(openCartDrawer);
  }, [openCartDrawer]);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
    setOpenCartDrawer(open);
  };

  const items = useSelector((state) => state.items);
  // console.log(items);

  const dispatch = useDispatch();

  const deleteItem = (index) => {
    // Dispatch an action to remove the card by index
    dispatch(removeCartItem(index));
  };

  const createOrder = async (items) => {
    try {
      // Generate order data
      const orderData = {
        userId: user.UID,
        items: items,
        address: user.address,
        paymentMethod: user.paymentMethod,
        totalAmount: items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
        date: new Date().toISOString(),
      };

      // Send order data to the backend
      const response = await axios.post(
        "http://localhost:5001/api/orders/create",
        orderData
      );

      if (response.status === 200) {
        // Dispatch the action to save the order locally
        dispatch(setOrderItem(response.data.orderId));

        toast.success("Order successfully created!", {
          icon: <CheckCircleIcon sx={{ color: green[500] }} />,
        });
      } else {
        toast.error("Failed to create order. Please try again.", {
          icon: <CancelIcon sx={{ color: red[500] }} />,
        });
      }
    } catch (error) {
      console.error("Error creating order:", error.message);
      toast.error("An error occurred while creating the order.", {
        icon: <CancelIcon sx={{ color: red[500] }} />,
      });
    }
  };

  const sendEmail = async (items) => {
    try {
      const response = await axios.post("http://localhost:5001/api/email", {
        uid: user.UID, // Pass the user ID to identify the user in Firestore
        items: items,
      });

      if (response.status === 200) {
        // Prepare updated stock data
        const updatedStock = items
          .map((item) => {
            const matchingStock = stock.find((s) => s.name === item.name); // Find the stock item by name
            if (matchingStock) {
              return {
                id: item.id,
                name: item.name,
                quantity: matchingStock.quantity - item.quantity, // New quantity
              };
            }
            return null;
          })
          .filter((item) => item !== null);

        for (const stockItem of updatedStock) {
          const response = await axios.post(
            "http://localhost:5001/api/stock",
            stockItem
          );

          if (response.status !== 200) {
            throw new Error(
              `Failed to update stock for item ID ${stockItem.id}`
            );
          }
        }
        // create an order by userid
        createOrder(items);

        toast.success(
          "Order Submitted, please check order confirmation email!",
          {
            icon: <CheckCircleIcon sx={{ color: green[500] }} />,
          }
        );
      } else {
        toast.error("Failed to send the email, please contact support", {
          icon: <CheckCircleIcon sx={{ color: red[500] }} />,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      // Validate item quantities against stock
      const isInvalid = items.find((item) => {
        const matchingStock = stock.find((s) => s.name === item.name);
        return matchingStock && item.quantity > matchingStock.quantity;
      });

      if (isInvalid) {
        return toast.error(
          `The quantity of "${isInvalid.name}" exceeds available stock`,
          {
            icon: <CancelIcon sx={{ color: red[500] }} />,
          }
        );
      }

      if (user.address === "" || user.paymentMethod === "") {
        return toast.error(`Missing address and payment info`, {
          icon: <CancelIcon sx={{ color: red[500] }} />,
        });
      }

      sendEmail(items);
    } catch (error) {
      console.error("Error updating stock:", error.message);
    }
  };
  const TAX_RATE = 0.13;
  const subtotal = items.reduce((sum, item) => sum + (item.price  * item.quantity|| 0), 0);
  const tax = subtotal * TAX_RATE;
  const shippingFee = 10;
  const total = subtotal + tax + shippingFee;

  const list = (
    <Box
      sx={{
        width: 400,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        // backgroundColor: preferredMode === "dark" ? blueGrey[900] : "#fff"
      }}
      role="presentation"
    >
      <h1
        style={{ fontFamily: "Comic Sans MS", marginTop: "20%" }}
        className="h3-text"
      >
        Cart
      </h1>

      {items.length > 0 ? (
        <List>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <ListItemText
                  primary={item.title}
                  secondary={item.description}
                />
                <IconButton
                  onClick={() => deleteItem(index)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: 2,
                }}
              >
                <ListItemText secondary={`X ${item.quantity}`} />
              </ListItem>
            </React.Fragment>
          ))}
          <Divider sx={{ width: "100%", my: 2 }} />
          <Box sx={{ width: "100%", textAlign: "left", my: 2, padding: 2 }}>
            {/* Calculate shipping fee, tax, subtotal, and total */}
            <Typography variant="body1" style={{color: "#78909c"}}>
              Subtotal: ${subtotal.toFixed(2)}
            </Typography>
            <Typography variant="body1" style={{color: "#78909c"}}>
              Shipping Fee: ${shippingFee.toFixed(2)}
            </Typography>
            <Typography variant="body1" style={{color: "#78909c"}}>Tax: ${tax.toFixed(2)}</Typography>
            <Typography variant="body1" style={{color: "#607d8b"}} sx={{ mt: 2 }}>
              Total: ${total.toFixed(2)}
            </Typography>
          </Box>
          <CartButton onClick={() => clearCart(items)}>Order</CartButton>
        </List>
      ) : (
        <Typography variant="h6" color="text.secondary" sx={{ marginTop: 4 }}>
          Cart is empty
        </Typography>
      )}
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Right</Button> */}
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}
