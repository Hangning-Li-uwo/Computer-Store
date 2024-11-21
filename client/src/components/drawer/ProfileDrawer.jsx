import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../state";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";
import { toast } from "sonner";

function ProfileDrawer({ setOpenSettingsDrawer, openSettingsDrawer }) {
  const {currentUser} = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const [pay, setPay] = React.useState('');
  const [address, setAddress] = React.useState('');
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    setIsOpen(openSettingsDrawer); // Sync with external prop
  }, [openSettingsDrawer]);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open); // Update internal state
    setOpenSettingsDrawer(open); // Notify parent component
  };



  const handlePay = (event) => {
    setPay(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const updateUserProfile = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/updateUserProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: currentUser.UID, address: address, paymentMethod: pay }),
      });
  
      if (response.status === 200) {
        dispatch(
          updateProfile({
            address: address,
            paymentMethod: pay,
          })
        );
        toast.success("Profile updated successfully!", {
          icon: <CheckCircleIcon sx={{ color: green[500] }} />,
        });
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
            id="addr"
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
