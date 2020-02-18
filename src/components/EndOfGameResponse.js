import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

class EndOfGameResponse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState( {
            show: false
        });
    }

    render() {
        return(
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default EndOfGameResponse;