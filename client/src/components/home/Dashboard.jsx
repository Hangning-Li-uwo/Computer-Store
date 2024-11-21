import React from "react";
import PropTypes from "prop-types";
import AccountMenu from "./Profile";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import HistoryIcon from '@mui/icons-material/History';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import Index from "./Index";
import Stock from "../admin/Stock";
import CartDrawer from "../drawer/CartDrawer";
import ProfileDrawer from "../drawer/ProfileDrawer";
import { useSelector } from "react-redux";
import OrderHistory from "./OrderHistory";
import ManageOrder from "../admin/ManageOrder";

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
  {
    segment: "orders",
    title: "Orders",
    icon: <HistoryIcon />,
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
    segment: "orders",
    title: "Orders",
    icon: <HistoryIcon />,
  },
  {
    kind: "divider",
  },
  {
    segment: "manageOrders",
    title: "Manage orders",
    icon: <ManageHistoryIcon />,
  },
  {
    segment: "stock",
    title: "Stock",
    icon: <InventoryIcon />,
  },
];

Index.prototype = {
  pathname: PropTypes.string.isRequired,
};

function Dashboard(props) {
  const currentUser = useSelector((state) => state.user);
  const router = useDemoRouter("/dashboard");
  const [openCartDrawer, setOpenCartDrawer] = React.useState(false);
  const [openSettingsDrawer, setOpenSettingsDrawer] = React.useState(false);

  React.useEffect(() => {
    console.log("current user: ", currentUser);
  }, [currentUser]);

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
          // toolbarActions: () => <Search query={query} setQuery={setQuery} />,
          toolbarAccount: (props) => (
            <AccountMenu
              {...props}
              setOpenCartDrawer={setOpenCartDrawer}
              setOpenSettingsDrawer={setOpenSettingsDrawer}
            />
          ),
        }}
      >
        {router.pathname == "/dashboard" && <Index />}
        {router.pathname == "/orders" && <OrderHistory />}
        {router.pathname == "/manageOrders" && <ManageOrder />}
        {router.pathname == "/stock" && <Stock />}


      </DashboardLayout>

      {/* Drawer Disolay */}
      <CartDrawer
        openCartDrawer={openCartDrawer}
        setOpenCartDrawer={setOpenCartDrawer}
      />
      <ProfileDrawer
        openSettingsDrawer={openSettingsDrawer}
        setOpenSettingsDrawer={setOpenSettingsDrawer}
      />
    </AppProvider>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
