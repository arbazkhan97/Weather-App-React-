import Alert from '@mui/material/Alert';

export default function Alert1(){

    return(
       
             <Alert style={{width: '20%', margin: 'auto', marginTop: '20px' ,textAlign: 'center', color: 'red'}}
             
             severity="error">This city is not exist in our API.</Alert>
        
    )
}