import React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SplashScreen({ onFinish, preferredMode }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: preferredMode === "dark"
          ? "linear-gradient(180deg, rgba(38,50,56,1) 0%, rgba(38,50,56,0) 100%), linear-gradient(90deg, #37474f 0%, #00695c 100%)"
          : "linear-gradient(180deg, rgba(224,247,250,1) 0%, rgba(224,247,250,0) 100%), linear-gradient(90deg, #b0bec5 0%, #26a69a 100%)",
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        exit={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={onFinish}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "6rem", // Larger font size
            textAlign: "center",
            letterSpacing: "0.1em", // Add spacing for more dramatic effect
          }}
        >
          BlueByte
        </Typography>
      </motion.div>
    </Box>
  );
}

export default SplashScreen;