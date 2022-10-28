import { React } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


function CarCard({id, year, make, model, image, badge}) {
  const navigate = useNavigate();
  // let badge = "";
  let color = ""

  if(year > 2010){
    // badge = "New";
    color = "success";
  } else if (year < 2000) {
    // badge = "Classic";
    color = "error";
  } else {
    // badge = "Old";
    color = "primary";
  }

  return (
         <Card sx={{ minWidth: 225, mx: 5 }}>
          <CardMedia component="img" height="200" image={image} alt="Car"/>
            
          <CardContent>
            <Typography variant="h5" component="div" key={year}>
              <span>{year}</span> <span>{make}</span> <span>{model}</span>
            </Typography>
          </CardContent>
          <CardActions style={{ display: 'flex', height: '100%', justifyContent:"space-between" }}>
            <Button variant="outlined"
              onClick={() => navigate(`/details/${id}`)}
              size="small"
            >
              Details
            </Button>
            <Chip label={badge} color={color} />
          </CardActions>
        </Card>
  )
}

export default CarCard