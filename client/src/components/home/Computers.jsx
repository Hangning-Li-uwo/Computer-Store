import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Features from "./Features";
import ITEM_LIST from "./ItemList";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../state";
import { toast } from "sonner";
import { green } from "@mui/material/colors";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


// TODO
export default function ComputerLists( {filteredItems} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    toast(`${item.name} added to the cart`, {
      icon: <CheckCircleIcon sx={{ color: green[500] }} />,
    });
    dispatch(setCartItem(item));
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{
        width: "100%",
        maxWidth: "1200px", // Max width for the container
        margin: "0 auto", // Center the grid container
        // marginLeft: 20
      }}
    >
      {filteredItems.map((item) => (
        <Grid container xs={12} sm={6} md={4} key={item.id}>
          <Card
            sx={{
              width: "100%",
              maxWidth: 345,
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
              <Button
                size="small"
                onClick={() => {
                  addToCart(item);
                }}
              >
                Add
              </Button>
              <Button size="small" onClick={handleOpen}>
                Learn More
              </Button>
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
                    boxShadow: 24,
                    backgroundColor: "#f9f9f9",
                    padding: 4,
                    borderRadius: 2,
                  }}
                >
                  <Features />
                </Box>
              </Modal>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
