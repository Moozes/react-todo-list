import { makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
    accordion : {
        marginBottom : theme.spacing(1),
        // cursor : 'default'
    },
    text : {
        flex : 1
    },
    content : {
        alignItems : 'center',
        gap : theme.spacing(1), 
    },
    accordionSummary : {
        cursor : 'default'
    },
    MuiSvgIconRootEdit : {
        color : theme.palette.success.main
    },
    MuiSvgIconRootDelete : {
        color : theme.palette.error.main
    },
    editButton : {
        alignSelf : 'stretch',
        color : theme.palette.getContrastText(green[500]),
        backgroundColor : green[500],
        '&:hover' : {
            backgroundColor : green[700]
        }
    }
}));



export default function Todo({
    todo,
    deleteTodo,
    editTodo
}) {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleEditModeActivation = () => {
        setText(todo.text);
        setEditMode(true);
    }

    const handleEdit = () => {
        // dont accept editing except if the text is not empty <=> truthy
        if(text.trim())
            editTodo({
                id : todo.id,
                text
            });
        setEditMode(false);
        setText('');
    }

    return(
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <Accordion expanded={false}   className={classes.accordion}>
                <AccordionSummary
                    classes={{
                        content : classes.content
                    }}
                    // expandIcon={<ExpandMoreIcon />}
                >
                    {!editMode ? (
                        <>
                            <Typography 
                            className={classes.text}
                            variant="h5"
                            >{todo.text}</Typography>
                            <IconButton 
                                size="small"
                                onClick={handleEditModeActivation}    
                            >
                                <EditIcon  classes={{root : classes.MuiSvgIconRootEdit}}/>
                            </IconButton>
                            <IconButton 
                                size="small" 
                                onClick={() => deleteTodo(todo.id)}
                                >
                                <DeleteIcon  classes={{root : classes.MuiSvgIconRootDelete}}/>
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <TextField 
                                label="Edit Todo" 
                                variant="outlined" 
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                autoFocus
                                className={classes.text}
                            />
                            <Button 
                                color="primary" 
                                variant="contained" 
                                className={classes.editButton}   
                                onClick={handleEdit}
                            >Edit</Button>
                        </>
                    )}
                </AccordionSummary>
            </Accordion>
        </Slide>
    );
}