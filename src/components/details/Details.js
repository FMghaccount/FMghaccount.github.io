import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import detailsImage from "../../static/image5.jpg";
import postImage from "../../static/image2.jpg";
import Rightbar from "../rightbar/Rightbar";
const Details = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${detailsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <Box sx={{
          width: { xs: "100%", sm: "95%" },
          padding: { xs: 2, sm: 3, md: 20 },
        }}>
          <Typography
            align="center"
            color={"black"}
            sx={{
              fontWeight: 900, padding: 5, background: "white", opacity: "0.8", fontSize: { xs: '1.3rem', sm: '1.9rem', md: '2.2rem' }, marginTop: { xs: 24, md: 0 }, lineHeight: 2
            }}
          >
            لورم ایپسوم متن ساختگی
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="xxxl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: { md: "18px 2rem 100px 0px" } }}>
            <Typography
              m={4}
              align="center"
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900, direction: 'rtl', textAlign: 'justify' }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </Typography>
            <CardMedia
              component="img"
              height="450px"
              image={postImage}
              alt="green iguana"
            />
            <Typography
              mt={4}
              mb={{ xs: 6, md: 0 }}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900, direction: 'rtl', textAlign: 'justify', lineHeight: 2 }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </Typography>
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box >
  );
};

export default Details;
