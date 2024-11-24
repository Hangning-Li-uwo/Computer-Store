import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Link,
  Rating,
  Stack,
  Pagination,
  PaginationItem,
} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useColorScheme } from "@mui/material";


export default function Features({ item }) {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/api/reviews/${item.id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRatings(data[0].ratings);
        setReviews(data[0].reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [item.id]);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box
      sx={{
        padding: 4,
        borderRadius: 2,
        maxWidth: 900,
        margin: "auto",
        padding: 4,
        borderRadius: 3,
        background: mode === "dark" ? "" : " linear-gradient(135deg,rgba(255, 255, 255, 0.85),rgba(240, 240, 240, 0.85))",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
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
        <Box>
          <Typography variant="h6" align="center" gutterBottom>
            Overall Rating: {ratings}
          </Typography>
          {currentReviews.map((review, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <Typography variant="subtitle1">{review.reviewer}</Typography>
              <Rating value={review.rating} readOnly />
              <Typography variant="body2" color="text.secondary">
                {review.reviewText}
              </Typography>
              <Divider sx={{ marginY: 1 }} />
            </Box>
          ))}

          <Stack spacing={2} sx={{ marginTop: 3, alignItems: "center" }}>
            <Pagination
              count={Math.ceil(reviews.length / reviewsPerPage)} // Total number of pages
              page={currentPage}
              onChange={handlePageChange} 
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </Box>
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
