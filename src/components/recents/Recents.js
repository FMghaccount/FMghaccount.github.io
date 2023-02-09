import React from "react";
import cardImage from "../../static/image5.jpg";
import postImage2 from "../../static/image2.jpg";
import postImage1 from "../../static/image1.jpg";
// import postImage3 from "../../static/image3.jpg";
// import postImage4 from "../../static/image4.jpg";
import { Box, Grid } from "@mui/material";
import ItemCard from "../card/ItemCard";
import Typography from "@mui/material/Typography";
const Recents = () => {
  return (
    <Box sx={{ padding: 0 }}>
      <Typography align="center" p={{ xs: 5, md: 2 }} pt={{ md: 0 }} pb={3} mb={5} sx={{ fontWeight: 300, fontSize: { xs: '1.25rem', sm: '3rem' }, direction: 'rtl', borderBottom: '2px solid #000' }}>
        پربازدید ها
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 1 }}>
        <Grid item sm={6} xs={12}>
          <ItemCard cardImage={postImage2} alt={'watch&tie'} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ItemCard cardImage={postImage1} alt={'clothes'} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ItemCard cardImage={postImage1} alt={'clothes'} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ItemCard cardImage={postImage2} alt={'watch&tie'} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ItemCard cardImage={cardImage} alt={'outfit'} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ItemCard cardImage={cardImage} alt={'outfit'} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recents;
