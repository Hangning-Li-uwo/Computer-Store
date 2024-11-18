import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import AccountMenu from "./Profile";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import SearchIcon from "@mui/icons-material/Search";
import { useDemoRouter } from "@toolpad/core/internal";
import Index from "./Index";
import { useAuth } from "../../context/AuthContext";
import Stock from "../stock/Stock";
import CircularProgress from "@mui/material/CircularProgress";
import CartDrawer from "../cart/CartDrawer";
import Box from "@mui/material/Box";
import ITEM_LIST from './ItemList';

const USER_NAVIGATION = [
  {
    kind: "header",
    title: "Menu",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
];

const ADMIN_NAVIGATION = [
  {
    kind: "header",
    title: "Menu",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    kind: "divider",
  },
  {
    segment: "stock",
    title: "Stock",
    icon: <InventoryIcon />,
  },
];

function Search({query, setQuery}) {
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
    <React.Fragment>
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        onKeyDownCapture={handleKeyPress}
        onChange={handleSearchChange}
        value={input}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small" onClick={handleSearchSubmit}>
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
      />
    </React.Fragment>
  );
}

Index.prototype = {
  pathname: PropTypes.string.isRequired,
};

function Dashboard(props) {
  const { currentUser, loading } = useAuth();

  const router = useDemoRouter("/dashboard");
  const [openCartDrawer, setOpenCartDrawer] = React.useState(false);

  const [query, setQuery] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(ITEM_LIST); // filtered items

  // Update filtered items
  React.useEffect(() => {
    // convert all texts into lower cases
    console.log("query: ", query);
    const results = ITEM_LIST.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.manufacturer.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
  }, [query]);
  
  React.useEffect(() => {
    // console.log(currentUser.role);
  }, [currentUser]);

  if(currentUser){
    if (loading) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
  }

  return (
    <AppProvider
      branding={{
        // Customize logo here
        logo: <img src="https://mui.com/static/logo.png" alt="MUI" />,
        title: "Computer Store",
      }}
      navigation={
        currentUser === null ||
        currentUser.role === "" ||
        currentUser.role == "user"
          ? USER_NAVIGATION
          : ADMIN_NAVIGATION
      }
      router={router}
    >
      <DashboardLayout
        slots={{
          toolbarActions: () => <Search query={query} setQuery={setQuery} />,
          toolbarAccount: (props) => (
            <AccountMenu {...props} setOpenCartDrawer={setOpenCartDrawer} />
          ),
        }}
        
      >
        {router.pathname == "/dashboard" && <Index filteredItems={filteredItems}/>}
        {router.pathname == "/stock" && <Stock />}
      </DashboardLayout>

      {/* Drawer Disolay */}
      <CartDrawer
        openCartDrawer={openCartDrawer}
        setOpenCartDrawer={setOpenCartDrawer}
      />
    </AppProvider>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
