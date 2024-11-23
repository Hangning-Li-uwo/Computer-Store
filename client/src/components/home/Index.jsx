import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ComputerLists from "./Computers";
import { useSelector, useDispatch } from "react-redux";
import { updateRole } from "../../state";
import Search from "./Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";
import { toast } from "sonner";
import ITEM_LIST from "./ItemList";
import axios from "axios"

function Index() {
  const user = useSelector((state) => state.user);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const [query, setQuery] = useState(""); // Search input
  const [filter, setFilter] = useState({}); // Filter criteria
  const [filteredItems, setFilteredItems] = useState(ITEM_LIST); // Filtered items

  const uploadProducts = async (products) => {
    try {
      const response = await axios.post("http://localhost:5001/api/products", {
        products,
      });
  
      if (response.status === 200) {
        console.log("Products uploaded successfully:", response.data.results);
      } else {
        console.error("Failed to upload products:", response.data.message);
      }
    } catch (error) {
      console.error("Error uploading products:", error.message);
      throw new Error("Failed to upload products.");
    }
  };
  
  // Update filtered items based on query and filter
  useEffect(() => {
    const results = ITEM_LIST.filter((item) => {
      const matchesQuery =
        query === "" ||
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.manufacturer.toLowerCase().includes(query.toLowerCase());

      const matchesFilters =
        (!filter.brand || item.manufacturer === filter.brand) &&
        (!filter.priceRange ||
          (item.price >= filter.priceRange[0] &&
            item.price <= filter.priceRange[1]));

      return matchesQuery && matchesFilters;
    });

    setFilteredItems(results);
  }, [query, filter]);


  // upload products
  useEffect(() => {
    const uploadItems = async () => {
      try {
        await uploadProducts(ITEM_LIST);
      } catch (error) {
        console.error("Error uploading products:", error);
      }
    };
  
    uploadItems();
  }, [])

  const roleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/role", {
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
        toast.success(data.message, {
          icon: <CheckCircleIcon sx={{ color: green[500] }} />,
        });
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10vh",
              width: "100%",
            }}
          >
            <Box
            sx={{
              marginTop: 8,
              position: "fixed",
              top: 0,
              zIndex: 1000,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              gap: "15px",
            }}
          >
            <Search query={query} setQuery={setQuery} onFilter={setFilter} />
          </Box>
            <ComputerLists filteredItems={filteredItems} />
          </Box>
        </>
      )}
    </div>
  );
}

export default Index;