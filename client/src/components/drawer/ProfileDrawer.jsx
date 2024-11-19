import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../state";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Button } from "@mui/material";

function ProfileDrawer({ setOpenSettingsDrawer, openSettingsDrawer }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [pay, setPay] = React.useState('');
  const [address, setAddress] = React.useState('');

  React.useEffect(() => {
    setIsOpen(openSettingsDrawer); // Sync with external prop
  }, [openSettingsDrawer]);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open); // Update internal state
    setOpenSettingsDrawer(open); // Notify parent component
  };

  const dispatch = useDispatch();

  const handlePay = (event) => {
    setPay(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const updateUserProfile = async () => {
    if (!address || !pay) {
      alert("Please fill out both address and payment method.");
      return;
    }

    try {
      // Send user data to the backend
      const response = await axios.post("http://localhost:5001/api/updateUserProfile", {
        address,
        paymentMethod: pay,
      });

      if (response.status === 200) {
        // Update Redux store with the updated user profile
        dispatch(
          updateProfile({
            address: address,
            paymentMethod: pay,
          })
        );
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert("An error occurred while updating the profile.");
    }
  };

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{
            width: 400,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          role="presentation"
        >
          <h1
            style={{ fontFamily: "Comic Sans MS", marginTop: "20%" }}
            className="h3-text"
          >
            Profile
          </h1>

          <TextField
            id="address"
            label="Address"
            variant="outlined"
            value={address}
            onChange={handleAddressChange}
            sx={{ marginBottom: 2, width: 200, marginTop: 10 }}
          />

          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel id="payment method">Payment Method</InputLabel>
            <Select
              labelId="payment method"
              id="payment method"
              value={pay}
              label="Payment Method"
              onChange={handlePay}
            >
              <MenuItem value={"Visa"}>Visa</MenuItem>
              <MenuItem value={"Union Pay"}>Union Pay</MenuItem>
              <MenuItem value={"Paypal"}>Paypal</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={updateUserProfile}
            sx={{ marginTop: 6 }}
          >
            Update Profile
          </Button>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}

export default ProfileDrawer;
