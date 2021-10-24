import { useState, useEffect } from 'react';
import {IconButton, Card, FormControl, TextField} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../App.css';

const AddTask=({onSave})=>{

    const [val, setVal]=useState('');
    const [disabledButton, setDisabledButton]= useState(true);
    const [colorButton, setColorButton]=useState('disabled');

    const saveValue=()=>{
        onSave(val);
        setVal('');
    }

    useEffect(()=>{
        if(val.length>0){
            setDisabledButton(false);
            setColorButton('primary')
        }else{
            setDisabledButton(true);
            setColorButton('disabled')
        }
    },[val])

    return(
        <Card className="form">
            <FormControl className="form-content">
                <TextField
                    placeholder="Type a task"
                    value={val}

                    onChange={(ev)=>setVal(ev.target.value)}
                    InputProps={{
                        endAdornment:(
                            <IconButton
                                disabled={disabledButton}
                                onClick={saveValue}>
                                <AddCircleIcon color={colorButton} fontSize="large"/>
                            </IconButton>
                        )
                    }}
                />
            </FormControl>
        </Card>
    )
}

export default AddTask;