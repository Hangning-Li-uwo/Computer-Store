import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { blueGrey } from "@mui/material/colors";
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
import { clearCartItem, removeCartItem, setCartItem } from "../../state";
import CartButton from "@mui/material/Button";

// TODO
export default function CartDrawer({ openCartDrawer, setOpenCartDrawer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(openCartDrawer); // Sync internal state with external prop
  }, [openCartDrawer]);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open); // Update internal state
    setOpenCartDrawer(open); // Notify external state of the change
  };

  //   const preferredMode = useSelector((state) => state.mode);
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();

  const deleteItem = (index) => {
    // Dispatch an action to remove the card by index
    dispatch(removeCartItem(index));
  };

  const clearCart = async (items) => {
    // Dispatch an action to clear the card by index
    try {
      for (const item of items) {
        // Update stock for each item in the backend
        await axios.post("http://localhost:5001/api/updateStock", {
          pid: item[0].id, // Product ID
          pname: item[0].name, // Product name
          quantity: item[1].quantity, // TODO
        });
      }

      // Clear the cart in the state
      dispatch(clearCartItem());

      // Notify the user that the cart has been cleared
      toast.success("Cart cleared and stock updated successfully!");
    } catch (error) {
      console.error("Error clearing cart and updating stock:", error.message);
    }
    dispatch(clearCartItem());
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
            <ListItem
              key={index}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <ListItemText primary={item.title} secondary={item.description} />
              <IconButton
                onClick={() => deleteItem(index)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
          <Divider sx={{ width: "100%", my: 2 }} />
          <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
            Subtotal: ${subtotal.toFixed(2)}
          </Typography>
          <CartButton onClick={() => clearCart(items)}>Clear</CartButton>
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

