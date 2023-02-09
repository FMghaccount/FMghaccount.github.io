import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import aboutUsImage from "../../static/AboutUs.jpg";

export default function AboutUsCard() {
  return (
    <Card sx={{ maxWidth: '100vw', direction: 'rtl', lineHeight: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={aboutUsImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          لورم ایپسوم
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, textAlign: 'justify' }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">بیشتر بدانید</Button>
      </CardActions>
    </Card>
  );
}