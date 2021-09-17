import React from "react";
import Button from 'react-bootstrap/Button'
import { BsCaretRightFill } from 'react-icons/bs'

function Nextbutton({ moreBooks}) {

  return <Button variant="success" onClick={moreBooks}><BsCaretRightFill/></Button>;
}

export default Nextbutton;
