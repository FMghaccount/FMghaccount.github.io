import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../static/HeroImage.jpg";
const Hero = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "95%" },
            padding: { xs: 2, sm: 3, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8", marginTop: { xs: 18, md: 0 } }}>
            <Typography variant="h6" color="tomato" align="center" pt={8} sx={{ fontWeight: 300, fontFamily: 'iranyekan', direction: 'rtl' }}>
              استایل های روز دنیا
            </Typography>
            <Typography align="center" pb={5} pt={1} sx={{ fontWeight: 300, direction: 'rtl', fontSize: { xs: '1.1rem', sm: '1.7rem', md: '2rem' } }}>
              با ما شما جذاب تر خواهید شد!
            </Typography>
            <Typography align="center" pb={8} sx={{ fontWeight: 300, direction: 'rtl', fontSize: { xs: '1.3rem', sm: '2rem', md: '2.2rem' } }}>
              لورم ایپسوم متن ساختگی با تولید سادگی
            </Typography>
            {/* <Typography variant="body1" align="center" pb={8}>
              we love to change your style lorme ipsum
            </Typography> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
