import * as React from 'react';
import Button from '@mui/material/Button';

function Buttons({click,text,variant}) {
  return (<Button {variant}onClick={() => {click()}} style={{  backgroundColor:"#00D09C" }}>{text}</Button>);
}

export default Buttons;