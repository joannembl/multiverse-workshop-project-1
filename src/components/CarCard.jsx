import { React } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CarCard({year, make, model, image}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
			<CardMedia component="img" height="140" image={image} alt="Car"/>
				
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" key={year}>
					<span>{year}</span> <span>{make}</span> <span>{model}</span>
				</Typography>
			</CardContent>
      <CardActions>
        <Button size="large">Details</Button>
      </CardActions>
    </Card>
  )
}

export default CarCard