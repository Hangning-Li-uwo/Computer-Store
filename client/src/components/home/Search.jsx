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
      handleSearchSubmit(); // Trigger search
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "85%",
      }}
    >
      {/* TextField with Search Icon inside */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        onKeyDownCapture={handleKeyPress}
        onChange={handleSearchChange}
        value={input}
        InputProps={{
          startAdornment: ( // Icon inside the TextField
            <IconButton
              type="button"
              aria-label="search"
              size="small"
              onClick={handleSearchSubmit}
              edge="start" // Aligns the icon to the start of the input
            >
              <SearchIcon />
            </IconButton>
          ),
        }}
        sx={{
          flexGrow: 1, // Takes available width in a flex container
          minWidth: 150, // Ensures a minimum width for the input field
          maxWidth: "100%", // Prevents overflow
        }}
      />
    </Box>
  );
}

export default Search;