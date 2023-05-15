import { CssBaseline, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getPlaceData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
function App() {
  const [places, setPlaces] = useState()
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)
  const [childClicked, setChildclicked ] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('0')
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
    setCoordinates({lat: latitude, lng: longitude})
    })
   },[])
  useEffect(()=>{
    setFilteredPlaces(places?.filter(place => place?.rating >= rating))
  },[rating])
  useEffect(()=>{
    setIsLoading(true)
    getPlaceData(type, bounds?.sw, bounds?.ne)
    .then((data)=>{
       setFilteredPlaces([])
       setPlaces(data)
       setIsLoading(false)
    })
  },[coordinates, type])

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List 
          setType={setType} setRating={setRating} rating={rating} type={type} isLoading={isLoading} places={filteredPlaces?.length > 0 ? filteredPlaces : places}  childClicked={childClicked}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setChildclicked={setChildclicked} places={filteredPlaces?.length > 0 ? filteredPlaces : places} coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
