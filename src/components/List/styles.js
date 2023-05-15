import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container:{
        
        padding: theme.spacing(2),
        margin: 'auto'

    },

    formControl: {
        margin: theme.spacing(2, 2, 2, 0),
        minWidth: 120,
    },
    containerItems:{
        height: '75vh',
        overflowY: 'scroll',
    }
}));