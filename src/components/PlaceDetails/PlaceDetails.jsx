import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Chip } from '@material-ui/core';
import useStyles from './styles'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { Rating } from '@material-ui/lab';


const PlaceDetails = ({place}) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      { (place.photo?.images.large.url || place.photo?.images.small.url) &&
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={place.photo ? place.photo?.images.large.url : place.photo?.images.small.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {place?.name}
          </Typography>
          
          <Box className={classes.row}> 
          <Rating size="small" readOnly value={Number(place?.rating)} />
          <Typography gutterBottom variant="subtitle2">
          {place?.num_reviews}
          </Typography>
          </Box>

          <Box className={classes.row}> 
          <Typography  variant="subtitle2" >
          Price
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          {place?.price_level}
          </Typography>
          </Box>

          <Box className={classes.row}> 
          <Typography  variant="subtitle2" >
          Ranking
          </Typography>
          <Typography gutterBottom variant="subtitle2">
          {place?.ranking}
          </Typography> 
          </Box>
          {
            place?.awards?.map(award => (
              <Box className={classes.row}>
                <img src={award?.images?.small} />
                <Typography  variant="subtitle2" >
                   {award?.display_name}
                </Typography>
              </Box>
            ))
          }
          {
            place?.cuisine?.map( ({name })=>(
              <Chip className={classes.chip}  key={name} size="small" label={name} />
            ))
          }
          {
            place?.address && (
              <Typography  className={classes.row} variant="body2" color='textSecondary' gutterBottom >
              <LocationOnIcon fontSize='small' color='action'/>
              {place?.address}
              </Typography>            )
          }
          {
            place?.phone && (
              <Typography  className={classes.row} variant="body2" color='textSecondary' gutterBottom >
              <PhoneIcon fontSize='small' color='action'/>
              {place?.phone}
              </Typography>            )
          }

        </CardContent>
      </CardActionArea>}
      <CardActions>
        <Button size="small" color="primary" onClick={()=> window.open(place?.web_url, '-blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={()=> window.open(place?.website, '-blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  )
}

export default PlaceDetails