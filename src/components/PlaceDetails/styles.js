import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        maxWidth: 345,
        marginTop: 20
      },
    media: {
        height: 140,
    },
    chip:{
        margin: theme.spacing(0, .5 , .5, 0)
    },
    row:{
      marginTop: theme.spacing(.8),
      display: 'flex',
      justifyContent: "space-between",
      gap: 10
    }

}));