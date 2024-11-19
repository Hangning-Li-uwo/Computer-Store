import * as React from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

function Search({ query, setQuery }) {
  const [input, setInput] = React.useState("");

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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent background
        borderRadius: "25px", // Rounded edges
        padding: "5px 15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        backdropFilter: "blur(10px)", // Blurring effect for the glass look
        // width: "100%",
        // maxWidth: "400px",
        transition: "all 0.3s ease", // Smooth hover transition
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Slightly brighter on hover
        },
      }}
    >
      <IconButton
        aria-label="search"
        onClick={handleSearchSubmit}
        sx={{ color: "#fff", padding: 0 }}
      >
        <SearchIcon />
      </IconButton>
      <TextField
        variant="standard"
        placeholder="Search..."
        InputProps={{
          disableUnderline: true, // Remove default underline
        }}
        onKeyDownCapture={handleKeyPress}
        onChange={handleSearchChange}
        value={input}
        sx={{
          flex: 1,
          marginLeft: "10px",
          color: "#fff", // White text
          "&::placeholder": {
            color: "rgba(255, 255, 255, 0.7)", // Lighter placeholder
          },
        }}
      />
    </Box>
  );
}

export default Search;