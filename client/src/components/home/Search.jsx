import * as React from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material";

function Search({ query, setQuery, onFilter }) {
  const [input, setInput] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [priceRange, setPriceRange] = React.useState([0, 4000]);
  const [selectedBrand, setSelectedBrand] = React.useState("");

  const brands = ["Apple", "Dell", "Razer", "Lofree", "Microsoft"];

  const { mode, setMode } = useColorScheme();

  const handleSearchSubmit = () => {
    setQuery(input);
  };

  const handleSearchChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleFilterClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const applyFilters = () => {
    onFilter({ brand: selectedBrand, priceRange }); // Pass filter criteria to the parent
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "25px",
        padding: "5px 15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        maxWidth: "400px",
        width: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
      }}
    >
      <IconButton
        aria-label="search"
        onClick={handleSearchSubmit}
        sx={{ color: "#e0e0e0", paddingLeft: 2 }}
      >
        <SearchIcon />
      </IconButton>
      <TextField
        variant="standard"
        placeholder="Search..."
        InputProps={{
          disableUnderline: true,
          sx: {
            color: "#9e9e9e",
            "&::placeholder": {
              color: "#e0e0e0",
              opacity: 1,
            },
          },
        }}
        onKeyDownCapture={handleKeyPress}
        onChange={handleSearchChange}
        value={input}
        sx={{
          flex: 1,
          marginLeft: "10px",
          color: "#e0e0e0",
        }}
      />
      <IconButton
        aria-label="sort"
        onClick={handleFilterClick}
        sx={{
          color: "#e0e0e0",
          marginLeft: "auto",
          paddingRight: 2,
        }}
      >
        <SortIcon />
      </IconButton>

      {/* Filter Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleFilterClose}
        sx={{
          "& .MuiPaper-root": {
            width: "300px",
            backgroundColor: mode === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(50, 50, 50, 0.8)", // Transparent and adaptive
            backdropFilter: "blur(10px)",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            overflow: "hidden",
            padding: 0,
          },
        }}
      >
        <Box
          sx={{
            padding: 2,
          }}
        >
          <Typography variant="subtitle1" style={{ color:  mode === "light" ? "#757575" : "#bdbdbd" }}>
            Filter by Brand
          </Typography>
          {brands.map((brand) => (
            <MenuItem
              key={brand}
              selected={selectedBrand === brand}
              onClick={() => setSelectedBrand(brand)}
              sx={{
                color: mode === "light" ? "#757575" : "#bdbdbd", // Default text color
                "&:hover": {
                  color: mode === "light" ?  "#424242" : "#ffffff", // Highlighted text color
                  backgroundColor: "rgba(255, 255, 255, 0.3)", // Subtle background color on hover
                },
              }}
            >
              {brand}
            </MenuItem>
          ))}
          <Typography variant="subtitle1" style={{ color:  mode === "light" ? "#757575" : "#bdbdbd"  }}>
            Filter by Price
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={4000}
            step={50}
            color="#bdbdbd"
          />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={applyFilters}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)", // Button hover color
                padding: 1,
                borderRadius: "50%", // Circular button
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
}

export default Search;
