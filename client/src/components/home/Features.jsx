import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, Link, Rating } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function Features({ item }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  
  //   fetchReviews();
  // }, [item.id]);

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: 4,
        borderRadius: 2,
        maxWidth: 900,
        margin: "auto",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        What to consider when choosing your {item.name}.
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        Configure your desktop in the next step.
      </Typography>

      <Divider sx={{ marginY: 3 }} />

      {loading ? (
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      ) : error ? (
        <Typography variant="body2" align="center" color="error">
          {error}
        </Typography>
      ) : reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography variant="h6">{review.title}</Typography>
            <Rating value={review.rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {review.reviewCount} reviews
            </Typography>
            {review.description &&
              review.description.map((desc, descIndex) => (
                <Box key={descIndex} sx={{ marginTop: 1 }}>
                  <Typography variant="subtitle1">{desc.reviewer}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {desc.reviewText}
                  </Typography>
                  <Divider sx={{ marginY: 1 }} />
                </Box>
              ))}
          </Box>
        ))
      ) : (
        <Typography variant="body2" align="center" color="text.secondary">
          No reviews available.
        </Typography>
      )}

      <Typography variant="body2" align="center" color="text.secondary">
        Have questions about this buying?{" "}
        <Link href="#" underline="hover">
          Chat with a Specialist
        </Link>
      </Typography>
    </Box>
  );
}
