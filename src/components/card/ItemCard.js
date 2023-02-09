// import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
// import { Box, Link } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const ItemCard = ({ cardImage, alt }) => {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <Box>
      <Link
        to="/details"
        style={{ textDecoration: 'none', color: '#fff' }}
      // sx={{ textDecoration: "none" }}
      >
        {/* <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          image={cardImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            align="center"
            component="div"
            color={"tomato"}
          >
            PERFUMES
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="div">
            Wearing this will make everyone love you
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            align="center"
            component="div"
            color="text.secondary"
          >
            it's womens love
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
        <Card sx={{ maxWidth: '100vw', direction: 'rtl' }}>
          <CardHeader
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            gutterBottom
            title="لورم ایپسوم"
            subheader={`${date.toLocaleDateString('fa-IR', options)}`}
          />
          <CardMedia
            component="img"
            height="194"
            image={cardImage}
            alt={alt}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, textAlign: 'justify' }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            </Typography>
          </CardContent>
          <CardActions sx={{ direction: 'ltr' }} disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Link>
    </Box >
  );
};

export default ItemCard;
