import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Categories from "../category/Categories";
import Hero from "../hero/Hero";
import Recents from "../recents/Recents";
import Rightbar from "../rightbar/Rightbar";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container maxWidth="xxxl">
        <Categories />
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: { md: "18px 2rem 100px 0px" } }}>
            <Recents />
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
