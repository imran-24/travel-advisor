import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

title:{
    display: 'none',
    [theme.breakpoints.up('sm')]:{
        display: 'block'
    }
}, 
toolbar:{
    display: 'flex',
    width:'100%',
    justifyContent: "space-between",
    alignItems: "center"
},
inputRoot: {
    color: 'inherit',
},
inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
},

search:{
    position: 'relative',
    [theme.breakpoints.down('xs')]:{
        width: "94vw",
    },
    display:"flex",
    alignItems: "center",
    [theme.breakpoints.up('sm')]:{
        marginLeft: theme.spacing(2),
    },
    backgroundColor: alpha(theme.palette.common.white, '.15'),
    "&:hover":{ backgroundColor: alpha(theme.palette.common.white, .25)},
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    gap: theme.spacing(.8)

},
searchIcon:{
    height: '100%',
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "default",
},




}));