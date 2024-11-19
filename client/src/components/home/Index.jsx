import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ComputerLists from "./Computers";
import { useSelector, useDispatch } from "react-redux";
import { updateRole } from "../../state";
import Search from "./Search";
import ITEM_LIST from "./ItemList";

function Index() {
  const user = useSelector((state) => state.user);

  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  // const [isAssigningRole, setIsAssigningRole] = useState(false);

  const [query, setQuery] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(ITEM_LIST); // filtered items

  // Update filtered items
  React.useEffect(() => {
    const results = ITEM_LIST.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.manufacturer.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
  }, [query]);

  useEffect(() => {}, [user]);

  const roleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/assignRole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: user.UID, role: role }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(
          updateRole({
            role: role,
          })
        );
        // setIsAssigningRole(true);
        alert(data.message);
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
      {user && user.role === "" ? (
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
        <>
          {/* Search Field - Positioned Fixed */}

          <Box
            sx={{
              marginTop: 8,
              position: "fixed",
              top: 0,
              zIndex: 1000,
              width: "100%",
              padding: 2,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Search query={query} setQuery={setQuery} />
          </Box>

          {/* Computer List */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10vh",
              width: "100%",
            }}
          >
            <ComputerLists filteredItems={filteredItems} />
          </Box>
        </>
      )}
    </div>
  );
}

export default Index;
