import {Modal,Button} from 'react-bootstrap'
import React, { useContext } from 'react';
import { ContextApp } from '../hooks/ContextApp';

export const UserValidateModal = (props) => {
  const { Notificacion, setNotificacion} = useContext(ContextApp);

  const handleClose = () => setNotificacion(false);
  const handleShow = () => setNotificacion(true);

  return (
    <>

      <Modal show={Notificacion} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>FIFER AIR</Modal.Title>
        </Modal.Header>
        <Modal.Body>“Tu información fue enviada con éxito, estaremos en contacto contigo”</Modal.Body>
      </Modal>
    </>
  );

 
}