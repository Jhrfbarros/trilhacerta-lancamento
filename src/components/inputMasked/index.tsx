import React, { useCallback } from "react";
import  TextField, {TextFieldProps} from '@mui/material/TextField';
import InputMask from "react-input-mask";



const InputMasked = (props: TextFieldProps) => {
    
    const handleChange = (e: TextFieldProps) =>{
        //(11)9999-9999
        console.log("AQUI");
        
        e.inputProps={maxLength: 2};
        let value = e.value;
        console.log(value);
        
    };

    return(
        <div>
            <InputMask alwaysShowMask mask="99/99/9999">
                <TextField type="tel" {...props} onChange={handleChange} value="teste" />
            </InputMask>
        </div>
    )

    
};

export default InputMasked;
