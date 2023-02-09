import {
  Avatar,
  Box,
  // Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import postImage2 from "../../static/image2.jpg";
// import postImage3 from "../../static/image3.jpg";
// import postImage4 from "../../static/image4.jpg";
import React from "react";
import AboutUsCard from "../rightbar/AboutUsCard";

const Rightbar = () => {
  return (
    <Box sx={{ mt: { xs: '2rem', md: 0 }, mb: '4rem', direction: 'rtl' }}>
      <Typography align="center" bgcolor={"black"} color="white" sx={{ padding: 1 }}>
        مقالات
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: '100vw',
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."}
          />
        </ListItem>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              sx={{ height: 80, width: 80 }}
              variant="square"
              alt="Remy Sharp"
              src={postImage2}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."}
          />
        </ListItem>
        {/* <Divider variant="inset" component={"li"} /> */}
      </List>
      <Box mt={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Typography align="center" bgcolor={"black"} color="white" mb={2} sx={{ padding: 1 }}>
          درباره ما
        </Typography>
        <AboutUsCard />
      </Box>
    </Box>
  );
};

export default Rightbar;
