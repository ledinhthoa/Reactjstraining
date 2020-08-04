import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Modalcontent extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title> {this.props.userdata.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={this.props.userdata.imageFolderName} alt="" />
              </div>
            <div className="col-lg-5">
          <p>{this.props.userdata.contentPost}</p>
          <p>{this.props.userdata.address}</p>
          <p>{this.props.userdata.created_at}</p>
            </div>
          </div>
        </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
      </Modal>
    );
  }
}

export default Modalcontent;