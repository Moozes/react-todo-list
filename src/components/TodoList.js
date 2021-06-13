import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper : {
        padding : theme.spacing(1)
    }
}))

export default function TodoList({
    todos,
    deleteTodo,
    editTodo
}) {
    const classes = useStyles();
    const empty = todos.length == 0;

    return(
        <Paper elevation={6}
            className={classes.paper}
        >
            {empty ? (
                <Typography variant="h5" align="center">
                    No todos yet!
                </Typography>
            ) : (
                todos.map(elm => (
                    <Todo 
                        todo={elm} 
                        key={elm.id}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))
            )}
        </Paper>
    );
}