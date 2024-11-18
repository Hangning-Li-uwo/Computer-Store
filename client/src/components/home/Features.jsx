import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider, Link, Rating } from '@mui/material';

export default function Features() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        padding: 4,
        borderRadius: 2,
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        What to consider when choosing your iMac.
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Configure your desktop in the next step.
      </Typography>

      <Divider sx={{ marginY: 3 }} />

      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Typography variant="h6">{review.title}</Typography>
            <Rating value={review.rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {review.snippet}
            </Typography>
            <Divider sx={{ marginY: 1 }} />
          </Box>
        ))
      ) : (
        <Typography variant="body2" align="center" color="text.secondary">
          Loading reviews...
        </Typography>
      )}

      <Typography variant="body2" align="center" color="text.secondary">
        Have questions about this buying?{' '}
        <Link href="#" underline="hover">
          Chat with a Specialist
        </Link>
      </Typography>
    </Box>
  );
}