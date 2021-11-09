import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";

const handleSubmit = (event) => {
	console.log(event);
};

function AddNote({handelAddNote}) {
    
	const [show, setShow] = useState(false);
	const [author, setAuthor] = useState("");
	const [note, setNote] = useState("");

	const handleClose = () => {
		setAuthor("");
		setNote("");
		setShow(false);
	};
	const handleShow = () => {
		setShow(true);
	};

    const handleSave = () => {
        handelAddNote(note,author);
		setAuthor("");
        setNote("");
        setShow(false);
	};

	const handleAuthor = (event) => {
		setAuthor(event.target.value);
	};

	const handleNote = (event) => {
		setNote(event.target.value);
	};

	return (
		<div className='add-note'>
			<Button variant='primary' onClick={handleShow}>
				New Post
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Post a new note</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className='mb-3' controlId='ControlInput1'>
							<Form.Label>Author Name</Form.Label>
							<Form.Control
								type='text'
								value={author}
								onChange={handleAuthor}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='ControlInput2'>
							<Form.Label>What would you like to say</Form.Label>
							<Form.Control
								as='textarea'
								rows='3'
								value={note}
								onChange={handleNote}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleSave}>
						Save New Post
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default AddNote;
