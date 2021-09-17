import React from "react";
import Button from 'react-bootstrap/Button'
import { BsCaretLeftFill } from 'react-icons/bs'

function PreviousButton({ moreBooks }) {

  return (<Button variant="success" onClick={moreBooks}>  <BsCaretLeftFill /></Button>)
}

export default PreviousButton;
