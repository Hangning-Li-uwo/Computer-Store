import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid2";
import Features from "./Features";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../../state";
import { toast } from "sonner";
import { green, red } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAuth } from "../../context/AuthContext";
import { setLocalStock } from "../../state";
import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { BASE_URL } from "../../constants";

export default function ComputerLists({ filteredItems }) {
  const { currentUser } = useAuth();
  const [selectedItem, setSelectedItem] = useState(null);
  const stock = useSelector((state) => state.localStock);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(filteredItems);
  }, [filteredItems]);

  const handleScroll = () => {
    const nextItems = filteredItems.slice(
      visibleItems.length,
      visibleItems.length + 10
    );
    setVisibleItems((prev) => [...prev, ...nextItems]);
  };

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        handleScroll();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [visibleItems, filteredItems]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/stock`);
        if (response.status === 200) {
          dispatch(setLocalStock(response.data));
        } else {
          console.log("Failed to fetch stock data:", response.data.message);
        }
      } catch (error) {
        console.log("Error fetching stock data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStockData();
  }, []);


  if (loading) {
    return (
      <Grid
        container
        xs={12}
        sm={6}
        md={4}
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          marginTop: 5,
          gap: 2,
        }}
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <React.Fragment key={index}>
            <Box sx={{ pt: 0.5 }}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={345}
                height={251}
              />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </React.Fragment>
        ))}
      </Grid>
    );
  }

  const addToCart = (item) => {
    toast(`${item.name} added to the cart`, {
      icon: <CheckCircleIcon sx={{ color: green[500] }} />,
    });
    dispatch(setCartItem(item));
  };

  const handleCart = async (item) => {
    if (!currentUser || currentUser === "") {
      toast.error(`Please login`, {
        icon: <CancelIcon sx={{ color: red[500] }} />,
      });
    } else {
      try {
        // Step 1: Check stock availability for the selected item
        const response = await axios.get(
          `${BASE_URL}/api/stock/${item.id}`
        );

        if (response.status === 200 && response.data.quantity > 0) {
          const updatedItem = { ...item, quantity: response.data.quantity };
          // Add the updated item to the cart
          addToCart(updatedItem);
        } else {
          // Stock is not available
          toast.error(`Out of stock`, {
            icon: <CancelIcon sx={{ color: red[500] }} />,
          });
        }
      } catch (error) {
        console.error("Error checking stock:", error.message);
        toast(`Error checking stock`, {
          icon: <CancelIcon sx={{ color: red[500] }} />,
        });
      }
    }
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {visibleItems.map((item, index) => {
        const matchingStock = stock.find((s) => s.name === item.name);
        return (
          <Grid
            container
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            component={motion.div} // Animate using framer-motion
            initial={{ opacity: 0, y: 50 }} // Start from transparent and move up
            animate={{ opacity: 1, y: 0 }} // End fully visible at the correct position
            transition={{ duration: 0.5, delay: index * 0.1 }} // Add staggered animation
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 345,
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                  borderColor: "primary.main",
                },
              }}
            >
              <CardMedia
                component="img"
                alt={item.title}
                height="240"
                image={item.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                {matchingStock && matchingStock.quantity === 0 ? (
                  <Button disabled>Sold Out</Button>
                ) : (
                  <Button
                    size="small"
                    onClick={() => {
                      handleCart(item);
                    }}
                  >
                    Add
                  </Button>
                )}
                <Button size="small" onClick={() => handleOpen(item)}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 4,
            borderRadius: 2,
          }}
        >
          {selectedItem && <Features item={selectedItem} />}
        </Box>
      </Modal>
    </Grid>
  );
}
