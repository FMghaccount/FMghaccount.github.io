import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
import Container from '@mui/material/Container';
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  justifyContent: 'center',
  color: "white",
});

const Footer = () => {
  return (
    <Box sx={{ background: "black", minHeight: "300px" }}>
      <Container maxWidth="xxxl">
        <Stack direction={{ xs: "column", md: "row" }} pt={7}>
          <Box sx={{ borderBottom: { xs: '1px solid #555555', md: 0 }, pb: 4 }}>
            <Typography align="center" sx={{ fontWeight: 900, fontFamily: 'iranyekan', fontSize: { xs: '2rem', sm: '3rem' }, color: '#fff' }}>
              مد<b style={{ color: "red" }}>استایل</b>
            </Typography>
            <Typography color={"white"} align={"center"} sx={{ mb: 3, mt: { xs: 4, md: 0 } }}>
              ما را در شبکه های اجتماعی دنبال کنید
            </Typography>
            <SocialBox>
              <Facebook />
              <Instagram />
              <Twitter />
            </SocialBox>
          </Box>
          <Box flex={1} sx={{ display: 'flex', gap: 1.5, flexDirection: 'column', mt: { xs: 4, md: 0 }, borderBottom: { xs: '1px solid #555555', md: 0 }, pb: 4 }}>
            <Typography color={"white"} align={"center"}>
              صفحه اصلی
            </Typography>
            <Typography color={"white"} align={"center"}>
              حریم شخصی
            </Typography>
            <Typography color={"white"} align={"center"}>
              درباره ما
            </Typography>
            <Typography color={"white"} align={"center"}>
              سؤالات پر تکرار
            </Typography>
          </Box>
          <Box flex={1} sx={{ display: 'flex', gap: 1.5, flexDirection: 'column', mt: { xs: 4, md: 0 }, borderBottom: { xs: '1px solid #555555', md: 0 }, pb: 4 }}>
            <Typography color={"white"} align={"center"}>
              دسته بندی ها
            </Typography>
            <Typography color={"white"} variant={"body2"} align={"center"}>
              بچگانه
            </Typography>
            <Typography color={"white"} variant={"body2"} align={"center"}>
              مردانه
            </Typography>
            <Typography color={"white"} variant={"body2"} align={"center"}>
              زنانه
            </Typography>
          </Box>
          <Box flex={1} sx={{ mt: { xs: 4, md: 0 } }}>
            <Typography color={"white"} align={"justify"} sx={{ direction: 'rtl', lineHeight: 1.9 }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </Typography>
            {/* <Typography color={"white"} align={"center"}>
              of squamate reptiles, with over 6,000 species,
            </Typography>
            <Typography color={"white"} align={"center"}>
              continents except Antarcti
            </Typography>
            <Typography color={"white"} align={"center"}>
              ranging across
            </Typography> */}
          </Box>
        </Stack>
        <Box sx={{ mt: { xs: 6, md: 0 }, display: 'block', textAlign: 'center' }}>
          <Typography align={"justify"} pb={3} sx={{ direction: 'rtl', lineHeight: 1.9, color: '#9f9f9f', textAlign: 'center' }}>
            Copyright © 2023 Material UI v5 Sample
          </Typography>
          {/* <Typography color={"white"} align={"center"}>
              of squamate reptiles, with over 6,000 species,
            </Typography>
            <Typography color={"white"} align={"center"}>
              continents except Antarcti
            </Typography>
            <Typography color={"white"} align={"center"}>
              ranging across
            </Typography> */}
        </Box>
      </Container>
    </Box >

  );
};

export default Footer;
