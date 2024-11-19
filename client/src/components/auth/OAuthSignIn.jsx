import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { signInWithPopup } from "firebase/auth";
import { auth, google } from "../firebase";
import { setUserProfile } from "../../state/index";
import { useDispatch } from "react-redux";

const providers = [{ id: "google", name: "Google" }];

// preview-start
const BRANDING = {
  logo: (
    <img
      src="https://mui.com/static/logo.svg"
      alt="MUI logo"
      style={{ height: 48 }}
    />
  ),
  title: "Computer Store",
};

export default function OAuthSignIn() {
  const theme = useTheme();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const signIn = async () => {
    setError("");
    setLoading(true);
    try {
      // Perform Google Sign-In

      const result = await signInWithPopup(auth, google);
      const user = result.user;

      console.log(user);
      // Upload user information to Firestore
      const userData = {
        uid: user.uid,
        firstName: user.displayName.split(" ")[0],
        lastName: user.displayName.split(" ")[1],
        email: user.email,
        photoURL: user.photoURL,
      };

      // Send a request to the backend to set the user profile in Firestore
      const response = await fetch("http://localhost:5001/api/setUserProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const profile = await response.json(); // Retrieve the full profile from the backend
        // Dispatch setUserProfile with the full profile
        dispatch(
          setUserProfile({
            UID: profile.UID,
            firstName: profile.firstName,
            lastName: profile.lastName,
            role: profile.role,
            email: profile.email,
            photoURL: profile.photoURL,
            address: profile.address,
            paymentMethod: profile.paymentMethod
          })
        );
        // Sign-in success; redirect as needed
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error.message);
      setError("Failed to create a new account");
    }
    setLoading(false);
  };

  return (
    // preview-start
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
    // preview-end
  );
}
