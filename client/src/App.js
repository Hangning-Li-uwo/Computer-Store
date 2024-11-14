import "./App.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

function App() {
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = "Computer Store";
  }, []);

  const theme = React.useMemo(() => createTheme(themeSettings('light')), ['light']);

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
            </Routes>
          </Router>
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
