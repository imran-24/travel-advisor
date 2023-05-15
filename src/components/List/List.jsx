import React, { Fragment, useEffect, useRef } from 'react'
import { CircularProgress, Typography, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles'
import { Label } from '@material-ui/icons';
import PlaceDetails from '../PlaceDetails/PlaceDetails'
const List = ({places, isLoading, type, setType, rating, setRating, childClicked}) => {
  const classes = useStyles();

  const listRef = useRef(null)

  useEffect(()=>{
    const element = listRef.current?.children[childClicked];
    if(element) listRef.current.scrollTop = element.offsetTop - 200;
  },[childClicked])

  return (
    <div className={classes.container}>
      <Typography variant='h5'>
        Restaurants, Hotels & Attractions around you
      </Typography>
      {
        isLoading ? (<div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
          <CircularProgress size='5rem'  />
        </div>)
        : <>
        <FormControl className={classes.formControl}>
        <InputLabel >Type</InputLabel>
        <Select onChange={(e)=> setType(e.target.value)} value={type}>
          <MenuItem value='restaurants'>Restaurants</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel >Rating</InputLabel>
        <Select onChange={(e)=> setRating(e.target.value)} value={rating}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select> 
      </FormControl>

      <Grid ref={listRef} container className={classes.containerItems}>
        {
          places?.map((place, i) => (
            <Grid  item key={i} xs={12} >
              <PlaceDetails place={place}/> 
            </Grid>
          ))
        }
      </Grid>
        
        </>
      }
      
      
    </div>
  )
}

export default List