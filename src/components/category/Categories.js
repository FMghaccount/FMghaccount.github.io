import React from "react";
import kidsImage from "../../static/kids.jpg";
import womenImage from "../../static/women.jpg";
import menImage from "../../static/men.jpg";
import { Box, Stack, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  height: { xs: 300, md: 200 },
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: '11vh auto',
  top: '10vh',
  // margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});
const Categories = () => {
  return (
    <Box>
      <Typography align="center" p={10} pb={3} mb={5} sx={{ fontWeight: 300, fontSize: { xs: '1.25rem', sm: '3rem' }, direction: 'rtl', borderBottom: '2px solid #000' }}>
        دسته بندی
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 3, md: 1 }}
        spacing={{ xs: 3, sm: 0, md: 0 }}
      >
        <StyledBox sx={{ backgroundImage: `url(${kidsImage})` }}>
          <StyledTypography align="center" variant="h3">
            بچگانه
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${menImage})` }}>
          <StyledTypography align="center" variant="h3">
            مردانه
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${womenImage})` }}>
          <StyledTypography align="center" variant="h3">
            زنانه
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box >
  );
};

export default Categories;
