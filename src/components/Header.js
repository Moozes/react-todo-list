import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    center : {
        justifyContent : "center"
    },
    appBar : {
        marginBottom : theme.spacing(2)
    }
}));

export default function Header(props) {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.center} >
                <Typography variant="h6">
                    TODO APP
                </Typography>
            </Toolbar>
        </AppBar>
    );
}