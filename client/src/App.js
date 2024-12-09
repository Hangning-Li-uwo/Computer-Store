import "./App.css";
import * as React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { themeSettings } from "./theme";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/home/Dashboard";
import OAuthSignIn from "./components/auth/OAuthSignIn";
import { Toaster } from 'sonner';
import OrderHistory from "./components/home/OrderHistory";

function App() {
  React.useEffect(() => {
    document.title = "Computer Store";
  }, []);

  const mode = useSelector((state) => state.mode);

  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

  theme.typography.h2 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <AuthProvider>
        <Toaster position="top-right" />
          <Router>
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/sign-in" element={<OAuthSignIn />} />
            <Route path="/orders" element={<OrderHistory />} />
            </Routes>
          </Router>
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
