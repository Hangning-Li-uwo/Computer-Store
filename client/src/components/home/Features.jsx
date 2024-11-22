import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider, Link, Rating } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function Features( {item} ) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(item.name);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/reviews?item_id=9045903045`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to load reviews'); 
        setLoading(false);
      }
    };

    fetchReviews();
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
              {review.snippet}
            </Typography>
            <Divider sx={{ marginY: 1 }} />
          </Box>
        ))
      ) : (
        <Typography variant="body2" align="center" color="text.secondary">
          No reviews available.
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