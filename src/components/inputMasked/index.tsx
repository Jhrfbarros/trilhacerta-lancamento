import React, { useCallback } from "react";
import  TextField, {TextFieldProps} from '@mui/material/TextField';



const InputMasked = (props: TextFieldProps) => {
    
    const handleChange = (e: TextFieldProps) =>{
        //(11)9999-9999
        console.log("AQUI");
        
        e.inputProps={maxLength: 2};
        let value = e.value
    };

    return(
        <div>
            <TextField {...props} onChange={handleChange} />
        </div>
    )

    
};

export default InputMasked;
