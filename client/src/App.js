import "./App.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { themeSettings } from "./theme";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/home/Dashboard";
import OAuthSignIn from "./components/auth/OAuthSignIn";
import Admin from "./components/Admin";

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
          <Router>
            {/* <OneTapAuth /> */}
            <Routes>
              {/* <Route element={<ProtectedRoutes allowedRoles={[ROLES.USER]} />}> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/sign-in" element={<OAuthSignIn />} />
              {/* </Route> */}
              {/* Only ADMIN can have access to this page */}
              <Route element={<ProtectedRoutes allowedRoles={[ROLES.ADMIN]} />}>
                <Route path="/admin" element={<Admin />} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
