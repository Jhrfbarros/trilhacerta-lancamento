import React, { useCallback } from "react";
import TextField, {TextFieldProps} from '@mui/material/TextField';

export default function InputMasked(props:TextFieldProps) {
    
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{

        const type = e.currentTarget.attributes.getNamedItem("type")?.value;
        let value = e.currentTarget.value;

        switch (type) {
            case "nome":
                value = value.replace(/[1234567890`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
                break;
            case "telefone":
                //Mask Format: (11)9999-9999
                e.currentTarget.maxLength = 11;
                value = value.replace(/\D/g, "");
                value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
                break;
            default:
                break;
        }
        e.currentTarget.value = value;
        
    }, []);

    return(
        <div>
            <TextField type="tel" {...props} onChange={handleChange} />
        </div>
    )
};
