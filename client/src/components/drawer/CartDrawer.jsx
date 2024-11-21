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
import CancelIcon from '@mui/icons-material/Cancel';

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

  const dispatch = useDispatch();

  const deleteItem = (index) => {
    // Dispatch an action to remove the card by index
    dispatch(removeCartItem(index));
  };

  const clearCart = async () => {
    try {
      // Validate item quantities against stock
      const isInvalid = items.find((item) => {
        const matchingStock = stock.find((s) => s.name === item.name);
        return matchingStock && item.quantity > matchingStock.quantity;
      });

      if (isInvalid) {
        return toast.error(`The quantity of "${isInvalid.name}" exceeds available stock`, {
          icon: <CancelIcon sx={{ color: red[500] }} />,
        });
      }

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
          "http://localhost:5001/api/updateStock",
          stockItem
        );

        if (response.status !== 200) {
          throw new Error(`Failed to update stock for item ID ${stockItem.id}`);
        }
      }

      dispatch(setOrderItem(items)); // Create an order
      toast.success("Order Submitted and stock updated!", {
        icon: <CheckCircleIcon sx={{ color: green[500] }} />,
      });
    } catch (error) {
      console.error("Error updating stock:", error.message);
    }
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price || 0), 0);

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
              {" "}
              {/* Apply the key to React.Fragment */}
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
          <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
            Subtotal: ${subtotal.toFixed(2)}
          </Typography>
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
