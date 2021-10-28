import React from "react";
import { Modal, ListGroup } from "react-bootstrap";

const ModalDetail = ({ show, handleClose, champion, loading }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{!loading ? champion.name : ""}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          <ListGroup as="ol" numbered="true">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <strong>Tags</strong>
                </div>
                {champion.tags.join()}
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <strong>lore</strong>
                </div>
                {champion.lore}
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <strong>Enemy Tips</strong>
                </div>
                <ul>
                  {champion.enemytips.map((enemytip, index) => (
                    <li key={index}>{enemytip}</li>
                  ))}
                </ul>
              </div>
            </ListGroup.Item>
          </ListGroup>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalDetail;
