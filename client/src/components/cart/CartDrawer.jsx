import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { blueGrey } from "@mui/material/colors";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem, setCartItem } from "../../state";

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

  const deleteItinerary = (index) => {
    // Dispatch an action to remove the card by index
    dispatch(removeCartItem(index))
  };

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
      <h3
        style={{ fontFamily: "Comic Sans MS", marginTop: "20%" }}
        className="h3-text"
      >
        Cart
      </h3>

      {/* {travelCards && travelCards.length > 0 && (
        <>
          <List>
            {travelCards.map((itinerary, index) => (
              <div style={{ marginTop: "20px" }}>
                <ItineraryCard
                  key={index}
                  index={index}
                  itineraryData={itinerary} // Pass the individual itinerary array
                  onClick={(event) => event.stopPropagation()} // Stop click events from propagating
                  onDelete={() => deleteItinerary(index)} // Pass the index if you want to enable deleting
                />
              </div>
            ))}
          </List>
          <Divider />
        </>
      )}
      {
        !travelCards || travelCards.length == 0 && (
            <h2 style={{color: "grey"}}>
                Not Available
            </h2>
        )
      } */}
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
