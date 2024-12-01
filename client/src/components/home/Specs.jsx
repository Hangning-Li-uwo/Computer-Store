import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid2";
import { useColorScheme } from "@mui/material";

function Specs({ selectedSpecItem }) {
  const { mode, setMode } = useColorScheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Typography
        id="modal-spec-title"
        variant="h4"
        component="h2"
        sx={{
          mb: 3,
          textTransform: "uppercase",
          fontWeight: "bold",
          color: "white",
          background:
            mode === "light" ? "linear-gradient(90deg, #c8c2bd, #000)" : "none",
          WebkitBackgroundClip: mode === "light" ? "text" : "none",
          WebkitTextFillColor: mode === "light" ? "transparent" : "white",
          textShadow:
            mode === "light"
              ? "0 0 15px rgba(200, 194, 189, 0.7), 0 0 30px rgba(200, 194, 189, 0.5), 0 0 45px rgba(200, 194, 189, 0.3)"
              : "0 0 10px #cfd8dc, 0 0 20px #cfd8dc",
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
          },
        }}
      >
        {selectedSpecItem.name} - Specs
      </Typography>

      {/* Feature Bullets */}
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        {selectedSpecItem?.features.map((feature, index) => (
          <Grid xs={12} sm={6} md={3} size={selectedSpecItem.size} key={index}>
            <Box sx={{ textAlign: "center", color: "#c8c2bd" }}>
              {feature.icon}
              <Typography variant="h6" gutterBottom sx={{ marginTop: 1, fontSize: { xs: "1rem", sm: "1.25rem" }, }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph sx={{fontSize: { xs: "0.875rem", sm: "1rem" }}}>
                {feature.description}
              </Typography>
              <ul style={{ paddingLeft: 16, textAlign: "left",   fontSize: "0.875rem", }}>
                {feature.bullets && feature.bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <Typography variant="body2" color="text.secondary">
                      {bullet}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}

export default Specs;
