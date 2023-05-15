import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

mapContainer:{
    height: '85vh',
    width: "100%"
},
media:{
    height: 50
},
paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },

markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },cursor: 'pointer'
  },
}));