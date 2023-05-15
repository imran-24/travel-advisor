import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography,InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import useStyle from './styles'
import { LanguageOutlined } from '@material-ui/icons'
const Header = ({setCoordinates}) => {
  const classes = useStyle(); 
  const [autocomplete, setautocomplete] = useState(null);
  
  const autocompleteOptions = {
    types: ["geocode"],
    componentRestrictions: { country: "us" },
  };


  const onAutocompleteLoad = (autoC)=> {
    console.log(autoC)
    setautocomplete(autoC)}
  const onPlaceChanged = ()=>{

    // const lat = autocomplete.getPlace().geometry.location.lat()
    // const lng = autocomplete.getPlace().geometry.location.lng()
    // console.log(lat, lng)
    const place = autocomplete.getPlace();
  if (place?.geometry?.location) {
    console.log(place);
  } else {
    console.log("Invalid place object: ", place);
  }
    // setCoordinates({lat, lng})
  }
  return (
    // <AppBar position='static'>
    //     <Toolbar className={classes.toolbar}>
    //         <Typography variant='h5' className={classes.title}>
    //             Travel Advisor
    //         </Typography>
    //         {/* box is a div */}
    //         <Box display='flex' >
    //             <Typography variant='h6' className={classes.title}>
    //                 Explore new places
    //             </Typography>
    //             {/* <Autocomplete> */}
    //                 <div className={classes.search}>
    //                     <div className={classes.searchIcon}>
    //                         <SearchIcon />
    //                     </div>
    //                     <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
    //                 </div>
    //             {/* </Autocomplete> */}
    //         </Box>
    //     </Toolbar>
    // </AppBar>
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                Travel Advisor
            </Typography>
            <Box style={{ display: "flex", alignItems: 'center'}}>
                <Typography variant='h6' className={classes.title}>
                    Explore new places
                </Typography>
                <Autocomplete 
                onLoad={onAutocompleteLoad}
                onPlaceChanged={onPlaceChanged}
                options={autocompleteOptions}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                </div>
                </Autocomplete>
            </Box>
        </Toolbar>
    </AppBar>

  )
}

export default Header