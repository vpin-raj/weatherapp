import { Alert, AlertColor, Stack } from '@mui/material'
import { ReactNode } from 'react'
import { Severity } from '../../../models/common/Severity'

const Message = (props : {message : string, severity : Severity }) => {

    const messageBanner = (message : string, severity: Severity) : ReactNode => {
        if(message !== undefined && message !== null  && message !== ''
        && severity !== undefined && severity !== null && severity !== '') 
        {
            return(
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity={severity as AlertColor} >{props?.message}!</Alert>
                </Stack>
              )
        }
      }  
    
      return (
         <div>
            {messageBanner(props?.message, props?.severity)}
         </div>
      )

}

export default Message