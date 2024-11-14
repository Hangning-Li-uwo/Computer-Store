import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { reactLocalStorage } from "reactjs-localstorage";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ComputerLists from "./Computers";


function Index() {
  const { currentUser, loading } = useAuth();
  const [role, setRole] = useState("");
  const [isAssigningRole, setIsAssigningRole] = useState(false);

  // console.log(loading);
  useEffect(() => {
    if (
      currentUser !== null &&
      (currentUser.role === "admin" ||
      currentUser.role === "user")
    ) {
      // console.log(loading);
      setIsAssigningRole(true);
    }
  }, [currentUser]);

  const roleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/assignRole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: currentUser.UID, role: role }),
      });

      if (response.ok) {
        const data = await response.json();
        // Update local user data
        currentUser.role = role;
        reactLocalStorage.set("currentUser", currentUser);
        setIsAssigningRole(true);
        alert(data.message);
        // window.location.href = "/";
      } else {
        throw new Error("Failed to assign role");
      }
    } catch (error) {
      console.error("Error assigning role:", error);
      alert("An error occurred while assigning role.");
    }
  };

  return (
    <div>
      {!isAssigningRole && !loading ? (
        <Box
          sx={{
            maxWidth: "30%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            paddingTop: "10vh",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Please assign a role
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Please assign a role"
              onChange={(e) => setRole(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value={"user"}>USER</MenuItem>
              <MenuItem value={"admin"}>ADMIN</MenuItem>
            </Select>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={roleSubmit}
            >
              Assign
            </Button>
          </FormControl>
        </Box>
      ) : (
        <Box
          sx={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            paddingTop: "2vh",
          }}
        >
          <ComputerLists />
        </Box>
      )}
    </div>
  );
}

export default Index;
