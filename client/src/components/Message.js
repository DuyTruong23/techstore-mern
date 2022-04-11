<<<<<<< HEAD
import React from "react";
import { Alert } from "react-bootstrap";
=======
import React from 'react';
import { Alert } from 'react-bootstrap';
>>>>>>> feature/Duy2

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
<<<<<<< HEAD
  variant: "info",
=======
  variant: 'info',
>>>>>>> feature/Duy2
};

export default Message;
