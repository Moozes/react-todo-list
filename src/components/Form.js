import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    paper : {
        display : "flex",
        flexDirection : "column",
        gap : theme.spacing(1),
        padding : theme.spacing(1),
        marginBottom : theme.spacing(2)
    },
    button : {
        alignSelf : "flex-end"
    }
}))




export default function Form({
    addTodo
}) {
    // console.log(green);
    const classes = useStyles();
    const [text, setText] = useState('');

    const changeHandler = (e) => {
        setText(e.target.value);
    }

    const handleAdd = () => {
        if(text.trim()) 
            addTodo({
                id : text,
                text
            })
            setText('');
    }
    return(
        <>
            <Paper elevation={6} className={classes.paper} >
                <TextField 
                    label="Add Todo" 
                    variant="outlined" 
                    value={text}
                    onChange={changeHandler}
                />
                    <Button 
                        color="primary" 
                        variant="contained" 
                        className={classes.button} 
                        onClick={handleAdd}
                    >Add</Button>
                
            </Paper>
        </>
    );
}