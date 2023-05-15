import React, { useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import {Rating} from '@material-ui/lab'
import useStyles from './styles'


export default function Map({setChildclicked, places, setCoordinates, coordinates, setBounds}){
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const defaultProps = {
    zoom: 14
  };

  return (
    // Important! Always set the container height explicitly
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC5YUiUqty4kMrh21hn6PRu6LzAIkcNMJo" }}
        center={coordinates}
        zoom={defaultProps.zoom}
        options={''}
        onChange={(e)=>{
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        margin={[50, 50, 50, 50]}
        onChildClick={(child)=> setChildclicked(child)}>

          {
            places?.map((place, i) =>(
              <div className={classes.markerContainer} key={i} lat={Number(place.latitude)}
                    lng={Number(place.longitude)}>
                   {
                    !isDesktop ? (<LocationOnOutlined color="secondary" />)
                    :(place?.photo?.images.large.url || place?.photo?.images.small.url) && (<Paper elevation={3}  className={classes.paper}>
                        <Typography variant="subtitle2" >{place?.name}</Typography>
                        <img className={classes.media}
                        src={place.photo ? place.photo?.images.large.url : place.photo?.images.small.url}/>
                        <Rating size="small" readOnly value={Number(place?.rating)} />
                      </Paper>)
                   }   
              </div>
            ))
          }
      </GoogleMapReact>
    </div>
  );
}