import React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Updated import for new Grid system
import AppleIcon from "@mui/icons-material/Apple"; // Replace with custom icons as needed
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const features = [
  {
    icon: <AppleIcon fontSize="large" />,
    title: "Apple M4 chip",
    description: `The M4 chip brings serious speed and capability so you can blaze through everyday activities and multitask across apps and video calls. And with a faster Neural Engine, AI features within your apps fly.`,
    bullets: ["Run multiple apps, speed through thousands of photos", "Effortlessly edit 4K video"]
  },
  {
    icon: <MemoryIcon fontSize="large" />,
    title: "Unified Memory",
    description: `Faster and more efficient than traditional RAM, unified memory is integrated within the M4 chip so apps can quickly share data between the CPU, GPU and Neural Engine.`,
    bullets: [
      "Run multiple apps at once while performance remains fast and responsive",
      "Add memory to run more apps simultaneously for faster, more fluid multitasking",
      "Configure iMac with up to 32GB unified memory"
    ]
  },
  {
    icon: <StorageIcon fontSize="large" />,
    title: "Storage",
    description: `Solid-state drive (SSD) storage is the amount of space your iMac has for your documents, photos, music, videos and other files.`,
    bullets: [
      "Delivers exceptional performance and speed when you start up your iMac, launch apps, open files and browse libraries",
      "Configure with up to 2TB of storage"
    ]
  },
  {
    icon: <FlashOnIcon fontSize="large" />,
    title: "Ports",
    description: `Ports allow you to connect accessories like printers, cameras, an additional display and external drives to your iMac for data transfer, charging and syncing.`,
    bullets: [
      "Thunderbolt ports let you connect high-speed accessories",
      "Models with Gigabit Ethernet allow you to connect to the internet using an Ethernet cable"
    ]
  }
];

export default function iMacFeatures() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: 4,
        borderRadius: 2,
        maxWidth: 900,
        margin: "auto"
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        What to consider when choosing your iMac.
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Configure your desktop in the next step.
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        {features.map((feature, index) => (
          <Grid xs={12} sm={6} md={3} key={index}>
            <Box sx={{ textAlign: "center" }}>
              {feature.icon}
              <Typography variant="h6" gutterBottom sx={{ marginTop: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {feature.description}
              </Typography>
              <ul style={{ paddingLeft: 16, textAlign: "left" }}>
                {feature.bullets.map((bullet, idx) => (
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

      <Divider sx={{ marginY: 3 }} />

      <Typography variant="body2" align="center" color="text.secondary">
        Have questions about buying a Mac?{" "}
        <Link href="#" underline="hover">
          Chat with a Mac Specialist
        </Link>
      </Typography>
    </Box>
  );
}