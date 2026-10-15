import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LinkedInPopup = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>LinkedIn Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Visit my LinkedIn profile for more information!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" href="YOUR_LINKEDIN_URL" target="_blank">
          Visit LinkedIn
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LinkedInPopup;
